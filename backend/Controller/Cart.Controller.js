import Cart from '../Model/Cart.Model.js'

export const AddtoCart = async (req, res) =>{
    const {productId, title, quantity, price, imageSrc} = req.body;
    try {
        const userId = req.user;
        let cart =  await Cart.findOne({userId})
        if(!cart) {
            cart = await Cart.create({userId, items:[] });
        }
       
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if(itemIndex > -1){
            cart.items[itemIndex].quantity += quantity;
            cart.items[itemIndex].price += price * quantity;
        }else{
            cart.items.push({
                productId, title, quantity, price, imageSrc
            });
        }
        await cart.save();
        res.status(201).json({
            message: "Product added to cart",
            cart
        });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const GetCart = async (req, res) => {
    try {
        const userId = req.user;
        const cart = await Cart.findOne({userId});
        if(!cart) {
            return res.json({message: "Cart not found"});
        }
        res.status(200).json({
            message:"User Cart",
            cart
        });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const RemoveCartItems = async(req, res) =>{
    try {
    const productId = req.params.productId
    const userId = req.user;
    let cart = await Cart.findOne({userId})
    if(!cart) return res.status(404).json({message: "Cart not found"});
     cart.items = cart.items.filter((item) => item.productId.toString() !== productId)
       await cart.save()
       res.status(200).json({
        message: "Product removed from cart",
        cart
       })

    } catch (error) {
        res.status(404).json({message: error.message});
    }    
}

export const ClearCart = async(req, res) =>{
    try {
        const userId = req.user;
        const cart = await Cart.findOne({ userId})
        if(!cart){
            cart =  new Cart({items: []})
        }else{
            cart.items = []
        }
        await cart.save()
        res.status(200).json({
            message: "Cart cleared"})
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const DecreaseQuantity = async(req, res) => {
    try {
        const {productId, quantity} = req.body;
        const userId = req.user;
        let cart = await Cart.findOne({userId})
        if(!cart){
            cart = new Cart({
                userId,
                items: []
            })
        }
        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);
        if(itemIndex > -1){
            const item = cart.items[itemIndex]
            if(item.quantity > quantity){
                const priceUnit = item.price/item.quantity
                item.quantity -= quantity
                item.price -= priceUnit * quantity

            }else{
                cart.items.splice(itemIndex, 1)
            }
        }else{
            res.status(404).json({message: "Invalid Product Id"})
        }
        await cart.save()
        res.status(200).json({
            message: "Item Quantity has been updated successfully",
            cart
        })
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}