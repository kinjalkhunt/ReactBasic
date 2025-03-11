// src/components/ExpenseList.jsx
const ExpenseList = ({ expenses, deleteExpense }) => {
    return (
      <ul>
        {expenses?.map((expense, index) => (
          <li key={index} className="flex justify-between p-2 mb-2 bg-gray-100 rounded-md">
            <div>
              <p>{expense.amount} - {expense.category} - {expense.date}</p>
            </div>
            <button
              onClick={() => deleteExpense(index)}
              className="bg-red-500 text-white p-1 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ExpenseList;
  