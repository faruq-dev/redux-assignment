import { useState } from "react";
import Like from "../../assets/like.svg";
// import UnLike from "../../assets/unlike.svg";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
export default function VideoLikeUnlike({ likes, dislikes }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const [unlikeCount, setUnlikeCount] = useState(dislikes);
  const [isUnliked, setIsUnliked] = useState(false);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
    setIsLiked(!false);
    if (isUnliked) {
      setUnlikeCount(unlikeCount - 1);
      setIsUnliked(!true);
    }
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(!true);
    }
  };

  const handleUnlike = () => {
    setUnlikeCount(unlikeCount + 1);
    setIsUnliked(!false);
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(!true);
    }
    if (isUnliked) {
      setUnlikeCount(unlikeCount - 1);
      setIsUnliked(!true);
    }
  };
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <button onClick={handleLike}>
            {isLiked ? (<AiFillLike size={22}/>) : (<AiOutlineLike size={22}/>)}
          </button>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likeCount}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <button onClick={handleUnlike}>
            {isUnliked ? (<AiFillDislike size={22}/>) : (<AiOutlineDislike size={22}/>)}
          </button>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikeCount}
        </div>
      </div>
    </div>
  );
}
