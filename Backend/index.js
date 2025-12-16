import express from "express"
import mongoose from "mongoose";
import 'dotenv/config'
import cors from "cors"
import bookRoute from "./route/bookRoute.js"
import userRoute from "./route/userRoute.js"
const app = express()
const port = process.env.PORT || 4000;
const URI=process.env.MongoDBURI
app.use(cors())
app.use(express.json())

//connect to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      console.log("connected to mongoDB");
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};
// Call the connectDB function
connectDB();
//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.get('/', (req, res) => {
  res.send('Hello World guys!')
})

app.listen(port, () => {
  console.log(`Sever is listening on port ${port}`)
})
