import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import authRoutes from './routes/auth.routes.js'

dotenv.config();

const app = express();

// #  middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Welcome to shoppe backend server");
});

app.use("/api/v1/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `SERVER IS RUNNING ON PORT ${process.env.PORT} AND ON ${process.env.DEV_MODE}-MODE`
  );
  connectDB();
});
