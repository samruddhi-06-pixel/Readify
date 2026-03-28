<?php
session_start();
if (!isset($_SESSION['logged_in'])) {
    header("Location: index.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buy Now - Readify</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="navbar-brand">
                <img src="pic/book.png" alt="Bookstore Logo" class="navbar-logo">
                <span class="navbar-name">Readify</span>
            </div>
            <div class="navbar-box">
                <ul class="navbar-links">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#category" class="dropdown-toggle">Category</a>
                        <ul class="dropdown-menu">
                            <li><a href="sci-fi.html">Sci-Fi</a></li>
                            <li><a href="mystery.html">Mystery</a></li>
                            <li><a href="self-help.html">SelfHelp</a></li>
                            <li><a href="fantasy.html">Fantasy</a></li>
                        </ul>
                    </li>
                    <li><a href="new.html">New Arrivals</a></li>
                    <li><a href="review.html">Reviews</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>

<div class="checkout-container">
        <h2>Checkout</h2>
        <!-- Book selection -->
       <form class="checkout-form" id="checkout-form">
            <h3>Select Book</h3>
            <select id="book-select" required>
                <option value="">Select Book</option>
                <option value="Mrutunjay" data-price="320">Mrutunjay</option>
                <option value="The 48 laws of power" data-price="399">The 48 laws of power</option>
                <option value="The immortals of meluha" data-price="269">The immortals of meluha</option>
                <option value="chavva" data-price="450">chavva</option>
                <option value="Ratan tata" data-price="520">Ratan tata</option>
                <option value="Harry Potter" data-price="630">Harry Potter</option>
                <option value="sita" data-price="430">sita</option>
                <option value="The secret" data-price="457">The secret</option>
                <option value=" You can" data-price="210">You can</option>
                <option value="Yayathi" data-price="470">Yayathi</option>
            </select>
            <div id="book-price-display" style="margin:10px 0; display:none;">
                <strong>Price:</strong> ₹<span id="book-price"></span>
            </div>
            <h3>Shipping Details</h3>
            <input type="text" id="fullname" placeholder="Full Name" required>
            <input type="text" id="address" placeholder="Address" required>
            <input type="text" id="city" placeholder="City" required>
            <input type="text" id="pincode" placeholder="Pin Code" required>
            <input type="email" id="email" placeholder="Email" required>
            <h3>Payment Mode</h3>
            <select id="payment-mode" required>
                <option value="">Select Payment Mode</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
            <button type="submit">Place Order</button>
        </form>
        <div id="order-success" style="display:none; margin-top:20px;">
            <h3>Order Placed Successfully!</h3>
            <button id="download-receipt">Download Receipt (PDF)</button>
        </div>
    </main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script>
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const bookSelect = document.getElementById('book-select');
const bookPriceDisplay = document.getElementById('book-price-display');
const bookPriceSpan = document.getElementById('book-price');
const form = document.getElementById('checkout-form');
const orderSuccess = document.getElementById('order-success');
let orderDetails = {};

const urlBook = getQueryParam('book');
const urlPrice = getQueryParam('price');

if (urlBook) {
    for (let i = 0; i < bookSelect.options.length; i++) {
        if (bookSelect.options[i].value.trim() === urlBook.trim()) {
            bookSelect.selectedIndex = i;
            bookPriceSpan.textContent = urlPrice || bookSelect.options[i].getAttribute('data-price');
            bookPriceDisplay.style.display = 'block';
            break;
        }
    }
}

bookSelect.addEventListener('change', function() {
    const selected = bookSelect.options[bookSelect.selectedIndex];
    const price = selected.getAttribute('data-price');
    if (price) {
        bookPriceSpan.textContent = price;
        bookPriceDisplay.style.display = 'block';
    } else {
        bookPriceDisplay.style.display = 'none';
    }
});

form.onsubmit = function(e) {
    e.preventDefault();
    const selected = bookSelect.options[bookSelect.selectedIndex];
    orderDetails = {
        book: selected.value,
        price: selected.getAttribute('data-price'),
        name: document.getElementById('fullname').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value,
        email: document.getElementById('email').value,
        payment: document.getElementById('payment-mode').value
    };
    orderSuccess.style.display = 'block';
    form.style.display = 'none';
};

document.getElementById('download-receipt').onclick = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Readify - Order Receipt", 10, 10);
    doc.text("Book: " + orderDetails.book, 10, 20);
    doc.text("Price: ₹" + orderDetails.price, 10, 30);
    doc.text("Name: " + orderDetails.name, 10, 40);
    doc.text("Address: " + orderDetails.address + ", " + orderDetails.city + ", " + orderDetails.pincode, 10, 50);
    doc.text("Email: " + orderDetails.email, 10, 60);
    doc.text("Payment Mode: " + orderDetails.payment, 10, 70);
    doc.save("receipt.pdf");
};
</script>
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Welcome to the Online Bookstore! We offer a wide range of books across various genres. Explore our collection and find your next favorite read.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#category">Category</a></li>
                    <li><a href="new.html">New Arrivals</a></li>
                    <li><a href="review.html">Reviews</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: support@readify.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Bookstore Lane, satara, India</p>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-links">
                    <a href="#"><img src="pic/fbk.png" alt="Facebook"></a>
                    <a href="#"><img src="pic/tw.png" alt="Twitter"></a>
                    <a href="#"><img src="pic/lg.png" alt="Instagram"></a>
                </div>
            </div>
        </div>
        <p class="footer-bottom">&copy; 2025 Readify. All rights reserved.</p>
    </footer>

    
</body>
</html>