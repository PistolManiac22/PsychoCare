// toggle class active
const navbarMenu = document.querySelector('.menu');
// ketika hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarMenu.classList.toggle('active');
};

//klik diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
});
