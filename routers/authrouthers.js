import express from "express";

const authRouter = express.Router();

// Get Method

authRouter.get("/all-users", (req, res) => {
    res.status(200).json({message: "List of all users"});
})

// Post Method

authRouter.post("/register", (req, res) => {
    res.status(201).json({message: "User registered successfully"});
})


authRouter.post("/login", (req, res) => {    
    res.status(200).json({message: "User logged in successfully"});
})


// Put Method
authRouter.put("/update-profile", (req, res) => {
    res.status(200).json({message: "User profile updated successfully"});
})


// Delete Method
authRouter.delete("/delete-account", (req, res) => {
    res.status(200).json({message: "User account deleted successfully"});
})


export default authRouter;