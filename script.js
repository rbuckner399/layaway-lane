function sayHi() {
  alert("Boom! Welcome to Layaway Lane, baby! 🎉");
}

// Add to Layaway functionality
document.addEventListener('DOMContentLoaded', function() {
  const layawayButtons = document.querySelectorAll('.add-to-layaway');
  
  layawayButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('.price').textContent;
      
      alert(`🛒 Great choice! ${productName} (${productPrice}) has been added to your layaway plan. You're one step closer to getting what you want! 🎉`);
    });
  });
  
  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thanks for reaching out! We\'ll get back to you soon. 📧');
    });
  }
  
  // Vendor form submission
  const vendorForm = document.querySelector('.vendor-form');
  if (vendorForm) {
    vendorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const businessName = this.querySelector('input[placeholder="Business Name *"]').value;
      alert(`🎉 Thank you ${businessName}! Your vendor application has been submitted. We'll review your application and get back to you within 24-48 hours. Welcome to the Layaway Lane family! 🤝`);
    });
  }
});