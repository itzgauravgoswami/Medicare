const hamburger = document.querySelector('.hamburger');
const headbar = document.querySelector('.headbar');

function toggleMenu() {
    headbar.classList.toggle('show');
    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !headbar.contains(event.target)) {
        headbar.classList.remove('show');
        hamburger.classList.remove('active');
    }
});
