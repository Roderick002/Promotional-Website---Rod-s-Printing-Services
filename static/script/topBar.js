const nav = document.getElementById('topNav');
let lastScrollTop = 0;
let isNavVisible = true; // Track if the nav is currently visible

const home = document.getElementById('home');
const catalog = document.getElementById('catalog');
const news = document.getElementById('news');
const testimonials = document.getElementById('testimonials');
const contactUs = document.getElementById('contact-us');
const aboutUs = document.getElementById('about-us');


const highlight = window.location.href

if (highlight.includes('catalog')) {
    catalog.style.color = '#E6007E';
} else if (highlight.includes('news')) {
    news.style.color = '#E6007E';
} else if (highlight.includes('testimonials')) {
    testimonials.style.color = '#E6007E';
} else if (highlight.includes('contact_us')) {
    contactUs.style.color = '#E6007E';
} else if (highlight.includes('about_us')) {
    aboutUs.style.color = '#E6007E';
} else {
    home.style.color = '#E6007E';
}

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        if (isNavVisible) {
            // If the nav is visible, hide it smoothly
            isNavVisible = false;
            nav.style.top = `-${nav.offsetHeight}px`;
        }
    } else {
        // Scroll up
        if (!isNavVisible) {
            // If the nav is not visible, show it smoothly
            isNavVisible = true;
            nav.style.top = '0';
        }

        // Apply the fixed-nav class if needed
        if (currentScroll <= 0) {
            nav.classList.remove('fixed-nav');
            document.body.style.paddingTop = 0;
        } else if (!nav.classList.contains('fixed-nav')) {
            nav.classList.add('fixed-nav');
            document.body.style.paddingTop = nav.offsetHeight + 'px';
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);