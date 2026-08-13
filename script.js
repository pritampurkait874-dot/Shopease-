let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").textContent = cart.length;

    alert(name + " added to cart!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "🛒 Your Cart:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        total += item.price;
    });

    message += `\nTotal: ₹${total}`;

    alert(message);
}

function searchProducts() {
    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product
            .getAttribute("data-name")
            .toLowerCase();

        product.style.display =
            name.includes(search) ? "block" : "none";
    });
}

function filterCategory(category) {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productCategory =
            product.getAttribute("data-category");

        if (category === "all" ||
            productCategory === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}