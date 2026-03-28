export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!navbar || !hamburger || !navLinks) return;
  
  // Scrolled glass effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass');
    } else {
      navbar.classList.remove('glass');
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open', navLinks.classList.contains('active'));
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Ensure menu state resets when switching back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}
