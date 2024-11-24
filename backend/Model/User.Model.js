import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  CreatAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
