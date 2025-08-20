import app from "./app";
import "dotenv-safe/config";
const port:number = Number(process.env?.PORT || 3030);
app.listen(port, () => `Server Running on Port : ${port}`);