import cors from "cors";
import express from "express";
import { connectDB } from "./utils/db.js";
import { PORT } from "./config/env.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";

import { authRouter} from "./routes/auth-routes.js";
import { contactRouter } from "./routes/contact-route.js";
import serviceRouter from "./routes/service-routes.js";

import userRouter from "./routes/Admin/adminUsers-routes.js";
import { adminContactRouter } from "./routes/Admin/adminContact-route.js";
import adminDashboardRouter from "./routes/Admin/admindashboard-routes.js";

const app = express(); 
const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET','POST','PUT','DELETE','OPTIONS','PATCH'],
    credentials: true, 
};

app.use(cors(corsOptions))
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRouter)
app.use(contactRouter)  
app.use(serviceRouter)
app.use('/api/admin',adminDashboardRouter)
app.use('/api/admin',userRouter)
app.use('/api/admin',adminContactRouter)
app.use(errorMiddleware) 

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}) 