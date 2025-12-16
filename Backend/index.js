import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";

const app = express();

const port = process.env.PORT || 4000;

// Use a clear, uppercase env var name
const URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    if (!URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World guys!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
