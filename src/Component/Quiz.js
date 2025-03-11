// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//     answer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Venus"],
//     answer: "Mars",
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     options: ["Atlantic", "Indian", "Arctic", "Pacific"],
//     answer: "Pacific",
//   },
// ];

// const QuizApp = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);
//   const [quizFinished, setQuizFinished] = useState(false);
// const navigate = useNavigate();
//   const handleAnswerSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNext = () => {
//     if (selectedOption === quizData[currentQuestion].answer) {
//       setScore(score + 1);
//     }
//     setSelectedOption(null); 

//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizFinished(true);
//     }
//   };

//   const handleRestart = () => {
//     setCurrentQuestion(0);
//     setSelectedOption(null);
//     setScore(0);
//     setQuizFinished(false);
//   };

//   // const gonext = () => {
//   //   navigate('/TotalExpence')
//   // }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-96">
//         {quizFinished ? (
//           <>
//             <h2 className="text-2xl font-bold text-center">
//               Quiz Finished! 🎉 Your Score: {score}/{quizData.length}
//             </h2>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full"
//               onClick={handleRestart}
//             >
//               Restart Quiz
//             </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-lg font-bold">
//               {currentQuestion + 1}. {quizData[currentQuestion].question}
//             </h2>
//             <div className="mt-4 space-y-2">
//               {quizData[currentQuestion].options.map((option) => (
//                 <button
//                   key={option}
//                   className={`block w-full px-4 py-2 border rounded ${
//                     selectedOption === option
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   }`}
//                   onClick={() => handleAnswerSelect(option)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//             <button
//               className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full disabled:opacity-50"
//               onClick={handleNext}
//               disabled={!selectedOption}
//             >
//               {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
//             </button>
//           </>
//         )}
//       </div>
//       <button onClick={() => gonext()} className="border">next</button>
//     </div>
//   );
// };

// export default QuizApp;
