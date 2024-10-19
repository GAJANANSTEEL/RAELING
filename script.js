// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Slider Functionality
let currentIndex = 0;
const products = document.querySelectorAll('.product');
const totalProducts = products.length;

function showNextProduct() {
    products[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalProducts;
    products[currentIndex].classList.add('active');
}

function showPrevProduct() {
    products[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    products[currentIndex].classList.add('active');
}

document.querySelector('.next').addEventListener('click', showNextProduct);
document.querySelector('.prev').addEventListener('click', showPrevProduct);
