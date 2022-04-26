import express from 'express';
import UserController from '../controllers/user.controller';
const UsersRoutes = express.Router();
UsersRoutes.route('/signup').post(UserController.createUserController);
UsersRoutes.route('/:id').delete(UserController.deleteUserController);
UsersRoutes.route('/').get(UserController.getUsersController);

export default UsersRoutes;