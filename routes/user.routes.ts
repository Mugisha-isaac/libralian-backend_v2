import express from 'express';
import UserController from '../controllers/user.controller';
const router = express.Router();
router.route('/signup').post(UserController.createUserController);

export default router;