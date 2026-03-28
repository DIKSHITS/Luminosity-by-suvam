export function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial');
  if (!slides.length) return;

  const currentEl = document.querySelector('.testimonial-current');
  const totalEl = document.querySelector('.testimonial-total');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  
  let currentSlide = 0;

  const showSlide = (index) => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');

    if (currentEl) {
      currentEl.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    if (totalEl) {
      totalEl.textContent = `/${String(slides.length).padStart(2, '0')}`;
    }
  };

  showSlide(0);

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }

  // Auto transition every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);
}
