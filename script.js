document.querySelector('.hamburger').addEventListener('click', () => {
    const headbar = document.querySelector('.headbar');
    const menubtn = document.querySelector('.menubtn');
    const hamburger = document.querySelector('.hamburger');

    headbar.classList.toggle('active');
    menubtn.classList.toggle('active');
    hamburger.classList.toggle('active');
});
