// Asset fallback system
function loadImageWithFallback(imgElement) {
    imgElement.onerror = function () {
        // ./assets/가 실패하면 ../assets/로 시도
        this.src = this.src.replace('./assets/', '../assets/');
    };
}

function loadVideoWithFallback(videoElement) {
    videoElement.onerror = function () {
        // ./assets/가 실패하면 ../assets/로 시도
        this.src = this.src.replace('./assets/', '../assets/');
    };
}

// Apply fallback to all images and videos
document.addEventListener('DOMContentLoaded', function () {
    // Video fallback
    const video = document.querySelector('.game-video');
    if (video) {
        loadVideoWithFallback(video);
    }

    // Image fallbacks
    const images = document.querySelectorAll('img[src*="./assets/"]');
    images.forEach(img => {
        loadImageWithFallback(img);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.background = 'rgba(255, 255, 255, 0.15)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add confetti effect on button click
document.querySelectorAll('.cta-button, .download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    });
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)];
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    confetti.style.animation = 'confettiFall 3s linear forwards';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== kids_index.html의 모든 JavaScript 추가 =====

// kids_index.html의 Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// kids_index.html의 Add animation on scroll
const kidsObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const kidsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, kidsObserverOptions);

// kids_index.html의 Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    kidsObserver.observe(card);
});

// kids_index.html의 Fun interactive elements
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05) rotate(2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
});

// kids_index.html의 Add confetti effect on button click
document.querySelectorAll('.cta-button, .download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    });
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)];
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    confetti.style.animation = 'confettiFall 3s linear forwards';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// kids_index.html의 Add confetti animation
const kidsStyle = document.createElement('style');
kidsStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(kidsStyle);
