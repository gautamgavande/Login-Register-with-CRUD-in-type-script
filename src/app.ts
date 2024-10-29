import express from "express";
import connectDB from "./config/dbConfig";
import authRoutes from "./routes/authRoutes";
import { Request, Response } from "express";
import cors from 'cors';


const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", authRoutes);

connectDB();

export default app;
