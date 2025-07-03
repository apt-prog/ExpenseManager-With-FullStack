import mongoose from "mongoose";

const userScehma = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    IncomeExpenseList: {
      type: [String],
      default: [],
    },
    Settings: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("users", userScehma);
