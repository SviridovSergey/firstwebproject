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

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const quantitySelect = document.getElementById('quantity');
  const plasticTypeSelect = document.getElementById('plastic-type');
  const holeSelect = document.getElementById('hole');
  const laminationSelect = document.getElementById('lamination');
  const frontNumberingSelect = document.getElementById('front-numbering');
  const contactlessChipSelect = document.getElementById('contactless-chip');
  const backBarcodeSelect = document.getElementById('back-barcode');
  const backMagneticStripSelect = document.getElementById('back-magnetic-strip');
  const backQrCodeSelect = document.getElementById('back-qr-code');
  const backMagnetSelect = document.getElementById('back-magnet');
  const pricePerUnitElement = document.getElementById('price-per-unit');
  const totalPriceElement = document.getElementById('total-price');

  function calculatePrice() {
    let basePrice = 24; // Base price per unit

    // Add logic to adjust price based on selections
    if (plasticTypeSelect.value === 'gold' || plasticTypeSelect.value === 'silver') {
      basePrice += 5;
    }

    if (holeSelect.value !== 'none') {
      basePrice += 2;
    }

    if (laminationSelect.value !== 'standard') {
      basePrice += 3;
    }

    if (frontNumberingSelect.value !== 'none') {
      basePrice += 4;
    }

    if (contactlessChipSelect.value === 'yes') {
      basePrice += 10;
    }

    if (backBarcodeSelect.value === 'yes') {
      basePrice += 2;
    }

    if (backMagneticStripSelect.value === 'yes') {
      basePrice += 3;
    }

    if (backQrCodeSelect.value === 'yes') {
      basePrice += 2;
    }

    if (backMagnetSelect.value === 'yes') {
      basePrice += 1;
    }

    const quantity = parseInt(quantitySelect.value);
    const total = basePrice * quantity;

    pricePerUnitElement.textContent = `${basePrice} ₽`;
    totalPriceElement.textContent = `${total} ₽`;
  }

  // Attach event listeners
  [quantitySelect, plasticTypeSelect, holeSelect, laminationSelect, frontNumberingSelect, contactlessChipSelect, backBarcodeSelect, backMagneticStripSelect, backQrCodeSelect, backMagnetSelect].forEach(select => {
    select.addEventListener('change', calculatePrice);
  });

  // Initial calculation
  calculatePrice();
});