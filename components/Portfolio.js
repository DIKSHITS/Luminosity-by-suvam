export function initPortfolio() {
  const portfolioData = [
    { src: '/assets/images/ritual_sindoor_1773571604021.png', cat: 'commercial' },
    { src: '/assets/images/ritual_saatpaak_1773571621464.png', cat: 'events' },
    { src: '/assets/images/about_image_bengali_1773571584146.png', cat: 'cinematic' },
    { src: '/assets/images/hero_image_bengali_1773571565971.png', cat: 'portraits' },
    { src: '/assets/images/portfolio_1_warm_1773571394072.png', cat: 'events' },
    { src: '/assets/images/about_image_warm_1773571378541.png', cat: 'portraits' }
    
  ];

  const gallery = document.getElementById('portfolio-gallery');
  const buttons = document.querySelectorAll('.portfolio-categories button');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');

  function renderGallery(filter = 'all') {
    gallery.innerHTML = '';
    const normalizedFilter = filter.toLowerCase();
    const filtered = normalizedFilter === 'all'
      ? portfolioData
      : portfolioData.filter(i => i.cat === normalizedFilter);
    
    filtered.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'portfolio-item';

      div.innerHTML = `
        <img src="${item.src}" alt="Portfolio Shot">
        <span class="portfolio-tag">${item.cat}</span>
        <div class="portfolio-overlay"></div>
      `;
      
      // Lightbox click
      div.addEventListener('click', () => {
        lightboxImg.src = item.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      gallery.appendChild(div);
      
      // Animate entry if gsap available
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(
          div,
          { opacity: 0, y: 26, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            delay: index * 0.08,
            ease: 'power3.out'
          }
        );
      }
    });
  }

  // Initial render
  renderGallery();

  // Filtering
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter || 'all');
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // restore scroll
  });
  
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}
