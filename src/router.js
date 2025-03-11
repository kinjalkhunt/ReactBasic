import React from "react";

const TotalExpense = React.lazy(() => import("./Component/TotalExpence"));
const ExpenseForm = React.lazy(() => import("./Component/ExpenceForm"));
const ExpenseList = React.lazy(() => import("./Component/ExpenceList"));
const MyExpence = React.lazy(() => import("./Component/mainIndex"))

export const router = [
    {
        path: "/myExpense",
        name: "myExpense",
        element: MyExpence
    }
//   {
//     path: "/totalExpense",
//     name: "totalExpense",
//     element: TotalExpense,
//   },
//   {
//     path: "/expenseForm",
//     name: "expenseForm",
//     element: ExpenseForm,
//   },
//   {
//     path: "/expenseList",
//     name: "expenseList",
//     element: ExpenseList,
//   },
];
