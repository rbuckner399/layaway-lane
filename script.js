function sayHi() {
  alert("BOOM! Welcome to Layaway Lane, where your wallet and your dreams can finally be friends! 🎉 We're like couples therapy but for you and your money!");
}

// Add to Layaway functionality
document.addEventListener('DOMContentLoaded', function() {
  const layawayButtons = document.querySelectorAll('.add-to-layaway');
  
  layawayButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('.price').textContent;
      
      alert(`🛒 OH YES! ${productName} (${productPrice}) is now reserved for you! Your future self is gonna be SO grateful! Time to start that payment plan and make your dreams come true, one payment at a time! 🎉💸`);
    });
  });
  
  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thanks for reaching out! We got your message and we\'ll hit you back soon! In the meantime, go browse some more stuff you can\'t afford yet! 😂📧');
    });
  }
  
  // Vendor form submission
  const vendorForm = document.querySelector('.vendor-form');
  if (vendorForm) {
    vendorForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const businessName = this.querySelector('input[placeholder="Business Name *"]').value;
      alert(`🎉 Awesome! Thank you ${businessName}! Your vendor application is in the system! We'll check it out and get back to you in 24-48 hours. Welcome to the Layaway Lane family where everyone gets paid and everyone gets their stuff! 🤝💰`);
    });
  }
});
