import express from "express";
import dotenv from "dotenv";
import dataRouter from "./routes/data.routes.js";
import cors from "cors";
import { insertProducts } from "./data.js";

const app = express();
app.use(express.json());

dotenv.config();
app.use(cors());

app.use("/api", dataRouter);

app.listen(process.env.PORT, async (req, res) => {
  console.log("server listening on port");
});
