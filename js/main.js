const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stage-hub__title').forEach((link) => {
        let id = link.getAttribute('href').replace('#', '');
        if (id === entry.target.id) {
          link.classList.add('stage-hub__title--active');
        } else {
          link.classList.remove('stage-hub__title--active');
        }
      });
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.stage-item').forEach(section => { observer.observe(section) });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});