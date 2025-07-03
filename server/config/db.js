import mongoose from "mongoose";

export const ConnectWithMongoDB = () => {
  try {
    mongoose.connect(process.env.MongoDB_Key);
    console.log(`The DataBase Connected ✅`);
  } catch (err) {
    console.log(`In The Databse Connection Have Some Error ❌`);
  }
};
