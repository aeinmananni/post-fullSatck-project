
import express,{Express} from "express";
import compression from "compression";
import cors from "cors";
import POSTS from "../routes/posts.routes";
const app: Express = express();

app.use(express.json());
app.use(compression());
app.use(cors({credentials:false}));
app.use(express.urlencoded({ extended: true }));
app.use("/api/posts", POSTS);









export default app;
