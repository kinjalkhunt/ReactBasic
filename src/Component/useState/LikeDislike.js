import { useState } from "react";

const LikeDislike = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    if (!like) {
      setLike(true);
      setLikeCount(likeCount + 1);
      if (dislike) {
        setDislike(false);
        setDislikeCount(dislikeCount - 1);
      }
    } else {
      setLike(false);
      setLikeCount(likeCount - 1);
    }
  };

  const handleDislike = () => {
    if (!dislike) {
      setDislike(true);
      setDislikeCount(dislikeCount + 1);
      if (like) {
        setLike(false);
        setLikeCount(likeCount - 1);
      }
    } else {
      setDislike(false);
      setDislikeCount(dislikeCount - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Like & Dislike</h1>
      <div className="flex gap-4">
        <button
          onClick={handleLike}
          className={`px-4 py-2 rounded ${
            like ? "bg-green-500" : "bg-gray-300"
          } text-white`}
        >
          👍 Like {likeCount}
        </button>
        <button
          onClick={handleDislike}
          className={`px-4 py-2 rounded ${
            dislike ? "bg-red-500" : "bg-gray-300"
          } text-white`}
        >
          👎 Dislike {dislikeCount}
        </button>
      </div>
    </div>
  );
};

export default LikeDislike;

