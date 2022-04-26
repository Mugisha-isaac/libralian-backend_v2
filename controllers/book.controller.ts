import express from 'express';
import BookServices from '../services/book.services';


class BookContoller{
    async createBookController(req:express.Request, res: express.Response){
        const book = await BookServices.createBook(req.body.isbn,req.body.name,req.body.category,req.body.publisher,req.body.author,req.body.publicationDate,req.body.status);
        if(book) return res.status(201).send({success:true,message:'Book saved successfully',data:book});
        return res.status(400).send({success:false,message:'Failed to save new book'});
    }

    async getBooksController(req:express.Request, res:express.Response){
        const books = await BookServices.getAllBooks();
        if(books) return res.status(200).send({success:true, message:'Books', data: books});
        return res.status(404).send({success:false,message:'Not Found', data:books});
    }

    async deleteBookController(req:express.Request, res:express.Response){
        const book = await BookServices.deleteBook(req.params.id);
        if(book) return res.status(200).send({success:true,message:'Book deleted successfully',data:book});
        return res.status(400).send({success:false,message:'Failed to delete book', data:book});
    }
}


export default new BookContoller;