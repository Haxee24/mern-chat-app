import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signup = asyncHandler(async (req, res) => {
    const { username, email, fullname, password, desc, pfp } = req.body;
    if (!username || !email || !fullname || !password) {
        throw new ApiError(400, "All fields are required");
    }
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(400, "User with this email or username already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        fullname,
        username,
        email,
        password: hashedPassword,
    });

    if (pfp) {
        user.pfp = pfp;
    }
    if (desc) {
        user.desc = desc;
    }
    await user.save();
    return res.status(201).json(new ApiResponse(user, "User registered successfully"));
});

export const login = (req, res) => {
    res.send("Login route");
}

export const logout = (req, res) => {
    res.send("Logout route");
}