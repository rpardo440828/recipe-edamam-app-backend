import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors({AccessControlAllowOrigin: 'https://recipesearchsite.netlify.app/', AccessControlAllowCredentials: true}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});