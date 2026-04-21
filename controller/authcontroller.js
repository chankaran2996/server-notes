
export const allUser = (req, res) => {
    res.status(200).json({message: "List of all users"});
}


export const register = (req, res) => {
    res.status(201).json({message: "User registered successfully"});
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