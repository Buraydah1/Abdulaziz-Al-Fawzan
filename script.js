
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});
