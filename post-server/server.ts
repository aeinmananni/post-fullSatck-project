import app from "./app";
import "dotenv-safe/config";
const port = process.env.PORT;
app.listen(port, () => `Listening On Port ${port}`);