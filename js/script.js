// Скрипт для слайдера
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-image');
  const dots = document.querySelectorAll('.gallery-dots .dot');

  let currentIndex = 0;

  function showSlide(index) {
    galleryImages.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });

    galleryImages[index].classList.add('active');
    dots[index].classList.add('active');
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showSlide(currentIndex);
  }, 3000); // Автоматическая смена слайдов каждые 3 секунды
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