

import { EbookStatus } from '../enums/Ebook';
import Book from '../model/book.model';

class BookServices{
    async createBook(isbn:string, name:string, category: string, publisher: string, author: string, publicationDate:Date, status:EbookStatus){
        const book = new Book();
        book.isbn = isbn,
        book.name = name,
        book.category = category,
        book.publisher = publisher,
        book.author = author,
        book.publicationDate = publicationDate,
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