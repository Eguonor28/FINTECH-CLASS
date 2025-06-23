import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    icon: { type: String },
    //the source of income or desciption
    source: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Income", IncomeSchema);
