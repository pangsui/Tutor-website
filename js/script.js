// toggling nav bar on mobile devices
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
    
    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    })
})

// changing navbar upon scrolling
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');  
    } else {
        navbar.classList.remove('navbar-scroll');
    }
})
