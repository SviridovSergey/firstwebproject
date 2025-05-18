function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.parentElement.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    event.currentTarget.parentElement.classList.add('active');
}

function showPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.display = item.dataset.category === category ? 'block' : 'none';
    });

    const tabs = document.querySelectorAll('.portfolio-tabs button');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelector(`.portfolio-tabs button[onclick="showPortfolio('${category}')"]`).classList.add('active');
}

// Калькулятор
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('calcForm');
    const resultBox = document.getElementById('resultBox');
    const totalPrice = document.getElementById('totalPrice');

    // Цены
    const basePrices = {
        transparent: 30,
        opaque: 25
    };

    const printCosts = {
        one_side: 0,
        double_side: 10
    };

    const deliveryCosts = {
        pickup: 0,
        courier: 300
    };

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const quantity = parseInt(document.getElementById('quantity').value);
        const plasticType = document.getElementById('plasticType').value;
        const printType = document.getElementById('printType').value;
        const delivery = document.getElementById('delivery').value;

        if (!quantity || quantity < 100) {
            alert("Минимальное количество — 100 карт.");
            return;
        }

        const basePrice = basePrices[plasticType];
        const printPrice = printCosts[printType];
        const deliveryPrice = deliveryCosts[delivery];

        const total = quantity * (basePrice + printPrice) + deliveryPrice;

        totalPrice.textContent = total.toLocaleString();
        resultBox.style.display = 'flex';
    });

    showTab('home');
});

// По умолчанию открываем первую вкладку
document.addEventListener("DOMContentLoaded", function () {
    showTab('home');
    showPortfolio('discount');
});