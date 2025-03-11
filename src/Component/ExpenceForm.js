// src/components/ExpenseForm.jsx
import { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date) {
      addExpense({ amount, category, date });
      setAmount("");
      setCategory("");
      setDate("");
    }
  };
console.log("nmvns",amount);

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-200 rounded-md">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="p-2 border mb-2"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="p-2 border mb-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border mb-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
