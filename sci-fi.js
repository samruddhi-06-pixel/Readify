// Array of Sci-Fi books
const sciFiBooks = [
    {
        title: "Dune",
        author: "Frank Herbert",
        price: "₹499",
        image: "pic/si1.jpg"
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        price: "₹399",
        image: "pic/si2.jpg"
    },
    {
        title: "Neuromancer",
        author: "William Gibson",
        price: "₹350",
        image: "pic/si3.jpg"
    },
    {
        title: "Snow Crash",
        author: "Neal Stephenson",
        price: "₹420",
        image: "pic/si4.jpg"
    },
    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        price: "₹380",
        image: "pic/si5.jpg"
    },
    {
        title: "Hyperion",
        author: "Dan Simmons",
        price: "₹410",
        image: "pic/si6.jpg"
    },
    {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        price: "₹390",
        image: "pic/si7.jpg"
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        price: "₹360",
        image: "pic/si8.jpg"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        price: "₹370",
        image: "pic/si9.jpg"
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        price: "₹340",
        image: "pic/si10.jpg"
    }
];

// Render Sci-Fi books
function renderSciFiBooks() {
    const bookList = document.querySelector('.book-list');
    if (!bookList) return;
    bookList.innerHTML = "";
    sciFiBooks.forEach(book => {
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

    // Buy Now button logic (show modal if present)
    document.querySelectorAll('.buy-now').forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            const modal = document.getElementById('auth-modal');
            if (modal) {
                modal.style.display = 'block';
                document.getElementById('signin-form').style.display = 'block';
                document.getElementById('to-signup').style.display = 'block';
                document.getElementById('signup-form').style.display = 'none';
                document.getElementById('back-to-signin').style.display = 'none';
                document.getElementById('auth-title').textContent = 'Sign In';
            }
        };
    });
}

document.addEventListener('DOMContentLoaded', renderSciFiBooks);