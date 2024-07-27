// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.headbar');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const box = button.closest('.box');
            const id = box.getAttribute('data-id');
            const name = box.getAttribute('data-name');
            const price = parseFloat(box.getAttribute('data-price'));
            const image = box.getAttribute('data-image');

            // Create a cart item object
            const cartItem = {
                id: id,
                name: name,
                price: price,
                image: image,
                quantity: 1
            };

            // Get the existing cart from localStorage or initialize as an empty array
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the item already exists in the cart
            const existingItemIndex = cart.findIndex(item => item.id === id);
            if (existingItemIndex > -1) {
                // If item exists, update quantity
                cart[existingItemIndex].quantity += 1;
            } else {
                // If item does not exist, add it to the cart
                cart.push(cartItem);
            }

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Optionally, you can redirect to the cart page or show a confirmation message
            alert('Item added to cart!');
        });
    });
});
