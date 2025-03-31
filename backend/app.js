import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./postRoutes.js";

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

/* MONGOOSE SETUP */
mongoose
    .connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connected Successfully!");
        app.listen(PORT, () => console.log(`Server successfully running on Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
