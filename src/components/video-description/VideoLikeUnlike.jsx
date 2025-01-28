import { useState } from "react";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";
export default function VideoLikeUnlike({ likes, dislikes }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const [unlikeCount, setUnlikeCount] = useState(dislikes);
  const [isUnliked, setIsUnliked] = useState(false);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
    setIsLiked(!false);
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(!true);
    }
  };

  const handleUnlike = () => {
    setUnlikeCount(unlikeCount + 1);
    setIsUnliked(!false);
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
            <img className="w-5 block" src={Like} alt="Like" />
          </button>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likeCount}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <button onClick={handleUnlike}><img className="w-5 block" src={UnLike} alt="Unlike" /></button>
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikeCount}
        </div>
      </div>
    </div>
  );
}
