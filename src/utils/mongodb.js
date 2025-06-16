import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}
async function dbConnect() {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection error:", error);
      throw error;
    }
  } else {
    console.log("Database is already connected");
  }
  return mongoose.connection;
}
export default dbConnect;

