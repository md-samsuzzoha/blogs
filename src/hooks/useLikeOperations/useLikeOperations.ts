import { useState } from "react";
import Like from "../../interfaces/Like.interface";

const useLikeOperations = () => {
  const [likes, setLikes] = useState<Like[]>([]);

  const addLike = (article: Like) => {
    if (likes.some((like) => like.id === article.id)) {
      return false;
    } else {
      setLikes([...likes, article]);
      return true;
    }
  };

  const removeLike = (id: string) => {
    const index = likes.findIndex((like) => like.id === id);
    if (index !== undefined) {
      setLikes([...likes.slice(0, index), ...likes.slice(index + 1)]);
      return true;
    } else {
      return false;
    }
  }
  const checkIfLikeed = (id: string) => {
    return likes.some((like) => like.id === id);
  }
  return { likes, addLike, removeLike, checkIfLikeed };
}
export default useLikeOperations;