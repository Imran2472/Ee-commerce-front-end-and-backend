import cloudinary from "../Cloudinary/Cloudinary.js";
import Product from "../Model/Product.model.js";
import fs from "fs";
export const addProduct = async (req, res) => {
  const {
    title,
    description,
    price,
    category,
    quantity,
    imageSrc,
    imageSrc1,
    imageSrc2,
    imageSrc3,
  } = req.body;
  try {
    const image1 = await cloudinary.uploader.upload(req.files.imageSrc[0].path);
    const image2 = await cloudinary.uploader.upload(
      req.files.imageSrc1[0].path
    );
    const image3 = await cloudinary.uploader.upload(
      req.files.imageSrc2[0].path
    );
    const image4 = await cloudinary.uploader.upload(
      req.files.imageSrc3[0].path
    );
    console.log(image1, image2, image3, image4);
    fs.unlinkSync(req.files.imageSrc[0].path);
    fs.unlinkSync(req.files.imageSrc1[0].path);
    fs.unlinkSync(req.files.imageSrc2[0].path);
    fs.unlinkSync(req.files.imageSrc3[0].path);

    let product = new Product({
      title,
      description,
      price,
      category,
      quantity,
      imageSrc: image1.secure_url,
      imageSrc1: image2.secure_url,
      imageSrc2: image3.secure_url,
      imageSrc3: image4.secure_url,
    });
    await product.save();
    res.json({
      message: "Product created successfully",
      product,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const GetProduct = async (req, res) => {
  try {
    let product = await Product.find().sort({ createdAt: -1 });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const GetProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({
      message: "Spacefic Product",
      product,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      category,
      quantity,
      imageSrc,
      imageSrc1,
      imageSrc2,
      imageSrc3,
    } = req.body;
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.json({ message: "Product not found" });
    }
    const image1 = await cloudinary.uploader.upload(req.files.imageSrc[0].path);
    const image2 = await cloudinary.uploader.upload(
      req.files.imageSrc1[0].path
    );
    const image3 = await cloudinary.uploader.upload(
      req.files.imageSrc2[0].path
    );
    const image4 = await cloudinary.uploader.upload(
      req.files.imageSrc3[0].path
    );
    fs.unlinkSync(req.files.imageSrc[0].path);
    fs.unlinkSync(req.files.imageSrc1[0].path);
    fs.unlinkSync(req.files.imageSrc2[0].path);
    fs.unlinkSync(req.files.imageSrc3[0].path);
    product.title = title;
    product.description = description;
    product.price = price;
    product.category = category;
    product.quantity = quantity;
    product.imageSrc = image1.secure_url;
    product.imageSrc1 = image2.secure_url;
    product.imageSrc2 = image3.secure_url;
    product.imageSrc3 = image4.secure_url;
    await product.save();
    res.send({
      message: "Product updated successfully!",
      product,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
