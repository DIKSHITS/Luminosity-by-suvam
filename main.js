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

  // Photography stories card reveal
  const storyCards = document.querySelectorAll('.ritual-card');
  if (storyCards.length) {
    gsap.fromTo(
      storyCards,
      { y: 40, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.85,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#rituals',
          start: 'top 78%'
        }
      }
    );
  }

  // Featured films reveal
  const filmCards = document.querySelectorAll('.film-card');
  if (filmCards.length) {
    gsap.fromTo(
      filmCards,
      { y: 42, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.16,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#films',
          start: 'top 78%'
        }
      }
    );

    gsap.fromTo(
      '.play-btn-overlay',
      { scale: 0.88, opacity: 0 },
      {
        scale: 1,
        opacity: 0.92,
        duration: 0.55,
        stagger: 0.14,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '#films',
          start: 'top 76%'
        }
      }
    );
  }

  // FAQ accordion interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (!otherButton || !otherAnswer) return;

        otherItem.classList.remove('active');
        otherButton.setAttribute('aria-expanded', 'false');
        otherAnswer.setAttribute('aria-hidden', 'true');
        otherAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        answer.setAttribute('aria-hidden', 'false');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });

  // FAQ cards reveal animation
  if (faqItems.length) {
    gsap.fromTo(
      faqItems,
      { y: 28, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.72,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#faq',
          start: 'top 82%'
        }
      }
    );
  }

  // Inquire section premium reveal
  const contactPoints = document.querySelectorAll('.contact-points li');
  if (contactPoints.length) {
    gsap.fromTo(
      contactPoints,
      { x: -18, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%'
        }
      }
    );
  }

  const contactFields = document.querySelectorAll('#contact .form-group, #contact .submit-btn');
  if (contactFields.length) {
    gsap.fromTo(
      contactFields,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.62,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 78%'
        }
      }
    );
  }

  const footerRevealItems = document.querySelectorAll('.footer-brand, .footer-nav, .footer-social, .footer-bottom');
  if (footerRevealItems.length) {
    gsap.fromTo(
      footerRevealItems,
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 90%'
        }
      }
    );
  }

});
