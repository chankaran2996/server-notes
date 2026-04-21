import express from "express";
import { 
    allUser, 
    deleteUser, 
    login, 
    register, 
    updateProfile
} from "../controller/authcontroller.js";
// import { 
//     allUser, 
//     register
// } from "../controller/authroller.js";

const authRouter = express.Router();

// Get Method

authRouter.get("/all-users", allUser)

// Post Method

authRouter.post("/register", register)


authRouter.post("/login", login)


// Put Method
authRouter.put("/update-profile", updateProfile)


// Delete Method
authRouter.delete("/delete-account", deleteUser)


export default authRouter;