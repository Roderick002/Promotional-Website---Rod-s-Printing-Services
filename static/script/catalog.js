document.getElementById('document-print').addEventListener('click', function() {
  nextPage('product_document_print')
});
document.getElementById('photo-print').addEventListener('click', function() {
  nextPage('product_photo_print')
});
document.getElementById('photocopy').addEventListener('click', function() {
  nextPage('product_photocopy')
});
document.getElementById('invitation').addEventListener('click', function() {
  nextPage('product_invitation')
});
document.getElementById('id-picture').addEventListener('click', function() {
  nextPage('product_id_picture')
});
document.getElementById('lamination').addEventListener('click', function() {
  nextPage('product_lamination')
});
document.getElementById('framed-picture').addEventListener('click', function() {
  nextPage('product_framed_picture')
});
document.getElementById('printer').addEventListener('click', function() {
  nextPage('product_printer')
});
document.getElementById('printer-repair').addEventListener('click', function() {
  nextPage('services_printer_repair')
});
document.getElementById('ciss-installation').addEventListener('click', function() {
  nextPage('services_ciss_installation')
});
document.getElementById('defective-printer').addEventListener('click', function() {
  nextPage('services_defective_printer')
});
document.getElementById('online-appointment').addEventListener('click', function() {
  nextPage('services_online_appointment')
});
document.getElementById('resume-maker').addEventListener('click', function() {
  nextPage('services_resume_maker')
});
document.getElementById('photo-editing').addEventListener('click', function() {
  nextPage('services_photo_editing')
});

function nextPage(page) {
  localStorage.setItem('link', 'catalog_' + page)
  window.location.href = '/catalog_' + page;
}

// Store the scroll position in session storage when navigating away from the page
window.addEventListener('beforeunload', function() {
  sessionStorage.setItem('scrollPosition', window.scrollY);
});

// Restore the scroll position when navigating back to the page
window.addEventListener('DOMContentLoaded', function() {
  var scrollPosition = sessionStorage.getItem('scrollPosition');
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition));
    sessionStorage.removeItem('scrollPosition');
  }
});