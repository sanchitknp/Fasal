import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

connectDB();
import userRoute from "./router/userRouter.js";
import playlistRoute from "./router/playlistRouter.js";
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log("incoming")
app.use("/auth", userRoute);
app.use("/playlist", playlistRoute);


app.listen(5000, console.log(`Server running on  port 5000`));
