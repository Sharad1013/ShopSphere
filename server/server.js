import express from "express";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET,POST,DELETE,PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// creating db connection --> makes sure that the server will run only when the connection to the DB is successful
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is up at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
