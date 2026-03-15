import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initNavbar } from './components/Navbar.js';
import { initHero } from './components/Hero.js';
import { initPortfolio } from './components/Portfolio.js';
import { initTestimonials } from './components/Testimonials.js';
import { initContact } from './components/Contact.js';

gsap.registerPlugin(ScrollTrigger);

// Make gsap available globally for components
window.gsap = gsap;

document.addEventListener('DOMContentLoaded', () => {
  // Init Components
  initNavbar();
  initHero();
  initPortfolio();
  initTestimonials();
  initContact();

  // Custom Cursor
  const cursor = document.querySelector('.cursor-glow');
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Cursor hover effects
  document.querySelectorAll('a, button, .portfolio-item, .film-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });

  // Scroll Animations setup
  
  // Parallax for About Image
  gsap.to('.parallax-wrap img', {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // Fade up sections
  const fadeElements = document.querySelectorAll('.fade-up');
  fadeElements.forEach(el => {
    gsap.fromTo(el, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );
  });
});
