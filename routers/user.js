import express from "express";
import userController from "../controllers/user.js";

const router = express.Router();

router.post('/location', userController);

export default router;