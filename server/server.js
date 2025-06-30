import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();
app.use(express.json());

// CORS middleware - fixed headers and methods
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you need to allow credentials
  })
);

//Database connection
connectDB();

// Api Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Vercel!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);

//Error handling middleware (recommended addition)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "something went wrong" });
});

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
