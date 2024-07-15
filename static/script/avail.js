const availForm = document.getElementById('avail-visibility');
const oc = document.getElementById('oc-visibility');
const header = document.getElementById('avail-item');
const product = document.getElementById('product-name');
const services = document.getElementById('services-name');
var item = document.getElementById('item-name');
const body = document.body;

const form = document.getElementById('availform');
const loc = window.location.href;

if (localStorage.getItem('Order') == 'Successful') {
  localStorage.removeItem('Order');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  oc.style.visibility = 'visible';
  scrollPosition = window.scrollY; // Save current scroll position
  body.classList.add('no-scroll'); // Add no-scroll class to body
  body.style.top = `-${scrollPosition}px`; // Maintain scroll position visually
  body.style.overflowY = 'hidden'; // Hide vertical scrollbar'
  body.style.paddingRight = '1.2vw';

}

if (loc.includes('product')) {
  header.textContent = product.textContent + " - Avail";
  item.value = product.textContent;
} else if (loc.includes('installation')) {
  header.textContent = "CISS Installation - Avail";
  item.value = "CISS Installation";
} else {
  header.textContent = services.textContent + " - Avail";
  item.value = services.textContent;
}

document.getElementById('close').addEventListener('click', function() {
  availForm.style.visibility = 'hidden';
  oc.style.visibility = 'hidden';
  body.style.overflowY = 'scroll';
  body.style.paddingRight = '0';
  localStorage.setItem('Order', '');
});

document.getElementById('submit').addEventListener('click', function() {
  localStorage.setItem('Order', 'Successful');
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

function closeOC() {
  history.back();
}
