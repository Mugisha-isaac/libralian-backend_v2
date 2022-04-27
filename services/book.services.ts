

import { EbookStatus } from '../enums/Ebook';
import Book from '../model/book.model';

class BookServices{
    async createBook(isbn:string, name:string, borrower: string,borrowedDate:Date, status:string){
        const book = new Book();
        book.isbn = isbn,
        book.name = name,
        book.borrower = borrower,
        book.borrowedDate = borrowedDate,
        book.status = status
        book.save()
        return book;
    }

    async getAllBooks(){
        const books = await Book.find();
        if(books) return books;
        return false;
    }

    async deleteBook(id:string){
        const book = await Book.deleteOne({_id:id});
        if(!book) return false;
        return book;
    }
}

export default new BookServices;