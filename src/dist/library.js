"use strict";
class Library {
    constructor() {
        this.books = [];
        this.authors = [];
        this.members = [];
        this.borrowedBooks = [];
    }
    addBook(title, authorId) {
        this.books.push({ title, authorId, isCheckedOut: false });
    }
    addAuthor(name) {
        const author = { id: this.authors.length + 1, name };
        this.authors.push(author);
        return author;
    }
    addMember(name) {
        const member = { id: this.members.length + 1, name };
        this.members.push(member);
        return member;
    }
    checkoutBook(bookId, memberId) {
        const book = this.books[bookId];
        if (!book) {
            return "Book not found.";
        }
        if (book.isCheckedOut) {
            return "Book is already checked out.";
        }
        book.isCheckedOut = true;
        this.borrowedBooks.push({ bookId, memberId });
        return "Book checked out successfully.";
    }
    returnBook(bookId, memberId) {
        const borrowedIndex = this.borrowedBooks.findIndex((borrowed) => borrowed.bookId === bookId && borrowed.memberId === memberId);
        if (borrowedIndex === -1) {
            return "This book was not borrowed by this member.";
        }
        const book = this.books[bookId];
        book.isCheckedOut = false;
        this.borrowedBooks.splice(borrowedIndex, 1);
        return "Book returned successfully.";
    }
    viewAllBook() {
        return this.books.map(book => {
            const author = this.authors.find(author => author.id === book.authorId);
            return {
                title: book.title,
                authorName: author ? author.name : "Unknown Author",
                isCheckedOut: book.isCheckedOut
            };
        });
    }
}
const library = new Library();
const author = library.addAuthor("Basith");
const author2 = library.addAuthor("Razeen");
library.addBook("Ran", author.id);
library.addBook("He", author2.id);
const member = library.addMember("Karthik");
console.log(library.checkoutBook(100, member.id));
console.log(library.checkoutBook(0, member.id));
console.log(library.returnBook(0, member.id));
console.log(library.returnBook(0, member.id));
console.log(library.viewAllBook());
