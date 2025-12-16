import express from "express"
import mongoose from "mongoose";
import 'dotenv/config'
import cors from "cors"
import bookRoute from "./route/bookRoute.js"
import userRoute from "./route/userRoute.js"
const app = express()
const PORT = process.env.PORT || 4000;
const URI=process.env.MongoDB_URI
app.use(cors())
app.use(express.json())

//connect to mongoDB
async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit if connection fails
  }
}

connectDB();
//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.get('/', (req, res) => {
  res.send('Hello World guys!')
})

app.listen(PORT, () => {
  console.log(`Sever is listening on port ${PORT}`)
})
