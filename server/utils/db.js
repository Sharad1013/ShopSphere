import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://sharadsinha8789:sa1tya1005@cluster0.tl5r7.mongodb.net`
    );
    console.log(`ShopSphere DataBase Connection Successful !! Synchronising all Data`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;