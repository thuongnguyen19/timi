import User from "../models/user.js";
import jwt from "jsonwebtoken";

const secret = "your_jwt_secret";

export const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = new User({ username, password, role });
        await user.save();
        return res.status(201).json({ message: "người dùng đã đăng kí thành công" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user || !(await user.comparePassword(req.body.password))) {
            return res.status(401).json({ message: "sai tên hoặc sai mật khẩu" });
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, secret, { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Xem list người dùng
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
// Tìm kiếm người dùng bằng ID
export const getUserById = async (req, res) => {
    try {
        const user = req.foundUser; // Nhận thông tin người dùng từ middleware findUserById
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};