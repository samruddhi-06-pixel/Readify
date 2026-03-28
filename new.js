const newBooks = [
    { title: "Atomic Habits", author: "James Clear", price: "₹350", image: "pic/ah.jpg" },
    { title: "Ikigai", author: "Héctor García", price: "₹299", image: "pic/ikigai.jpg" },
    { title: "The Alchemist", author: "Paulo Coelho", price: "₹399", image: "pic/alchem.jpg" },
    { title: "Think Like a Monk", author: "Jay Shetty", price: "₹420", image: "pic/tlm.jpg" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "₹310", image: "pic/rd.jpg" },
    { title: "Do Epic Shit", author: "Ankur Warikoo", price: "₹280", image: "pic/dps.png" },
    { title: "The Psychology of Money", author: "Morgan Housel", price: "₹370", image: "pic/pom.jpg" },
    { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: "₹330", image: "pic/apj auto.jpg" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: "₹450", image: "pic/sap.png" },
    { title: "The Power of Now", author: "Eckhart Tolle", price: "₹390", image: "pic/now.jpg" }
];

function renderNewBooks() {
    const bookList = document.querySelector('.book-list');
    newBooks.forEach(book => {
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
}

document.addEventListener('DOMContentLoaded', renderNewBooks);