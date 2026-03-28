
const selfHelpBooks = [
    {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        price: "₹350",
        image: "pic/sh1.jpg"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: "₹420",
        image: "pic/ah.jpg"
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        price: "₹380",
        image: "pic/sh3.jpg"
    },
    {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        price: "₹450",
        image: "pic/sh4.jpg"
    },
    {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        price: "₹390",
        image: "pic/sh5.jpg"
    },
    {
        title: "The Power",
        author: "rhonda Byren",
        price: "₹370",
        image: "pic/sh6.jpeg"
    },
    {
        title: "The Let Them Theory",
        author: "Mel Robbins",
        price: "₹410",
        image: "pic/sh7.jpg"
    },
    {
        title: "Get Smart!",
        author: "Brian traey",
        price: "₹430",
        image: "pic/sh8.jpg"
    },
    {
        title: "The Idiot Brain",
        author: "Dean Burnett",
        price: "₹400",
        image: "pic/sh9.jpg"
    },
    {
        title: "Memory Manipulation",
        author: "T. Whitmore",
        price: "₹360",
        image: "pic/sh10.jpg"
    }
];

function renderSelfHelpBooks() {
    const bookList = document.querySelector('.book-list');
    if (!bookList) return;
    bookList.innerHTML = "";
    selfHelpBooks.forEach(book => {
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

document.addEventListener('DOMContentLoaded', renderSelfHelpBooks);