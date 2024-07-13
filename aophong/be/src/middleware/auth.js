import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Import model của người dùng

const secret = "your_jwt_secret";

export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: " mã token không tồn tại " });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: "sai mã oken" });
    }
};

export const authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "không có quyền truy cập" });
        }
        next();
    };
};

export const findUserById = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req.foundUser = user; // Lưu thông tin người dùng vào req để sử dụng sau này
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
