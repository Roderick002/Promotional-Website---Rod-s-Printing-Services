document.addEventListener('DOMContentLoaded', () => {
  const productRedirects = {
    'printers': 'catalog#redirect-products',
    'document-print': 'catalog#redirect-products',
    'photo-prints': 'catalog#redirect-products',
    'invitations': 'catalog#redirect-products'
  };

  const serviceRedirects = {
    'printer-repair': 'catalog#redirect-services',
    'ciss-installation': 'catalog#redirect-services',
    'resume-maker': 'catalog#redirect-services',
    'buying-defectives': 'catalog#redirect-services'
  };

  Object.keys(productRedirects).forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
      window.location.href = productRedirects[id];
    });
  });

  Object.keys(serviceRedirects).forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
      window.location.href = serviceRedirects[id];
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate-left, .animate-right, .mission-logo-side.animate-right, .catalog-section.products.animate-right, .catalog-section.services.animate-left');

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      console.log(entry.target);  // Log the observed element
      console.log(entry.intersectionRatio);  // Log intersection ratio for debugging
      if (entry.isIntersecting) {
        entry.target.classList.add('start-animation');
        observer.unobserve(entry.target);  // Stop observing once the animation has been applied
        console.log('Animation triggered for:', entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback);

  // Observe all animate elements
  animateElements.forEach(element => observer.observe(element));
});
