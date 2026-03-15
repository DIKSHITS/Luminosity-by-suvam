export function initHero() {

  // Select hero background container
  const container = document.querySelector('.hero-bg-container');

  if (!container) {
    console.warn("Hero container not found");
    return;
  }

  // Hero background images
  const images = [
    '/assets/images/d7.jpeg'
  ];

  // Inject images dynamically
  images.forEach((src, idx) => {
    const slide = document.createElement('div');
    slide.classList.add('hero-bg-slide');

    if (idx === 0) {
      slide.classList.add('active');
    }

    slide.style.backgroundImage = `url(${src})`;
    container.appendChild(slide);
  });

  const slides = document.querySelectorAll('.hero-bg-slide');
  let currentSlide = 0;

  // Background slider
  if (slides.length > 1) {
    setInterval(() => {

      slides[currentSlide].classList.remove('active');

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.add('active');

    }, 4000);
  }

  // GSAP Animations (if GSAP loaded)
  if (typeof gsap !== 'undefined') {

    gsap.fromTo(
      '.hero-title',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
    );

    gsap.fromTo(
      '.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );

    gsap.fromTo(
      '.hero-btn',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
    );

  }
}