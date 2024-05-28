import express from "express";
import mongoose from "mongoose";
import { mongoURI } from "./config/config.js";
import userRouter from "./routers/user.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use("/", userRouter);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
