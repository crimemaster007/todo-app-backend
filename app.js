import express from "express";
import userRouter from "./routes/user.js"
import { config } from "dotenv";


export const app = express();

config({
    path: "./data/config.env",
});

// using middlewares
app.use(express.json());

//using routes
app.use("/api/v1/users",userRouter);




app.get("/", (req, res) => {
    res.send("Nice working");
})

