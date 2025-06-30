import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    icon: { type: String },
    //the source of income or descriptiion
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Expense", ExpenseSchema);
