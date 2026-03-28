const fantasyBooks = [
    {
        title: "I Was Born For This",
        author: "Alice Oseman",
        price: "₹399",
        image: "pic/f11.jpg"
    },
    {
        title: "The Sage With Two Horns",
        author: "Sudha Murty",
        price: "₹450",
        image: "pic/f2.jpg"
    },
    {
        title: " Falling into place",
        author: "Amy Zhang",
        price: "₹499",
        image: "pic/f12.jpg"
    },
    
    {
        title: "Where I Live",
        author: "Brenda Rufener",
        price: "₹500",
        image: "pic/f10.jpg"
    },
    {
        title: "Scion Of Ikshvanku",
        author: "Amish",
        price: "₹550",
        image: "pic/f5.jpg"
    },

    {
        title: "The Immortals of Mehuha",
        author: "Amish",
        price: "₹500",
        image: "pic/f6.jpg"
    },

    {
        title: "The Land Of Clouds",
        author: "Chloe Ells",
        price: "₹650",
        image: "pic/f8.jpg"
    },

    {
        title: "we'll Never Tell",
        author: "Wenday Heard",
        price: "₹400",
        image: "pic/f9.jpg"
    },

     {
        title: "Yaar Papa ",
        author: "Divy Dubey",
        price: "₹420",
        image: "pic/f13.jpg"
    },

    {
        title: "The Hidden Hindu",
        author: "Akshat Gupta",
        price: "₹430",
        image: "pic/f7.jpg"
    }
];

function renderFantasyBooks() {
    const bookList = document.querySelector('.book-list');
    if (!bookList) return;
    bookList.innerHTML = "";
    fantasyBooks.forEach(book => {
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

    // Modal logic for Buy Now
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

document.addEventListener('DOMContentLoaded', renderFantasyBooks);