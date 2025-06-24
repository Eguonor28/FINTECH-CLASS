import Income from "../models/Income.js";

//add income
const addIncome = async (req, res) => {
  const userId = req.user.id;
  try {
    const { icon, source, amount, date } = req.body;
    //validate to check and confirm for missing fields
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });
    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//get all income
const getAllIncome = async (req, res) => {
  const userId = req.user.id;
  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.json(income);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
//delete income

const deleteIncome = async (req, res) => {
  const userId = req.user.id;
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: "Income deleted successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Export all income-related controller functions
export { addIncome, getAllIncome, deleteIncome };
