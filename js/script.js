// Swiper slider
const heroSlider = new Swiper('.hero-slider', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  autoplay: { delay: 5000 }
});

const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  }
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    btn.classList.add('active');
    document.querySelector(`.tab-${tabId}`).classList.add('active');
  });
});

function showPortfolio(category) {
  // Получаем все элементы портфолио
  const portfolioItems = document.querySelectorAll('.card');

  // Сбрасываем активный класс у всех элементов
  portfolioItems.forEach(item => {
    item.classList.remove('active');
  });

  // Показываем элементы, соответствующие выбранной категории
  portfolioItems.forEach(item => {
    if (item.dataset.category === category) {
      item.classList.add('active');
    }  
  });
}

// Обработчик кликов на кнопки табов
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.tab;
    showPortfolio(category);
  });
});