import User from "../Model/User.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.json({ message: "Email already exists", success: false });
    }
    const hashpassword = await bcrypt.hash(password, 8);
    user = await User.create({
      fullname,
      email,
      password: hashpassword,
    });
    res.status(201).json({
      message: "User registered successfully",
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error", error);
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid Password", success: false });
    }
    const token = jwt.sign({ userId: user.id }, "!@#$%^&*()*+", {
      expiresIn: "48h",
    });
    res.json({
      message: `Wellcome ${user.fullname}`,
      token,
      msg: "Login successful",
      success: true,
      user,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const Allusers = await User.find().sort({ CreatAt: -1 });
    res.json(Allusers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const Profile = async (req, res) => {
  res.json({
    user: req.user,
  });
};
