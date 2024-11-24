import express from 'express';
import { AddtoCart, ClearCart, DecreaseQuantity, GetCart, RemoveCartItems } from '../Controller/Cart.Controller.js';
import { Authorization } from '../Middlewares/IsAuthentication.js';
const router = express.Router()

router.post('/add',Authorization, AddtoCart)
router.get('/all',Authorization, GetCart)
router.delete('/remove/:productId',Authorization, RemoveCartItems)
router.delete('/clear',Authorization, ClearCart)
router.post('/--quantity',Authorization, DecreaseQuantity)


export default router