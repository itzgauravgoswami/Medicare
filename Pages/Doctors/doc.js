// Select the necessary elements
const hamburger = document.querySelector('.hamburger');
const headbar = document.querySelector('.headbar');

// Function to toggle the menu
function toggleMenu() {
    headbar.classList.toggle('show');
    hamburger.classList.toggle('active');
}

// Add event listener to the hamburger icon
hamburger.addEventListener('click', toggleMenu);

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !headbar.contains(event.target)) {
        headbar.classList.remove('show');
        hamburger.classList.remove('active');
    }
});
