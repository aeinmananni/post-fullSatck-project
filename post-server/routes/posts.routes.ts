import { Router } from "express";
import { handelPostController } from "../controllers/posts.controller";
const router = Router();



router.get("/GET", handelPostController);



export default router;