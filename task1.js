function BookInfo(book) {
    return `The book "${book.title}" by ${book.author} was published in ${book.year}. It falls under ${book.genre}.`;
}



let book1={
    title:"ab",
    author:"cd",
    year:1415,
    genre:"ef",
}
let book2={
    title:"abd",
    author:"cde",
    year:1415,
    genre:"efg",
}

let book3={
    title:"asssb",
    author:"cdsff",
    year:1415,
    genre:"efdfhg",
}
book=[book1,book2,book3];
// printing using for each
book.forEach(book => {
    console.log(BookInfo(book));
});

//printing using map
book.map(book => {
    console.log(BookInfo(book));
});