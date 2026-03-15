export function initPortfolio() {
  const portfolioData = [
    { src: '/assets/images/ritual_sindoor_1773571604021.png', cat: 'Bengali Weddings', tall: true },
    { src: '/assets/images/ritual_saatpaak_1773571621464.png', cat: 'engagement', tall: false },
    { src: '/assets/images/about_image_bengali_1773571584146.png', cat: 'cinematic moments', tall: true },
    { src: '/assets/images/hero_image_bengali_1773571565971.png', cat: 'pre wedding', tall: false },
    { src: '/assets/images/portfolio_1_warm_1773571394072.png', cat: 'Bengali Weddings', tall: false },
    { src: '/assets/images/about_image_warm_1773571378541.png', cat: 'engagement', tall: true }
  ];

  const gallery = document.getElementById('portfolio-gallery');
  const buttons = document.querySelectorAll('.portfolio-categories button');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');

  function renderGallery(filter = 'All') {
    gallery.innerHTML = '';
    const filtered = filter === 'All' ? portfolioData : portfolioData.filter(i => i.cat.toLowerCase() === filter.toLowerCase());
    
    filtered.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'portfolio-item';
      if(item.tall) {
        div.style.gridRowEnd = 'span 45'; // Taller item for masonry imitation
      } else {
        div.style.gridRowEnd = 'span 30'; 
      }

      div.innerHTML = `
        <img src="${item.src}" alt="Portfolio Shot">
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
      if(typeof gsap !== 'undefined') {
        gsap.fromTo(div, {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.6, delay: index * 0.1, ease: "power2.out"});
      }
    });
  }

  // Initial render
  renderGallery();

  // Filtering
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderGallery(e.target.innerText);
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
