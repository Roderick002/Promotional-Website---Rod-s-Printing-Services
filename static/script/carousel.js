let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const dots = document.querySelectorAll('.dot');

let autoSwitchInterval;


function showImage(index) {
    images[currentIndex].classList.remove('active');
    thumbnails[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    resetInterval();
}

function nextImage() {
    let nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}

function startAutoSwitch() {
    autoSwitchInterval = setInterval(nextImage, 3000);
}

function resetInterval() {
    clearInterval(autoSwitchInterval);
    startAutoSwitch();
}

// Initialize the first image, thumbnail, and dot as active, and start auto-switching
document.addEventListener('DOMContentLoaded', () => {
    images[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    startAutoSwitch();
});