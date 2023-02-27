import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Article/Article";
import Likes from "./components/Likes/Likes";
import Home from "./components/Home/Home";
import Topbar from "./components/Topbar/Topbar";
import { LikeProvider } from "./contexts/Like.context";
import useLikeOperations from "./hooks/useLikeOperations/useLikeOperations";

function App() {
  const like = useLikeOperations();

  return (
    <BrowserRouter>
      <Topbar />
      <div className="content-wrapper">
        <LikeProvider value={like}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article/:id" element={<Article />} />
            <Route path="likes" element={<Likes />} />
          </Routes>
        </LikeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
