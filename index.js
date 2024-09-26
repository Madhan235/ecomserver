import express from "express";
import dotenv from "dotenv";
import dataRouter from "./routes/data.routes.js";
// import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());

// app.use(
//   cors({
//     origin: ["https://ecom96.netlify.app/", "http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

app.use("/api", dataRouter);

app.listen(process.env.PORT, async (req, res) => {
  console.log("server listening on port");
});
