import { createContext, useContext } from "react";
import Like from "../interfaces/Like.interface";
interface LikeContextState {
  likes: Like[];
  addLike: (article: Like) => boolean;
  removeLike: (id: string) => boolean;
  checkIfLikeed: (id: string) => boolean;
}

const LikeDefaultState: LikeContextState = {
  likes: [],
  addLike: (article: Like) => true,
  removeLike: (id: string) => true,
  checkIfLikeed: (id: string) => true,
}
const context = createContext<LikeContextState>(LikeDefaultState);

const { Provider: LikeProvider } = context;
const useLikeContext = (): LikeContextState => useContext(context)

export { LikeProvider, useLikeContext };