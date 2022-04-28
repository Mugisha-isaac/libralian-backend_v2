import express from 'express';
import BookController from '../controllers/book.controller';

const BooksRoutes = express.Router();

BooksRoutes.route('/create').post(BookController.createNewBookController);
BooksRoutes.route('/').get(BookController.getAllBooks);

export default BooksRoutes;