import User from "../models/userModel.js";

export const allUser = (req, res) => {
    res.status(200).json({message: "List of all users"});
}


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const responce = await User.create({
            name,
            email,
            password
        })

        res.status(201).json({message: "User registered successfully", user: responce});
        
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

export const login = (req, res) => {    
    res.status(200).json({message: "User logged in successfully"});
}

export const updateProfile = (req, res) => {
    res.status(200).json({message: "User profile updated successfully"});
}

export const deleteUser = (req, res) => {
    res.status(200).json({message: "User account deleted successfully"});
}