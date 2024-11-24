import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageSrc1: {
    type: String,
    required: true,
  },
  imageSrc2: {
    type: String,
    required: true,
  },
  imageSrc3: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
