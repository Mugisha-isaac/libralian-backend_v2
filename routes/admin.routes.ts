import express from 'express';
import adminController from '../controllers/admin.controller';

const AdminRoutes = express.Router();

AdminRoutes.route('/create').post(adminController.createNewAdminController);
AdminRoutes.route('/login').post(adminController.adminLoginController)

export default AdminRoutes;