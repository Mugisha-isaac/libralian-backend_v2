import express from 'express';
import orderController from '../controllers/order.controller';

const OrderRoutes = express.Router();

OrderRoutes.route('/create').post(orderController.createOrderController);
OrderRoutes.route('/').get(orderController.getAllOrdersController);

export default OrderRoutes;