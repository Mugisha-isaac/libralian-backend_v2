import express from 'express';
import borrowedBookController from '../controllers/borrowedBook.controller';

const BorrowedBooksRoutes = express.Router();

BorrowedBooksRoutes.route('/create').post(borrowedBookController.createBookController);
BorrowedBooksRoutes.route('/').get(borrowedBookController.getBooksController);
BorrowedBooksRoutes.route('/:id').delete(borrowedBookController.deleteBookController);

export default BorrowedBooksRoutes;


