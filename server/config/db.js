import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("MongoDB has connected");
  } catch (error) {
    console.log("Error connecting to Mongodb database", error);
    process.exit(1);
  }
};

export default connectDB;
