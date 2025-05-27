// Скрипт для управления анимациями
document.addEventListener("DOMContentLoaded", function () {
  // Скрыть начальную анимацию после клика на кнопку
  const enterUniverseBtn = document.getElementById("enter-universe");
  const universeAnimation = document.getElementById("universe-animation");

  enterUniverseBtn.addEventListener("click", function () {
    universeAnimation.classList.add("hidden");
  });

  // Анимация для перехода между секциями
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const description = this.parentElement.nextElementSibling;
      if (description.classList.contains("hidden")) {
        description.classList.remove("hidden");
        this.textContent = "-";
      } else {
        description.classList.add("hidden");
        this.textContent = "+";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const priceSlider = document.querySelector(".price-slider");
  const priceMin = document.querySelector(".price-min");
  const priceMax = document.querySelector(".price-max");

  priceSlider.addEventListener("input", function () {
    priceMin.textContent = `${this.value} ₽`;
    priceMax.textContent = `${parseInt(this.value) + 20000} ₽`;
  });

  // Пагинация
  const pageButtons = document.querySelectorAll(".page-btn");
  pageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        pageButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const priceSlider = document.querySelector(".price-slider");
  const priceMin = document.querySelector(".price-min");
  const priceMax = document.querySelector(".price-max");

  // Обновляем значения при изменении ползунка
  priceSlider.addEventListener("input", function () {
    priceMin.textContent = `${this.value} ₽`;
    priceMax.textContent = `${parseInt(this.value) + 20000} ₽`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactLinks = document.querySelectorAll(".contact-link");

  contactLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = this.getAttribute("href");
      window.open(url, "_blank");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contact-modal");
  const consultationBtn = document.querySelector(".consultation-btn"); // <-- изменено: убран неправильный селектор
  const closeModalBtn = document.querySelector(".close-modal");

  // Открыть окно при клике на кнопку "Бесплатная консультация"
  if (consultationBtn) {
    consultationBtn.addEventListener("click", function () {
      modal.classList.remove("hidden");
      modal.classList.add("show");
    });
  }

  // Закрыть окно по клику вне области
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("show");
    }
  });

  // Закрыть по крестику
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      modal.classList.add("hidden");
      modal.classList.remove("show");
    });
  }

  // Закрыть по ESC
  document.addEventListener("keydown", function (event) {
    if (!modal.classList.contains("hidden") && event.key === "Escape") {
      modal.classList.add("hidden");
      modal.classList.remove("show");
    }
  });
});