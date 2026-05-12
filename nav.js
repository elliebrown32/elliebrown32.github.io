const toggle = document.getElementById('mobile-menu');
const menu = document.querySelector('.navbar__menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
