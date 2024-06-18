const availForm = document.getElementById('avail-visibility');
const header = document.getElementById('avail-item');
const product = document.getElementById('product-name');
const services = document.getElementById('services-name');
const body = document.body;

const loc = window.location.href;

if (loc.includes('product')) {
  header.textContent = "Avail " + product.textContent;
} else if (loc.includes('installation')) {
  header.textContent = "Avail CISS Installation";
} else {
  header.textContent = "Avail " + services.textContent;
}



let scrollPosition = 0;

function showAvailForm() {
  availForm.style.visibility = 'visible';
  scrollPosition = window.scrollY; // Save current scroll position
  body.classList.add('no-scroll'); // Add no-scroll class to body
  body.style.top = `-${scrollPosition}px`; // Maintain scroll position visually
}

function cancelAvail() {
  availForm.style.visibility = 'hidden';
  body.classList.remove('no-scroll'); // Remove no-scroll class
  body.style.top = ''; // Reset top style
  window.scrollTo(0, scrollPosition); // Restore scroll position
}

