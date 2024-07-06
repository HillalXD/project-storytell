import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("database connect");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "share_prompt",
    });
    isConnected = true;
    console.log("mongoDB connect");
  } catch (error) {}
};