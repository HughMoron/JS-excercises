//BOOK CONSTRUCTOR

function Book (title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.bookDetails = function(){return `The Details are: ${this.title} from ${this.author} with the ISBN# ${this.isbn}`}
}

//UI Constructor
function UI(){}

//Add book to list
UI.prototype.addBookToList =(book)=>{
    let list = document.getElementById("book-list");
    let tr = document.createElement("tr");   
    tr.innerHTML = 
    `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>`
    // for(i=1;i<4;i++){
    // let td = document.createElement("td")
    // tr.appendChild(td)
    // }
    list.appendChild(tr);
}

//Clear Fields
UI.prototype.clearFields = ()=>{
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
    
}

//Delete Book
document.getElementById("book-list").addEventListener("click", (e)=>{
    const ui = new UI();
    ui.deleteBook(e.target);
    e.preventDefault();
});

UI.prototype.deleteBook = (target)=>{
    if(target.className === "delete"){
        target.parentElement.parentElement.remove()
    }
}

//Event Listener
document.querySelector("form").addEventListener("submit",(e)=>{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;
    //Intantiate Book
    const book = new Book(title,author,isbn)
    //Intantiate UI
    const ui = new UI();
    //Add book to List
    ui.addBookToList(book)
    //Clear Fields
    ui.clearFields();

    e.preventDefault();
})

console.log(UI)