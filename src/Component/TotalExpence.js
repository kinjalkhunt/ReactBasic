// src/components/TotalExpense.jsx
import { useState, useEffect } from "react";

const getTimeUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(23, 59, 59, 999); // Set to 11:59:59.999 PM today
  return midnight - now;
};

const TotalExpense = ({ expenses }) => {
  const [notification, setNotification] = useState('');
  const [dailyTotal, setDailyTotal] = useState(0);

  // Calculate the total daily expense
  const calculateDailyTotal = () => {
    const now = new Date();
    const dailyExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getDate() === now.getDate() &&
        expenseDate.getMonth() === now.getMonth() &&
        expenseDate.getFullYear() === now.getFullYear();
    });

    return dailyExpenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  };

  // Trigger daily notification at 11:59 PM
  useEffect(() => {
    const timeout = setTimeout(() => {
      const dailyTotalAmount = calculateDailyTotal();
      setDailyTotal(dailyTotalAmount);
      setNotification(`Today's expenses: $${dailyTotalAmount.toFixed(2)}`);
    }, getTimeUntilMidnight()); // Schedule the notification for 11:59 PM today

    return () => clearTimeout(timeout); // Clean up the timeout if the component unmounts
  }, [expenses]); // Re-run effect whenever expenses change

  return (
    <div className="mb-6 p-4 bg-green-200 rounded-md">
      <h2>Total Spending Today:</h2>
      <p>${dailyTotal.toFixed(2)}</p>

      {notification && (
        <div className="mt-2 p-2 bg-yellow-300 text-red-700 rounded-md">
          {notification}
        </div>
      )}
    </div>
  );
};

export default TotalExpense;
