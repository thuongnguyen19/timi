import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectDB } from "./config/db";
import productRouter from "./routers/product.js";
import userRouter from "./routers/user.js";

const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
// connect db
connectDB("mongodb://localhost:27017/timi");

// routers
app.use("/api", productRouter);
app.use("/api", userRouter);

export const viteNodeApp = app;
