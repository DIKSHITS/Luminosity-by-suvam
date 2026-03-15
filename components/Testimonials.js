export function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial');
  if (!slides.length) return;
  
  let currentSlide = 0;
  
  // Custom transition every 4 seconds
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
}
