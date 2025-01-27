let books =[];

function addBook(){
    const bookName = document.getElementById('bookName').value ;
    const authorName =document.getElementById('authourName').value;
    const bookDescription =document.getElementById('bookDescription').value ;
    const pagesNumber = document.getElementById('pagesNumber').value ;
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber))
    {
        const book ={
            name : bookName,
            authorName : authorName,
            bookDescription : bookDescription,
            pagesNumber : pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    }
    else{
        alert(`Please fill in all fields correctly.`)    
    }
}
function showbooks(){
    const booksDiv = books.map((book,index) => `<h1>book Number ${index+1} <p> <strong>Book Name : </strong> ${book.name}</p> <p><strong>Author Name:</strong> ${book.authorName}</p><p><strong>Book Description : </strong> ${book.bookDescription}</p><p><strong>No.of pages : </strong> ${book.pagesNumber} mins `);
    document.getElementById('books').innerHTML = booksDiv.join(' ');
}
function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authourName').value = '' ;
    document.getElementById('bookDescription').value ='';
    document.getElementById('pagesNumber').value ='';
}