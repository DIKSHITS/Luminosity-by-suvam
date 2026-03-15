export function initContact() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.querySelector('.btn-text');
  const spinner = document.querySelector('.spinner');
  const msgDiv = document.getElementById('form-msg');

  if (!form) return;

  // Initialize EmailJS with public key
  emailjs.init("UwLqfB3mDCUolZTHK");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // UI state loading
    btnText.style.display = 'none';
    spinner.style.display = 'block';
    msgDiv.textContent = '';
    
    // Send email using EmailJS
    emailjs.sendForm('service_d8dbgfa', 'template_ffbywbi', form)
      .then(() => {
          spinner.style.display = 'none';
          btnText.style.display = 'block';
          msgDiv.textContent = 'Thank you for reaching out to Lumnosity. We will contact you soon.';
          msgDiv.style.color = 'var(--accent-gold)';
          form.reset();
      }, (error) => {
          spinner.style.display = 'none';
          btnText.style.display = 'block';
          msgDiv.textContent = 'Something went wrong. Please try again.';
          msgDiv.style.color = 'red';
      });
  });
}
