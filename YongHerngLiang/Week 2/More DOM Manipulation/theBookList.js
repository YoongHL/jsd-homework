const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false,
      img: "https://m.media-amazon.com/images/I/41WVtoodZFL._AC_SY780_.jpg"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true,
      img: "https://kbimages1-a.akamaihd.net/21a94eb9-86fe-460c-88d4-55a13872e5e0/353/569/90/False/sapiens-3.jpg"
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true,
      img: "https://kbimages1-a.akamaihd.net/92328064-20cc-40f7-a6a2-1cb1f0859cba/353/569/90/False/a-short-history-of-nearly-everything-2.jpg"
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true,
      img: "https://m.media-amazon.com/images/I/41ft8ICa81L._SX323_BO1,204,203,200_.jpg"
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false,
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Cosmos_spacetime_odyssey_titlecard.jpg/375px-Cosmos_spacetime_odyssey_titlecard.jpg"
    }
  ];

let bookTitle = [];
let bookAuthor = [];
let bookImg = [];

for (let i = 0; i <= books.length - 1; i++) {
    bookTitle[i] = document.createElement("li");    
    bookTitle[i].innerHTML = "Title: " + books[i].title;
    document.body.appendChild(bookTitle[i]);
    bookAuthor[i] = document.createElement("li");    
    bookAuthor[i].innerHTML = "Author: " + books[i].author;
    document.body.appendChild(bookAuthor[i]);    
    bookImg[i] = document.createElement("img");
    bookImg[i].src = books[i].img;
    bookImg[i].style.border = "1px solid black";
    document.body.appendChild(bookImg[i]);    
  
    if (books[i].alreadyRead === true) {
        bookTitle[i].style.color = "green";
        bookAuthor[i].style.color = "green";
    } else if (books[i].alreadyRead === false) {
        bookTitle[i].style.color = "red";
        bookAuthor[i].style.color = "red";        
    }    
}