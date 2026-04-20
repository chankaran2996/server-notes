import express from 'express';
import dotenv from 'dotenv';
import connectDB from './data_base/connection.js';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT ;

app.get("/", (req, res) => {
  res.status(200).json({message: "Hello, World!"});
})

app.get("/heart-beat", (req, res) => {
  res.status(200).json({message: "Server is alive!"});
})

// app.listen(port-number, function)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});