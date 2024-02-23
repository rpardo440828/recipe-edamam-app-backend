import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 3030;
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

const options = {
    origin: 'https://recipesearchsite.netlify.app',
    credentials: true
}
app.use(cors(options));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});