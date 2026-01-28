// The Predator's Playbook - Main App Logic
// Handles navigation, progress tracking, and localStorage persistence

class PredatorApp {
    constructor() {
        this.currentDay = this.loadProgress();
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.renderLesson();
        this.attachEventListeners();
        this.updateProgress();
    }

    cacheElements() {
        this.navLeft = document.getElementById('nav-left');
        this.navRight = document.getElementById('nav-right');
        this.lessonText = document.getElementById('lesson-text');
        this.lessonImage = document.getElementById('lesson-image');
        this.chapterInfo = document.getElementById('chapter-info');
        this.progressBar = document.getElementById('progress-bar');
        this.lessonContainer = document.getElementById('lesson-container');
    }

    attachEventListeners() {
        // Tap navigation
        this.navLeft.addEventListener('click', () => this.previousDay());
        this.navRight.addEventListener('click', () => this.nextDay());

        // Swipe gestures
        this.lessonContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, false);

        this.lessonContainer.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, false);

        // Keyboard navigation (for desktop testing)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousDay();
            if (e.key === 'ArrowRight') this.nextDay();
        });

        // Prevent image dragging
        this.lessonImage.addEventListener('dragstart', (e) => e.preventDefault());
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - go to next
                this.nextDay();
            } else {
                // Swiped right - go to previous
                this.previousDay();
            }
        }
    }

    nextDay() {
        if (this.isAnimating) return;
        if (this.currentDay < 90) {
            this.currentDay++;
            this.saveProgress();
            this.transitionLesson();
        }
    }

    previousDay() {
        if (this.isAnimating) return;
        if (this.currentDay > 1) {
            this.currentDay--;
            this.saveProgress();
            this.transitionLesson();
        }
    }

    transitionLesson() {
        this.isAnimating = true;
        
        // Fade out
        this.lessonText.style.animation = 'fadeOut 0.3s ease forwards';
        this.lessonImage.parentElement.style.animation = 'fadeOut 0.3s ease forwards';

        setTimeout(() => {
            this.renderLesson();
            this.updateProgress();
            
            // Fade in
            this.lessonText.style.animation = 'fadeInUp 0.6s ease forwards';
            this.lessonImage.parentElement.style.animation = 'fadeInScale 0.6s ease 0.2s forwards';
            
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        }, 300);
    }

    renderLesson() {
        const lesson = getLessonByDay(this.currentDay);
        
        // Render text
        this.lessonText.textContent = lesson.text;
        
        // Render image
        this.lessonImage.src = lesson.image;
        this.lessonImage.alt = `Day ${lesson.day}: ${lesson.title}`;
    }

    updateProgress() {
        const chapterInfo = getChapterInfo(this.currentDay);
        
        if (chapterInfo) {
            // Update chapter info text
            this.chapterInfo.textContent = 
                `Chapter ${chapterInfo.chapterId}: ${chapterInfo.chapterName} • Day ${chapterInfo.dayInChapter} of ${chapterInfo.totalDaysInChapter}`;
            
            // Update progress bar (chapter-based)
            const progress = (chapterInfo.dayInChapter / chapterInfo.totalDaysInChapter) * 100;
            this.progressBar.style.width = `${progress}%`;
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('predator_playbook_day', this.currentDay.toString());
        } catch (e) {
            console.error('Failed to save progress:', e);
        }
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('predator_playbook_day');
            return saved ? parseInt(saved, 10) : 1;
        } catch (e) {
            console.error('Failed to load progress:', e);
            return 1;
        }
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PredatorApp();
    });
} else {
    new PredatorApp();
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}