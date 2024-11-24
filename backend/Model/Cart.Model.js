import mongoose from "mongoose";


const CartItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    imageSrc:{
        type: String,
        required: true
    }
})


const CartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: [
        CartItemSchema
    ]
})

const Cart = mongoose.model('Cart', CartSchema)

export default Cart;