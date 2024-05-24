import express from "express";
import userController from "../controllers/user.js";

const router = express.Router();

router.post('/location', userController);
router.get('/location', (req, res)=>{
    res.send("Hello world");
});

export default router;