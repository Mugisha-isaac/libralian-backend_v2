import express from 'express';
import UserController from '../controllers/user.controller';
const router = express.Router();
router.route('/signup').post(UserController.createUserController);
router.route('/:id').delete(UserController.deleteUserController);
router.route('/').get(UserController.getUsersController);

export default router;