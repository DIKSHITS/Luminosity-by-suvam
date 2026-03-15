export function initHero() {
  const container = document.querySelector('.hero-bg-container');
  // I will use the generated images
  const images = [
    '/assets/images/hero_image_bengali_1773571565971.png',
    '/assets/images/ritual_saatpaak_1773571621464.png',
    '/assets/images/about_image_bengali_1773571584146.png',
  ];

  // Inject images
  images.forEach((src, idx) => {
    const slide = document.createElement('div');
    slide.classList.add('hero-bg-slide');
    if(idx === 0) slide.classList.add('active');
    slide.style.backgroundImage = `url(${src})`;
    container.appendChild(slide);
  });

  const slides = document.querySelectorAll('.hero-bg-slide');
  let currentSlide = 0;

  // 4 second intervals to allow 2s transition plus 2s viewing time
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000); 

  // Initial text animations using GSAP
  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 });
    gsap.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 });
    gsap.fromTo('.hero-btn', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 });
  }
}
