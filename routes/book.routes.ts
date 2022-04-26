import express from 'express';
import BookContoller from '../controllers/book.controller';

const BooksRoutes = express.Router();

BooksRoutes.route('/create').post(BookContoller.createBookController);
BooksRoutes.route('/').get(BookContoller.getBooksController);
BooksRoutes.route('/:id').delete(BookContoller.deleteBookController);

export default BooksRoutes;


