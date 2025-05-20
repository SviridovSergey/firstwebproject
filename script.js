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

// По умолчанию открываем первую вкладку
document.addEventListener("DOMContentLoaded", function () {
    showPortfolio('discount');
});