import jwt from "jsonwebtoken";
import User from "../Model/User.Model.js"
export const Authorization = async(req, res, next) => {
    try {
        const token = req.header("Auth")
    if (!token) {
        return res.json({ message: "Login First" });
    }
    const decoded = jwt.verify(token, "!@#$%^&*()*+")
    const id = decoded.userId
    let user = await User.findById(id)
    if(!user){
        return res.json({ message: "User Not Found" });
    }
    req.user = user
    next()
    } catch (error) {
        res.json({ message: "Error: " + error.message})
    }

}