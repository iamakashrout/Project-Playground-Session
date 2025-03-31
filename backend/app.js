import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import connectDB from "./utils/dbConnect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/posts", postRoutes);


app.get("/", (req, res) => {
    res.send("Server is running!");
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
});