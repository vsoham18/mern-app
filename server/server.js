import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { authRouter} from "./routes/auth-routes.js";
import { connectDB } from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { contactRouter } from "./routes/contact-route.js";
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(authRouter)
app.use(contactRouter) 
app.use(errorMiddleware)
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}) 