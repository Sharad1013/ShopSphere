import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(
      `ShopSphere DataBase Connection Successful !! Synchronising all Data`
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
