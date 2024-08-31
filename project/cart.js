// Function to load cart items from local storage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart(cart);
}

// Function to display cart items
function displayCart(cart) {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let totalPrice = 0;

    // Display each cart item
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price;
    });

    // Update total price
    document.getElementById('total-price').innerText = `Total: ${totalPrice}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCart(cart); // Update display
}

// Function to handle checkout
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Checkout is not implemented yet!');
});

// Load the cart on page load
loadCart();