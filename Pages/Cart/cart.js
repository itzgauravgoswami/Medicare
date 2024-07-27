
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.headbar');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render cart items
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="details">
                    <h2>${item.name}</h2>
                    <div class="quantity">
                        <button class="quantity-btn decrease" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-index="${index}">+</button>
                    </div>
                    <p class="price">₹${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div class="remove-btn" data-index="${index}">
                    <i class="fas fa-trash-alt"></i>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }

    // Function to remove an item from the cart
    function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    }

    // Function to update item quantity
    function updateQuantity(index, delta) {
        if (cart[index].quantity + delta > 0) {
            cart[index].quantity += delta;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartItems();
        }
    }

    // Event listener for cart item buttons
    cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.remove-btn')) {
            const index = target.closest('.remove-btn').getAttribute('data-index');
            removeItem(index);
        } else if (target.closest('.quantity-btn')) {
            const index = target.closest('.quantity-btn').getAttribute('data-index');
            if (target.classList.contains('increase')) {
                updateQuantity(index, 1);
            } else if (target.classList.contains('decrease')) {
                updateQuantity(index, -1);
            }
        }
    });

    renderCartItems();
});
