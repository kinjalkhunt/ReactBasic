import React, { useState } from "react";

const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];

const FeedbackSystem = () => {
  const [votes, setVotes] = useState(aspects.map(() => ({ upvote: 0, downvote: 0 })));

  const handleUpvote = (index) => {
    const newVotes = [...votes];
    newVotes[index].upvote += 1;
    setVotes(newVotes);
  };

  const handleDownvote = (index) => {
    const newVotes = [...votes];
    newVotes[index].downvote += 1;
    setVotes(newVotes);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 text-center">
      <div className="flex flex-wrap justify-center gap-8">
        {aspects.map((aspectName, index) => (
          <div
            className="bg-white rounded-2xl shadow-md p-6 w-72 transition-transform hover:scale-105"
            key={index}
          >
            <h2 className="text-2xl font-semibold mb-6">{aspectName}</h2>
            <div className="flex justify-around mb-4">
              <button
                className="bg-green-600 text-white font-medium py-2 px-4 rounded shadow hover:bg-green-700"
                // data-testid={`upvote-btn-${index}`}
                onClick={() => handleUpvote(index)}
              >
                👍 Upvote
              </button>
              <button
                className="bg-red-600 text-white font-medium py-2 px-4 rounded shadow hover:bg-red-700"
                // data-testid={`downvote-btn-${index}`}
                onClick={() => handleDownvote(index)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="text-sm" data-testid={`upvote-count-${index}`}>
              Upvotes: {votes[index].upvote}
            </p>
            <p className="text-sm" data-testid={`downvote-count-${index}`}>
              Downvotes: {votes[index].downvote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
