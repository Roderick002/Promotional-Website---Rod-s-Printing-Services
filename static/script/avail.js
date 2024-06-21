const availForm = document.getElementById('avail-visibility');
const header = document.getElementById('avail-item');
const product = document.getElementById('product-name');
const services = document.getElementById('services-name');
const body = document.body;

const form = document.getElementById('availform');

const loc = window.location.href;

if (loc.includes('product')) {
  header.textContent = product.textContent + " - Avail";
} else if (loc.includes('installation')) {
  header.textContent = "CISS Installation - Avail";
} else {
  header.textContent = services.textContent + " - Avail";
}

document.getElementById('close').addEventListener('click', function() {
  availForm.style.visibility = 'hidden';
  body.style.overflowY = 'scroll';
  body.style.paddingRight = '0';
});

let scrollPosition = 0;

function showAvailForm() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  availForm.style.visibility = 'visible';
  scrollPosition = window.scrollY; // Save current scroll position
  body.classList.add('no-scroll'); // Add no-scroll class to body
  body.style.top = `-${scrollPosition}px`; // Maintain scroll position visually
  body.style.overflowY = 'hidden'; // Hide vertical scrollbar'
  body.style.paddingRight = '1.2vw';

  //gets the saved link
  form.setAttribute('action', localStorage.getItem('link'))
}


