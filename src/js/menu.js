const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('.menu__link');
const humburger = document.querySelector('.humburger');
const body = document.querySelector('body');

humburger.addEventListener('click', () => {
    if (humburger.classList.contains('humburger--active')) {
        menu.classList.remove('menu--active');
        humburger.classList.remove('humburger--active');
        body.style.overflow = 'scroll';
    } else {
        menu.classList.add('menu--active');
        humburger.classList.add('humburger--active');
        body.style.overflow = 'hidden';
    }
})


for (let link of menuLinks) {
    link.addEventListener('click', () => {
        humburger.classList.remove('humburger--active');
        menu.classList.remove('menu--active');
        body.style.overflow = 'scroll';
    })
}
