import express from 'express';
import stripe from 'stripe'
new stripe(process.env.STRIPE_SECERATE_KEY);
const router = express.Router()

router.post('/create-checkout-session', async (req, res) =>{
        try {
            const {product} = req.body;
            // console.log(product);
            const lineItems = product.map((product)=>({
                Price_data:{
                    currency: 'USD',
                    product_data: {
                        name: product.title,
                        image: [product.imageSrc]
                    },
                    unit_amount: Math.round(product.price * 100)
                },
                quantity: product.quantity
            }))
    
            const session = await stripe.checkout.session.create({
                payment_method_types: ['card'],
                line_items: lineItems,
                mode: 'payment',
                success_url: 'http://localhost:4002/success',
                cancel_url: 'http://localhost:4002/cancel',
            });
            
            res.json({ sessionId:session.id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
   
})

export default router