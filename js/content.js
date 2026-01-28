// The Predator's Playbook - 90 Days of Strategic Wisdom
// Maximum 6 lines per lesson, ruthless and actionable

const CHAPTERS = [
    { id: 1, name: "Foundation", days: 7 },
    { id: 2, name: "Self-Mastery", days: 7 },
    { id: 3, name: "Reading People", days: 7 },
    { id: 4, name: "Strategic Vision", days: 7 },
    { id: 5, name: "Information Control", days: 7 },
    { id: 6, name: "Negotiation", days: 7 },
    { id: 7, name: "Influence", days: 7 },
    { id: 8, name: "Team Building", days: 7 },
    { id: 9, name: "Competitive Warfare", days: 7 },
    { id: 10, name: "Adaptation", days: 7 },
    { id: 11, name: "Protection", days: 7 },
    { id: 12, name: "Leverage", days: 6 },
    { id: 13, name: "Legacy", days: 6 }
];

const LESSONS = [
    // CHAPTER 1: Foundation (Days 1-7)
    {
        day: 1,
        chapter: 1,
        title: "Nice Guys Finish Last",
        text: "Empathy is a weapon, not a weakness. The most dangerous people choose when to be kind. They understand pain because they've felt it, and they use that knowledge strategically. Never confuse compassion with softness—one builds loyalty, the other invites exploitation.",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80"
    },
    {
        day: 2,
        chapter: 1,
        title: "Comfort Is the Enemy",
        text: "Every empire crumbles when leaders get comfortable. The moment you stop being hungry, someone hungrier is studying your weaknesses. Comfort breeds complacency, and complacency breeds defeat. Stay paranoid. Stay sharp.",
        image: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=800&q=80"
    },
    {
        day: 3,
        chapter: 1,
        title: "Fear Is Data",
        text: "Your fear tells you exactly where you're vulnerable. Most people run from it. Winners study it, weaponize it, and then eliminate it. Fear isn't the problem—ignoring what it reveals is. Listen to your fear, then kill what caused it.",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80"
    },
    {
        day: 4,
        chapter: 1,
        title: "Reputation Over Everything",
        text: "Your reputation enters rooms before you do. It closes deals you never touch. It destroys enemies you never meet. Build it like a fortress—slow, strong, impenetrable. One lie can crack it. One kept promise can cement it for decades.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
    },
    {
        day: 5,
        chapter: 1,
        title: "Information Is Currency",
        text: "He who knows more, wins more. Information isn't just power—it's the difference between predicting the future and reacting to it. Never share everything you know. Never show your full hand. The gap between what you know and what they think you know is your edge.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
        day: 6,
        chapter: 1,
        title: "No One Owes You Anything",
        text: "Entitlement is the disease of the mediocre. The world doesn't care about your degree, your effort, or your intentions. It cares about results. You want respect? Earn it. You want power? Take it. Stop waiting for permission and start delivering undeniable value.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    },
    {
        day: 7,
        chapter: 1,
        title: "Speed Kills Hesitation",
        text: "The market rewards the fast, not the perfect. While others overthink, you execute. While they wait for certainty, you adapt mid-flight. Decisiveness is a superpower. Make the call, adjust if wrong, but never freeze. Hesitation is how you lose wars you should have won.",
        image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80"
    },

    // CHAPTER 2: Self-Mastery (Days 8-14)
    {
        day: 8,
        chapter: 2,
        title: "Control Your Reactions",
        text: "Anger is a tell. Panic is suicide. The person who controls their emotions controls the room. React only when it serves you. Silence is often more terrifying than rage. Master yourself before you attempt to master anything else.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
    },
    {
        day: 9,
        chapter: 2,
        title: "Discipline > Motivation",
        text: "Motivation is a fleeting emotion. Discipline is a system. Champions don't rely on feelings—they rely on routines that don't care how they feel. Build habits that compound. Do the work when you don't want to. That's where greatness lives.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
        day: 10,
        chapter: 2,
        title: "Kill Your Ego Daily",
        text: "Your ego will lie to you. It will tell you you're smarter, safer, more deserving than you are. It will get you killed. Check it daily. Ask: 'Am I reacting from strength or insecurity?' The strongest leaders have the smallest egos because they don't need validation—they have results.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
        day: 11,
        chapter: 2,
        title: "Pain Is Your Teacher",
        text: "Failure stings. Humiliation burns. Good. That's the tuition you pay for wisdom. Most people avoid pain and stay average. You? Extract the lesson, burn the shame, and weaponize what you learned. Every loss is data. Every wound is a warning.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    },
    {
        day: 12,
        chapter: 2,
        title: "Energy Is Everything",
        text: "You can't win tired. Protect your sleep, your health, your focus like your life depends on it—because it does. Weak leaders burn out. Smart leaders manage their energy like a portfolio. Rest is strategic, not lazy. Fatigue makes cowards of us all.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80"
    },
    {
        day: 13,
        chapter: 2,
        title: "Become Unreachable",
        text: "Not everyone deserves access to you. Your time, your attention, your presence—these are your most valuable assets. Become selective. Become expensive. People value what's scarce. If you're always available, you're never taken seriously.",
        image: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&q=80"
    },
    {
        day: 14,
        chapter: 2,
        title: "Standards Set Altitude",
        text: "The standard you tolerate is the standard you deserve. If you accept mediocrity from yourself, others will sense it and give you less. Raise your standards, then raise them again. Excellence isn't an act—it's a habit that becomes your identity.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
    },

    // CHAPTER 3: Reading People (Days 15-21)
    {
        day: 15,
        chapter: 3,
        title: "Watch What They Do",
        text: "Words are theater. Actions are truth. People will promise you the world and deliver excuses. Ignore their speeches. Study their patterns. The person who shows up late doesn't respect your time. The person who keeps promises once will keep them again. Behavior never lies.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
    },
    {
        day: 16,
        chapter: 3,
        title: "Find the Insecurity",
        text: "Everyone has one. The loudest person is insecure about their intelligence. The flashiest is insecure about their worth. Find the wound, and you find the lever. You don't exploit it cruelly—you speak to it strategically. Make them feel seen, and they'll follow you anywhere.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
    },
    {
        day: 17,
        chapter: 3,
        title: "Listen for What's Unsaid",
        text: "The most important information is buried in pauses, body language, and what people avoid talking about. Silence reveals more than speech. Learn to read the room, not just the words. The gap between what someone says and what they mean is where the truth hides.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
        day: 18,
        chapter: 3,
        title: "People Project Their Fears",
        text: "When someone accuses you of something unprompted, they're revealing their own strategy. The person obsessed with loyalty is disloyal. The person who constantly warns you about liars is lying. Listen to their projections—they'll tell you their playbook.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
    },
    {
        day: 19,
        chapter: 3,
        title: "Test Loyalty Early",
        text: "Loyalty isn't proven in success—it's proven in crisis. Give small tests early. See who stays when things get hard. See who gossips when you're not in the room. Weak loyalty is expensive. Test it when the stakes are low, so you know who stands when stakes are high.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    },
    {
        day: 20,
        chapter: 3,
        title: "Mirror Their Energy",
        text: "Matching someone's pace and tone builds subconscious rapport. Speak fast to the ambitious, slow to the cautious. Mirror their posture, their rhythm. This isn't manipulation—it's communication at the frequency they understand. People trust people who feel familiar.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
    },
    {
        day: 21,
        chapter: 3,
        title: "Know Their Motivation",
        text: "Everyone wants something. Money. Status. Security. Recognition. Revenge. Find what drives them and you control the relationship. You're not manipulating—you're aligning incentives. Give people what they want, and they'll give you what you need. It's not magic. It's strategy.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
    },

    // CHAPTER 4: Strategic Vision (Days 22-28)
    {
        day: 22,
        chapter: 4,
        title: "Think in Decades",
        text: "Short-term thinkers react. Long-term thinkers dominate. Every decision you make should serve your 10-year vision. Build infrastructure today that pays dividends tomorrow. Delayed gratification isn't sacrifice—it's strategic compounding. Play the long game while everyone else plays the quarter.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
        day: 23,
        chapter: 4,
        title: "Build Systems, Not Tasks",
        text: "Tasks are one-time. Systems are forever. Don't just close a deal—build a pipeline. Don't just solve a problem—build a process that prevents it. Successful people build systems that run without them. That's not laziness. That's leverage.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        day: 24,
        chapter: 4,
        title: "Scenario Planning Wins Wars",
        text: "Hope is not a strategy. Before you move, map three scenarios: best case, worst case, most likely case. Have a plan for all three. Winners aren't surprised—they're prepared. When chaos hits, you'll already have the playbook.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
    },
    {
        day: 25,
        chapter: 4,
        title: "Identify the Bottleneck",
        text: "Every system has one constraint that limits everything else. Find it. Fix it. Obsess over it. Most people spread effort across 10 things. Masters focus on the one thing holding back the other nine. Kill the bottleneck, and everything flows.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
        day: 26,
        chapter: 4,
        title: "Bet on Trends, Not Fads",
        text: "Fads fade. Trends transform industries. The question isn't 'Is this popular?' It's 'Will this matter in 5 years?' Mobile was a trend. Fidget spinners were a fad. Learn the difference, or you'll waste years chasing noise.",
        image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=800&q=80"
    },
    {
        day: 27,
        chapter: 4,
        title: "Control the Narrative",
        text: "Whoever tells the story controls the outcome. Don't let others define your mission, your failures, or your wins. Shape the narrative before someone else does. Reality is perception, and perception is shaped by the story people believe.",
        image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=800&q=80"
    },
    {
        day: 28,
        chapter: 4,
        title: "Reverse Engineer Success",
        text: "Study winners obsessively. Deconstruct their moves. What did they do at your stage? What did they avoid? Success leaves clues—most people are too arrogant to follow them. Steal the blueprint, then improve it. Innovation is often just intelligent theft.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },

    // CHAPTER 5: Information Control (Days 29-35)
    {
        day: 29,
        chapter: 5,
        title: "Silence Is Power",
        text: "The less you reveal, the more powerful you become. Amateurs overshare. Professionals listen, observe, and hold their cards close. When you speak, people lean in. When you talk constantly, they tune out. Scarcity applies to words, too.",
        image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80"
    },
    {
        day: 30,
        chapter: 5,
        title: "Know Before They Know",
        text: "Information asymmetry is the ultimate edge. Read industry reports. Talk to people on the ground. Follow the money. By the time something is public, the real players already positioned themselves. Stay ahead, or you'll always be reacting.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    },
    {
        day: 31,
        chapter: 5,
        title: "Create Back Channels",
        text: "Official channels are for show. Real decisions happen in side conversations, over drinks, in private calls. Build relationships that bypass bureaucracy. When you need to move fast, back channels save you weeks of red tape.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
    },
    {
        day: 32,
        chapter: 5,
        title: "Control the Leak",
        text: "Sometimes you need information to spread—but on your terms. Strategic leaks shape perception, test ideas, or force reactions. Never let information escape accidentally. If it gets out, it should serve you. Everything is a move.",
        image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80"
    },
    {
        day: 33,
        chapter: 5,
        title: "Verify Everything",
        text: "Trust, but verify. People lie. Data gets misinterpreted. Assumptions kill companies. Before you act on intel, confirm it through two independent sources. The cost of verification is small. The cost of bad information is catastrophic.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
        day: 34,
        chapter: 5,
        title: "Ask Questions, Don't Answer",
        text: "He who asks controls the conversation. Questions force others to reveal their position while you remain hidden. 'What do you think?' is more powerful than a speech. Let them talk. Let them fill the silence. Information flows to the listener, not the speaker.",
        image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80"
    },
    {
        day: 35,
        chapter: 5,
        title: "Document Everything",
        text: "Memory is unreliable. Documentation is evidence. Verbal agreements die with denial. Emails, notes, contracts—these protect you when loyalty fades. If it's not written, it didn't happen. Cover your assets. Always.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
    },

    // CHAPTER 6: Negotiation (Days 36-42)
    {
        day: 36,
        chapter: 6,
        title: "Walk Away Power",
        text: "The person who needs the deal less wins the deal. Desperation is blood in the water. Always have a backup option. Always be willing to walk. When they sense you don't need them, suddenly they need you.",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80"
    },
    {
        day: 37,
        chapter: 6,
        title: "Anchor High, Negotiate Down",
        text: "The first number sets the frame. Start higher than you expect. They'll negotiate you down, but you'll land closer to your goal. If you start fair, you end up losing. Anchoring isn't dishonest—it's strategic positioning.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
    },
    {
        day: 38,
        chapter: 6,
        title: "Make Them Sell You",
        text: "Reverse the dynamic. Instead of pitching, ask them why you should choose them. 'Convince me this is worth my time.' Now you're the prize, not the supplicant. Suddenly, they're closing you. Power shifts when you change the question.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
    },
    {
        day: 39,
        chapter: 6,
        title: "Silence After the Offer",
        text: "State your number. Then shut up. The first person to speak loses. Silence creates pressure. They'll either accept, counter, or reveal their hand. Amateurs fill silence with justification. Professionals let it work for them.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
    },
    {
        day: 40,
        chapter: 6,
        title: "Find the Hidden Need",
        text: "They say they want price. They actually want security, status, or speed. Surface negotiations are about terms. Real negotiations are about needs. Discover the hidden driver, and you unlock leverage. Ask 'Why?' until you hit the real motivation.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
    },
    {
        day: 41,
        chapter: 6,
        title: "Give to Get",
        text: "Concessions should never be free. If you lower price, extend the term. If you add a feature, increase scope. Every 'yes' should cost them something. Generosity without reciprocity trains people to take. Strategic trading builds deals.",
        image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&q=80"
    },
    {
        day: 42,
        chapter: 6,
        title: "Time Pressure Is a Weapon",
        text: "Deadlines force decisions. 'This offer expires Friday' creates urgency. People who stall are either not serious or waiting for you to fold. Don't let negotiations drag—controlled urgency separates buyers from browsers. Use time. Don't let it use you.",
        image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80"
    },

    // CHAPTER 7: Influence (Days 43-49)
    {
        day: 43,
        chapter: 7,
        title: "Social Proof Sells",
        text: "Humans follow the herd. 'Others are doing this' is more convincing than facts. Testimonials, case studies, name-dropping—these aren't vanity. They're psychological triggers. Show people they're joining winners, not risking as pioneers.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
    },
    {
        day: 44,
        chapter: 7,
        title: "Reciprocity Rules",
        text: "Do a favor, and biology wires them to return it. Give first, strategically. Small gestures—intro, advice, help—create subconscious debt. This isn't manipulation. It's how humans build trust. The best investments are the ones people feel obligated to repay.",
        image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80"
    },
    {
        day: 45,
        chapter: 7,
        title: "Frame the Choice",
        text: "Don't ask 'Will you?' Ask 'Which one?' 'Would you like to meet?' vs 'Tuesday or Thursday?' The second assumes yes and moves to logistics. Control the frame, and you control the outcome. Give options that all lead to your goal.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
    },
    {
        day: 46,
        chapter: 7,
        title: "Become the Authority",
        text: "People follow experts, not peers. Publish. Speak. Teach. Build visible credibility so that when you walk into a room, you've already won. Authority isn't given—it's demonstrated. Once you have it, people sell themselves on your ideas.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    },
    {
        day: 47,
        chapter: 7,
        title: "Use Their Words",
        text: "Listen for their language—phrases, values, priorities. Then use those exact words back. If they say 'innovative,' you pitch innovation. If they say 'security,' you emphasize safety. Speaking their dialect builds instant trust. Mirroring isn't mimicry. It's fluency.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
    },
    {
        day: 48,
        chapter: 7,
        title: "Create Scarcity",
        text: "Unlimited access kills value. Limited spots. Limited time. Exclusive access. Scarcity triggers fear of missing out, and FOMO drives action faster than logic. Make your offer finite, and suddenly it becomes urgent. Abundance is the enemy of desire.",
        image: "https://images.unsplash.com/photo-1607827448452-6fda561159d0?w=800&q=80"
    },
    {
        day: 49,
        chapter: 7,
        title: "Tell Stories, Not Facts",
        text: "Data informs. Stories persuade. A case study beats a statistic. A transformation beats a feature list. People don't remember your pitch—they remember how you made them feel. Wrap your message in narrative, and it sticks. Facts tell. Stories sell.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
    },

    // CHAPTER 8: Team Building (Days 50-56)
    {
        day: 50,
        chapter: 8,
        title: "Hire for Attitude",
        text: "Skills can be taught. Attitude can't. One toxic hire kills morale faster than ten great ones can build it. Look for hunger, humility, and adaptability. Brilliant jerks are expensive liabilities. Culture beats talent when talent doesn't fit.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
        day: 51,
        chapter: 8,
        title: "Pay for Loyalty",
        text: "Underpay, and they'll leave when courted. Overpay slightly, and you buy discretionary effort. Loyalty isn't about salary alone—it's about feeling valued. The best don't want to be the highest paid. They want to be fairly compensated and deeply respected.",
        image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&q=80"
    },
    {
        day: 52,
        chapter: 8,
        title: "Protect Your Core",
        text: "Your inner circle is your survival team. Guard access viciously. Weak links in your core destroy you from the inside. Loyalty, competence, and discretion are non-negotiable. Everyone else is replaceable. Your core is sacred.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    },
    {
        day: 53,
        chapter: 8,
        title: "Fire Fast",
        text: "You knew on day 30. You waited until month 6. That delay cost you money, morale, and momentum. When someone isn't working, cut them quickly and respectfully. Holding on to underperformers is cruelty disguised as kindness. Speed is mercy.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
    },
    {
        day: 54,
        chapter: 8,
        title: "Delegate Outcomes, Not Tasks",
        text: "'Get this done' is better than 'Do it this way.' Micromanagement kills initiative. Hire smart people, define the goal, then get out of the way. Judge results, not methods. Autonomy breeds ownership. Ownership breeds excellence.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
        day: 55,
        chapter: 8,
        title: "Praise in Public, Critique in Private",
        text: "Public recognition builds confidence and loyalty. Public criticism breeds resentment and fear. Handle mistakes privately, specifically, and constructively. Celebrate wins loudly. This isn't soft—it's strategic. People perform better when they're motivated, not humiliated.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
    },
    {
        day: 56,
        chapter: 8,
        title: "Build the Bench",
        text: "Always be recruiting. Always be developing. Your star performer will leave, get promoted, or burn out. If you don't have a backup, you're vulnerable. Build depth. Succession planning isn't pessimistic—it's insurance. Champions plan for continuity, not just crisis.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
    },

    // CHAPTER 9: Competitive Warfare (Days 57-63)
    {
        day: 57,
        chapter: 9,
        title: "Study Your Enemy",
        text: "Ignoring competitors is arrogance. Obsessing over them is weakness. Study them just enough to predict their moves, then focus on your game. Know their strengths, exploit their weaknesses, but never fight their fight. Compete on your terms, not theirs.",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80"
    },
    {
        day: 58,
        chapter: 9,
        title: "Speed Over Perfection",
        text: "Market leadership goes to the fast, not the flawless. Launch. Learn. Iterate. While competitors polish, you're already in customer hands gathering real data. Perfect is the enemy of done. First-mover advantage is real—use it.",
        image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80"
    },
    {
        day: 59,
        chapter: 9,
        title: "Steal Their Best People",
        text: "Talent wins wars. If they have someone brilliant, recruit them. It's not personal—it's strategic. You get stronger, they get weaker. Offer more money, better culture, or bigger vision. Top talent follows opportunity. Be the bigger opportunity.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
    },
    {
        day: 60,
        chapter: 9,
        title: "Attack the Flank",
        text: "Never attack strength. Find where they're weak—underserved markets, ignored customers, neglected features. Build there. Dominate there. By the time they notice, you own the position. Direct competition is expensive. Flanking is efficient.",
        image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80"
    },
    {
        day: 61,
        chapter: 9,
        title: "Make Them React to You",
        text: "When you set the pace, they're always behind. Launch. Announce. Innovate. Force them to respond to your moves. Reactive companies lose. Proactive companies dictate. Control the tempo of the game, and you control the outcome.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
    },
    {
        day: 62,
        chapter: 9,
        title: "Win the Mind, Not the Market",
        text: "Perception beats reality. If customers believe you're the best, you are—even if you're not objectively superior. Invest in brand, storytelling, and positioning. The company that owns the narrative owns the category. Marketing isn't fluff. It's psychological warfare.",
        image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=800&q=80"
    },
    {
        day: 63,
        chapter: 9,
        title: "Know When to Retreat",
        text: "Not every battle is worth fighting. Sometimes the smartest move is to pull back, regroup, and strike later. Pride kills companies. Ego loses wars. If you can't win, don't engage. Retreat isn't failure—it's tactical intelligence. Live to fight another day.",
        image: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&q=80"
    },

    // CHAPTER 10: Adaptation (Days 64-70)
    {
        day: 64,
        chapter: 10,
        title: "Change Before You Have To",
        text: "Disruption kills those who wait. Nokia, Blockbuster, Kodak—they saw the future and moved too slow. Adapt when you're winning, not when you're dying. Comfort is the signal to evolve. Reinvent yourself while you still have the resources to do it.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
        day: 65,
        chapter: 10,
        title: "Hire Younger Than You",
        text: "Youth sees what experience misses. They understand the new tools, new platforms, new mindsets. Hire them. Learn from them. Pair their hunger with your wisdom. The deadliest leaders bridge generations. Ego says 'I know best.' Intelligence says 'Teach me what's next.'",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
        day: 66,
        chapter: 10,
        title: "Kill Your Cash Cow",
        text: "Your biggest product today will be obsolete tomorrow. Cannibalize your own success before someone else does. Amazon killed retail stores. Apple killed the iPod with the iPhone. If you won't disrupt yourself, someone else will. Be your own executioner.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
    },
    {
        day: 67,
        chapter: 10,
        title: "Learn in Public",
        text: "You don't have to know everything. You have to learn everything. Admit when you don't know. Ask experts. Google publicly. Confidence isn't pretending—it's learning fast. The leader who says 'I don't know, let's find out' earns more respect than the one who bluffs.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    },
    {
        day: 68,
        chapter: 10,
        title: "Diversify or Die",
        text: "One revenue stream is a vulnerability. One client is a risk. One skill is a liability. Build multiple income sources, customer bases, and competencies. Redundancy isn't waste—it's resilience. When one leg breaks, you need others to stand on.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
        day: 69,
        chapter: 10,
        title: "Experiment Relentlessly",
        text: "Not every bet will pay. But one breakthrough covers ten failures. Allocate 10% of resources to experiments—new markets, new products, new tactics. Most will fail. One will transform your business. Innovation isn't magic. It's statistical: more at-bats, more home runs.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
        day: 70,
        chapter: 10,
        title: "Stay Paranoid",
        text: "Complacency kills faster than competition. Assume someone is trying to destroy you. Assume your advantage is temporary. Assume the market will shift. Paranoia isn't fear—it's vigilance. Andy Grove said it best: 'Only the paranoid survive.' Stay awake. Stay sharp.",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80"
    },

    // CHAPTER 11: Protection (Days 71-77)
    {
        day: 71,
        chapter: 11,
        title: "Guard Your Weak Points",
        text: "You know where you're vulnerable. So do your enemies. Legal exposure? Fix it. Key-person dependency? Diversify. Reputation risk? Build goodwill now. Don't wait for the attack. Fortify before the siege. Defense isn't paranoia—it's preparation.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
    },
    {
        day: 72,
        chapter: 11,
        title: "Never Overshare",
        text: "The more you reveal, the more they can use against you. Keep your strategy quiet. Keep your struggles private. Share wins selectively. Transparency is overrated. Mystique is power. Let them guess. Let them wonder. Mystery is armor.",
        image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80"
    },
    {
        day: 73,
        chapter: 11,
        title: "Build Legal Walls",
        text: "Contracts. NDAs. Trademarks. Incorporation. These aren't bureaucracy—they're shields. One lawsuit can destroy years of work. Protect your IP, your name, your deals. Spend on lawyers early, or spend on them later at 10x the cost. Legal protection is non-negotiable.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
    },
    {
        day: 74,
        chapter: 11,
        title: "Separate Personal and Business",
        text: "Never mix finances. Never sign personally for business debt. Keep assets protected in entities. If the business fails, you survive. This isn't pessimism—it's risk management. The difference between bankruptcy and rebuilding is often a legal firewall.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
        day: 75,
        chapter: 11,
        title: "Control the Narrative Early",
        text: "When crisis hits, the first story people hear becomes the truth. Respond fast. Apologize if warranted. State facts clearly. Silence lets others write your story. PR isn't spin—it's reality management. Own the message, or the message owns you.",
        image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=800&q=80"
    },
    {
        day: 76,
        chapter: 11,
        title: "Keep Cash Reserves",
        text: "Six months of operating expenses. Minimum. Cash is oxygen. Without it, you're at the mercy of banks, investors, or desperation. Reserve capital gives you options—to wait, to pivot, to survive. Companies with cash weather storms. Companies without it drown.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
    },
    {
        day: 77,
        chapter: 11,
        title: "Trust No One Completely",
        text: "Even your closest allies have their own interests. Verify, audit, and never give anyone total control. Loyalty is real—until incentives change. This isn't cynicism. It's prudence. Trust people with tasks, not empires. Love them, but watch them.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
    },

    // CHAPTER 12: Leverage (Days 78-84)
    {
        day: 78,
        chapter: 12,
        title: "Use Other People's Money",
        text: "Debt and investment aren't weakness—they're leverage. Why risk your own capital when others will bet on you? Use OPM to scale faster, take bigger swings, and keep your downside limited. The rich build empires with borrowed resources. Learn the game.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
    },
    {
        day: 79,
        chapter: 12,
        title: "Automate or Delegate",
        text: "Your time is the asset. Anything you do that someone else can do for less is a bad trade. Automate repetitive work. Delegate operational tasks. Your job is strategy and vision—not execution. Scale happens when you stop being the bottleneck.",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80"
    },
    {
        day: 80,
        chapter: 12,
        title: "Build Once, Sell Infinite",
        text: "Products that scale without labor are gold. Software, content, courses, systems—build it once, distribute forever. Your time doesn't multiply, but your product can. Stop trading hours for dollars. Build assets that work while you sleep.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        day: 81,
        chapter: 12,
        title: "Own the Platform",
        text: "Renters are vulnerable. Owners are powerful. Build your own email list, audience, distribution. Relying on someone else's platform is renting attention. Algorithms change. Platforms die. Ownership is the only sustainable leverage. Own the relationship.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
    },
    {
        day: 82,
        chapter: 12,
        title: "Network = Net Worth",
        text: "Opportunities flow through relationships. One intro can change your business. One partnership can 10x revenue. Invest in high-value connections. Stay visible. Provide value first. Your network is your most compounding asset. Nurture it religiously.",
        image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&q=80"
    },
    {
        day: 83,
        chapter: 12,
        title: "Compound Small Wins",
        text: "1% better every day = 37x better in a year. Small, consistent improvements compound exponentially. Don't chase giant leaps. Optimize margins, processes, retention—incrementally. Compounding is quiet at first, unstoppable later. Play the long math.",
        image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=800&q=80"
    },
    {
        day: 84,
        chapter: 12,
        title: "Make the System Work for You",
        text: "Rules, taxes, incentives—these are tools, not obstacles. The rich don't avoid the system—they master it. Hire experts. Optimize structures. Use every legal advantage. The game has rules. Winners play by them intelligently. Losers complain about unfairness.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
    },

    // CHAPTER 13: Legacy (Days 85-90)
    {
        day: 85,
        chapter: 13,
        title: "Build What Lasts",
        text: "Money fades. Fame fades. What you build—systems, culture, people—that's legacy. Create something that survives without you. Institutions outlive individuals. The greatest power is building something bigger than yourself that carries your name forward.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    },
    {
        day: 86,
        chapter: 13,
        title: "Teach the Next Generation",
        text: "Your knowledge dies with you unless you pass it on. Mentor. Write. Teach. The leaders you develop become your legacy. Selfishness ends with your death. Generosity multiplies through the people you elevate. What you share compounds forever.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    },
    {
        day: 87,
        chapter: 13,
        title: "Leave People Better",
        text: "Did they grow under you? Did they become stronger? Leaders are judged by the people they leave behind. Build teams that flourish after you. The greatest legacy isn't what you built—it's who you built. People remember how you made them better.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
    },
    {
        day: 88,
        chapter: 13,
        title: "Win With Integrity",
        text: "You can dominate and still keep your word. You can be ruthless and still be honorable. The ends don't always justify the means—some victories cost your soul. Play hard, but play fair. Legacy is meaningless if it's built on lies.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
    },
    {
        day: 89,
        chapter: 13,
        title: "Know When to Exit",
        text: "Every run ends. Sell high. Step back strong. Don't overstay. The leader who doesn't know when to leave becomes the obstacle. Plan your succession. Exit with grace. Leave them wanting more, not relieved you're gone. Timing your exit is the final power move.",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80"
    },
    {
        day: 90,
        chapter: 13,
        title: "The Game Never Ends",
        text: "You've finished 90 days. You haven't finished the journey. Mastery is a moving target. Markets shift. Competition evolves. You evolve or you die. This isn't the end—it's the foundation. Now go build your empire. The world doesn't wait. Neither should you.",
        image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80"
    }
];

// Utility function to get chapter info for a specific day
function getChapterInfo(day) {
    let cumulativeDays = 0;
    for (let chapter of CHAPTERS) {
        if (day <= cumulativeDays + chapter.days) {
            const dayInChapter = day - cumulativeDays;
            return {
                chapterId: chapter.id,
                chapterName: chapter.name,
                dayInChapter: dayInChapter,
                totalDaysInChapter: chapter.days
            };
        }
        cumulativeDays += chapter.days;
    }
    return null;
}

// Utility function to get lesson by day
function getLessonByDay(day) {
    return LESSONS.find(lesson => lesson.day === day) || LESSONS[0];
}