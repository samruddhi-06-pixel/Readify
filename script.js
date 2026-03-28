// Array of 10 books with details (description property can remain, but will not be shown)
const books = [
    {
        title: "Mrutunjay",
        author: "Shivaji Sawant",
        price: "₹320",
        image: "pic/h1.jpg",
        description: "An epic retelling of Karna's life from the Mahabharata."
    },
    {
        title: "The 48 laws of POWER",
        author: "Robert Greene",
        price: "₹399",
        image: "pic/h2.jpg",
        description: "A guide to power dynamics and strategies for success."
    },
    {
        title: "The immortals of MELUHA",
        author: "Amish",
        price: "₹269",
        image: "pic/h3.jpg",
        description: "A mythological adventure set in ancient India."
    },
    {
        title: "Chavva",
        author: "Shivaji Sawant",
        price: "₹450",
        image: "pic/h4.jpg",
        description: "A historical novel about the life of Chhatrapati Sambhaji Maharaj."
    },
    {
        title: "Ratan Tata",
        author: "Thomas Mathew",
        price: "₹520",
        image: "pic/h5.jpg",
        description: "The inspiring biography of India's legendary industrialist."
    },
    {
        title: "Harry Potter & half-blood price",
        author: "J.K. Rowling",
        price: "₹630",
        image: "pic/h6.jpg",
        description: "The sixth magical adventure in the Harry Potter series."
    },
    {
        title: "Sita",
        author: "Amish",
        price: "₹430",
        image: "pic/h7.jpg",
        description: "A reimagining of Sita's journey from the Ramayana."
    },
    {
        title: "The Secret",
        author: "Rhonda Byrne",
        price: "₹457",
        image: "pic/h8.jpg",
        description: "A self-help book about the law of attraction and positive thinking."
    },
    {
        title: "You Can",
        author: "Matthew Adams",
        price: "₹210",
        image: "pic/h9.jpg",
        description: "Motivational insights to help you achieve your goals."
    },
    {
        title: "Yayathi",
        author: "V.S. Khandekar",
        price: "₹470",
        image: "pic/h10.jpg",
        description: "A classic Marathi novel based on the story of King Yayati."
    }
];


function renderBooks() {
    const bookList = document.querySelector('.book-list');
    bookList.innerHTML = ""; // Clear previous content if any
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <button class="buy-now">Buy Now</button>
        `;
        bookList.appendChild(bookItem);
    });

    // Buy Now button logic (show modal)
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            document.getElementById('auth-modal').style.display = 'block';
            document.getElementById('signin-form').style.display = 'block';
            document.getElementById('to-signup').style.display = 'block';
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('back-to-signin').style.display = 'none';
            document.getElementById('auth-title').textContent = 'Sign In';
        };
    });
}

// Function to hide the loading screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) loadingScreen.style.display = 'none';
}

// Call the renderBooks function and hide the loading screen on page load
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    hideLoadingScreen();

    // --- Sign In / Sign Up Modal Logic ---
    const closeBtn = document.getElementById('close-auth');
    if (closeBtn) {
        closeBtn.onclick = function() {
            document.getElementById('auth-modal').style.display = 'none';
        };
    }

    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.onsubmit = function(e) {
            e.preventDefault();
            document.getElementById('auth-modal').style.display = 'none';
            window.location.href = 'buy.html'; // Redirect after login
        };
    }

    // DO NOT prevent default for signup-form, let it submit to save.php

    const showSignup = document.getElementById('show-signup');
    const signupForm = document.getElementById('signup-form');
    if (showSignup && signinForm && signupForm) {
        showSignup.onclick = function(e) {
            e.preventDefault();
            signinForm.style.display = 'none';
            document.getElementById('to-signup').style.display = 'none';
            signupForm.style.display = 'block';
            document.getElementById('back-to-signin').style.display = 'block';
            document.getElementById('auth-title').textContent = 'Sign Up';
        };
    }

    const backToSignin = document.getElementById('back-to-signin');
    if (backToSignin && signinForm && signupForm) {
        backToSignin.onclick = function(e) {
            e.preventDefault();
            signinForm.style.display = 'block';
            document.getElementById('to-signup').style.display = 'block';
            signupForm.style.display = 'none';
            backToSignin.style.display = 'none';
            document.getElementById('auth-title').textContent = 'Sign In';
        };
    }
});