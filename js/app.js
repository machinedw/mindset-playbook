// The Predator's Playbook - Main App Logic with Chapter Navigation

class PredatorApp {
    constructor() {
        this.currentDay = this.loadProgress();
        this.isAnimating = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.menuOpen = false;
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.renderLesson();
        this.attachEventListeners();
        this.updateProgress();
        this.renderChapterMenu();
    }

    cacheElements() {
        this.navLeft = document.getElementById('nav-left');
        this.navRight = document.getElementById('nav-right');
        this.lessonText = document.getElementById('lesson-text');
        this.lessonImage = document.getElementById('lesson-image');
        this.chapterInfo = document.getElementById('chapter-info');
        this.progressBar = document.getElementById('progress-bar');
        this.lessonContainer = document.getElementById('lesson-container');
        this.menuButton = document.getElementById('menu-button');
        this.chapterMenu = document.getElementById('chapter-menu');
        this.menuOverlay = document.getElementById('chapter-menu-overlay');
        this.headerTitle = document.getElementById('header-title');
    }

    attachEventListeners() {
        // Tap navigation
        this.navLeft.addEventListener('click', () => this.previousDay());
        this.navRight.addEventListener('click', () => this.nextDay());

        // Menu toggle
        this.menuButton.addEventListener('click', () => this.toggleMenu());
        this.menuOverlay.addEventListener('click', () => this.closeMenu());

        // Swipe gestures
        this.lessonContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, false);

        this.lessonContainer.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, false);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousDay();
            if (e.key === 'ArrowRight') this.nextDay();
        });

        // Prevent image dragging
        this.lessonImage.addEventListener('dragstart', (e) => e.preventDefault());
    }

    renderChapterMenu() {
        const menuHTML = CHAPTERS.map(chapter => {
            const startDay = this.getChapterStartDay(chapter.id);
            const isActive = this.isInChapter(chapter.id);
            return `
                <div class="chapter-item ${isActive ? 'active' : ''}" data-chapter="${chapter.id}">
                    <div class="chapter-item-title">Chapter ${chapter.id}: ${chapter.name}</div>
                    <div class="chapter-item-subtitle">Days ${startDay}-${startDay + chapter.days - 1}</div>
                </div>
            `;
        }).join('');

        this.chapterMenu.innerHTML = menuHTML;

        // Add click handlers
        document.querySelectorAll('.chapter-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const chapterId = parseInt(e.currentTarget.dataset.chapter);
                this.jumpToChapter(chapterId);
            });
        });
    }

    getChapterStartDay(chapterId) {
        let day = 1;
        for (let i = 0; i < chapterId - 1; i++) {
            day += CHAPTERS[i].days;
        }
        return day;
    }

    isInChapter(chapterId) {
        const chapterInfo = getChapterInfo(this.currentDay);
        return chapterInfo && chapterInfo.chapterId === chapterId;
    }

    jumpToChapter(chapterId) {
        const startDay = this.getChapterStartDay(chapterId);
        this.currentDay = startDay;
        this.saveProgress();
        this.transitionLesson();
        this.closeMenu();
        this.renderChapterMenu();
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            this.chapterMenu.classList.add('open');
            this.menuOverlay.classList.add('open');
        } else {
            this.closeMenu();
        }
    }

    closeMenu() {
        this.menuOpen = false;
        this.chapterMenu.classList.remove('open');
        this.menuOverlay.classList.remove('open');
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextDay();
            } else {
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
            this.renderChapterMenu();
        }
    }

    previousDay() {
        if (this.isAnimating) return;
        if (this.currentDay > 1) {
            this.currentDay--;
            this.saveProgress();
            this.transitionLesson();
            this.renderChapterMenu();
        }
    }

    transitionLesson() {
        this.isAnimating = true;
        
        this.lessonText.style.animation = 'fadeOut 0.3s ease forwards';
        this.lessonImage.parentElement.style.animation = 'fadeOut 0.3s ease forwards';

        setTimeout(() => {
            this.renderLesson();
            this.updateProgress();
            
            this.lessonText.style.animation = 'fadeInUp 0.6s ease forwards';
            this.lessonImage.parentElement.style.animation = 'fadeInScale 0.6s ease 0.2s forwards';
            
            setTimeout(() => {
                this.isAnimating = false;
            }, 600);
        }, 300);
    }

    renderLesson() {
        const lesson = getLessonByDay(this.currentDay);
        this.lessonText.textContent = lesson.text;
        this.lessonImage.src = lesson.image;
        this.lessonImage.alt = `Day ${lesson.day}: ${lesson.title}`;
        
        const chapterInfo = getChapterInfo(this.currentDay);
        if (chapterInfo) {
            this.headerTitle.textContent = `Day ${this.currentDay} of 90`;
        }
    }

    updateProgress() {
        const chapterInfo = getChapterInfo(this.currentDay);
        
        if (chapterInfo) {
            this.chapterInfo.textContent = 
                `Chapter ${chapterInfo.chapterId}: ${chapterInfo.chapterName} • Day ${chapterInfo.dayInChapter} of ${chapterInfo.totalDaysInChapter}`;
            
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

// Initialize app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PredatorApp();
    });
} else {
    new PredatorApp();
}

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/mindset-playbook/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
