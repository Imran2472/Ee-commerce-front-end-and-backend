import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routes/User.Router.js";
import ProductRouter from "./Routes/Product.Router.js";
import CartRouter from "./Routes/Cart.Router.js";
import addressroutes from "./Routes/Address.Router.js";
import paymentRouter from "./Routes/Payment.Router.js";
import stripe from "stripe";

stripe(process.env.STRIPE_SECERATE_KEY);
const app = express();
const Port = process.env.PORT || 4002;
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
dotenv.config();
app.get("/", (req, res) => {
  res.status(201).send("hellow World");
});
const MONGOURI = process.env.MONMOOSE_URI;
try {
  mongoose.connect(
    MONGOURI,
    {
      dbName: "My_Shop_E",
    },
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  console.log("Connected to MongoDB");
} catch (error) {
  throw new Error(error.message);
}

//user Router
app.use("/api/users", userRouter);
app.use("/api/product", ProductRouter);
app.use("/api/cart/", CartRouter);
app.use("/api/cart", addressroutes);
app.listen(Port, () => {
  console.log(`Server is running on port http://localhost:${Port}`);
});
