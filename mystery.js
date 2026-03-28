const mysteryBooks = [
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        price: "₹399",
        image: "pic/m1.jpg"
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        price: "₹350",
        image: "pic/m2.jpg"
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: "₹420",
        image: "pic/m3.jpg"
    },
    {
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        price: "₹499",
        image: "pic/m4.jpg"
    },
    {
        title: "Big Little Lies",
        author: "Liane Moriarty",
        price: "₹370",
        image: "pic/m5.jpg"
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: "₹390",
        image: "pic/m6.jpg"
    },
    {
        title: "The Woman in White",
        author: "Wilkie Collins",
        price: "₹360",
        image: "pic/m7.jpg"
    },
    {
        title: "In the Woods",
        author: "Tana French",
        price: "₹410",
        image: "pic/m8.jpg"
    },
    {
        title: "The Reversal",
        author: "Michael Connelly",
        price: "₹380",
        image: "pic/m9.jpg"
    },
    {
        title: "The No. 1 Ladies' Detective Agency",
        author: "Alexander Smith",
        price: "₹340",
        image: "pic/m10.jpg"
    }
];

function renderMysteryBooks() {
    const bookList = document.querySelector('.book-list');
    if (!bookList) return;
    bookList.innerHTML = "";
    mysteryBooks.forEach(book => {
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

document.addEventListener('DOMContentLoaded', renderMysteryBooks);