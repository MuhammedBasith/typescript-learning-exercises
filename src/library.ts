interface Book {
    title: string;
    authorId: number;
    isCheckedOut?: boolean;
}

interface Author {
    id: number;
    name: string;
}

interface Member {
    id: number;
    name: string;
}

interface BorrowedBook {
    bookId: number;
    memberId: number;
}

class Library {
    private books: Book[] = [];
    private authors: Author[] = [];
    private members: Member[] = [];
    private borrowedBooks: BorrowedBook[] = [];

    addBook(title: string, authorId: number): void {
        this.books.push({ title, authorId, isCheckedOut: false });
    }

    addAuthor(name: string): Author {
        const author: Author = { id: this.authors.length + 1, name };
        this.authors.push(author);
        return author;
    }

    addMember(name: string): Member {
        const member: Member = { id: this.members.length + 1, name };
        this.members.push(member);
        return member;
    }

    checkoutBook(bookId: number, memberId: number): string {
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

    returnBook(bookId: number, memberId: number): string {
        const borrowedIndex = this.borrowedBooks.findIndex(
            (borrowed) => borrowed.bookId === bookId && borrowed.memberId === memberId
        );
        if (borrowedIndex === -1) {
            return "This book was not borrowed by this member.";
        }
        const book = this.books[bookId];
        book.isCheckedOut = false;
        this.borrowedBooks.splice(borrowedIndex, 1);
        return "Book returned successfully.";
    }

    viewAllBook(): { title: string; authorName: string; isCheckedOut?: boolean }[] {
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
const author2 = library.addAuthor("Razeen")
library.addBook("Ran", author.id);
library.addBook("He", author2.id);

const member = library.addMember("Karthik");

console.log(library.checkoutBook(100, member.id));
console.log(library.checkoutBook(0, member.id));
console.log(library.returnBook(0, member.id));
console.log(library.returnBook(0, member.id));

console.log(library.viewAllBook())