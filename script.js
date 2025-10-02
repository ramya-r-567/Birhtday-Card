const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
let timeoutId;

envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0;
});

envelope.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
    }, 1500);
});

heartSeal.style.transition = 'opacity 0.3s ease';

// ❤️ Floating hearts generator
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's'; // 3-6s
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heartsContainer.appendChild(heart);

    // Remove after animation ends
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400); // new heart every 0.4s
