document.getElementById('document-print').addEventListener('click', function() {
  window.location.href = '/catalog_product_document_print';
});
document.getElementById('photo-print').addEventListener('click', function() {
  window.location.href = '/catalog_product_photo_print';
});
document.getElementById('photocopy').addEventListener('click', function() {
  window.location.href = '/catalog_product_photocopy';
});
document.getElementById('invitation').addEventListener('click', function() {
  window.location.href = '/catalog_product_invitation';
});
document.getElementById('id-picture').addEventListener('click', function() {
  window.location.href = '/catalog_product_id_picture';
});
document.getElementById('lamination').addEventListener('click', function() {
  window.location.href = '/catalog_product_lamination';
});
document.getElementById('framed-picture').addEventListener('click', function() {
  window.location.href = '/catalog_product_framed_picture';
});
document.getElementById('printer').addEventListener('click', function() {
  window.location.href = '/catalog_product_printer';
});
document.getElementById('printer-repair').addEventListener('click', function() {
  window.location.href = '/catalog_services_printer_repair';
});
document.getElementById('ciss-installation').addEventListener('click', function() {
  window.location.href = '/catalog_services_ciss_installation';
});
document.getElementById('defective-printer').addEventListener('click', function() {
  window.location.href = '/catalog_services_defective_printer';
});
document.getElementById('online-appointment').addEventListener('click', function() {
  window.location.href = '/catalog_services_online_appointment';
});
document.getElementById('resume-maker').addEventListener('click', function() {
  window.location.href = '/catalog_services_resume_maker';
});
document.getElementById('photo-editing').addEventListener('click', function() {
  window.location.href = '/catalog_services_photo_editing';
});

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