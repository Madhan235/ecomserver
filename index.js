import express from "express";
import dotenv from "dotenv";
import dataRouter from "./routes/data.routes.js";
import cors from "cors";

dotenv.config();
const app = express();

const corsOptions = {
  origin: "https://ecom96.netlify.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", dataRouter);

app.listen(process.env.PORT, async (req, res) => {
  console.log("server listening on port");
});
