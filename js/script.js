'use strict';
// toggling nav bar on mobile devices
const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

toggleButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

// changing navbar upon scrolling
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

// animation by revealing sections
const allsections = document.querySelectorAll('.sec');

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // observer.unobserve(entry.target);
};
const observer = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0.15, //section reveal when it is 15% visible
});
allsections.forEach(function (sect) {
  observer.observe(sect);
  sect.classList.add('section--hidden');
});
