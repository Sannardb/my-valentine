"use client";
import React, { useState } from "react";
import Typewriter from "../typewrite";

export default function Valentine() {
  const [response, setResponse] = useState("");
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [gif, setGif] = useState(null);

  const handleYesClick = () => {
    setResponse("YAY!");
    setGif(
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ljb3J3MGc3NjZxMGYwOHNxa3dkNDdlNmNraWNwM3hnemNhdXU3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0GqFhyNd0Wmfo6sM/giphy.gif"
    );
    setButtonsVisible(false);
  };

  const handleNoClick = () => {
    setResponse("Okay but how were you so quick? Also, are you sure..?");
  };

  const handleNoMouseOver = (e) => {
    if (!buttonsVisible) return;

    const movementAreaSize = 500;
    const areaX = window.innerWidth / 2 - movementAreaSize / 2;
    const areaY = window.innerHeight / 2 - movementAreaSize / 2;
    const randomX = areaX + Math.floor(Math.random() * movementAreaSize);
    const randomY = areaY + Math.floor(Math.random() * movementAreaSize);

    e.target.style.position = "absolute";
    e.target.style.left = `${randomX}px`;
    e.target.style.top = `${randomY}px`;
  };

  return (
    <div className="text-center mt-40">
      <h1 className="mb-10 text-6xl">
        Will you <Typewriter text="...be my valentine?" delay={100} />
      </h1>

      {buttonsVisible && (
        <div className="flex justify-center gap-10">
          <button
            onClick={handleYesClick}
            className="animate-pulse bg-pink-500 hover:bg-pink-700 text-white py-2 px-5 rounded-full text-2xl cursor-pointer"
          >
            Yes
          </button>
          <button
            onMouseOver={handleNoMouseOver}
            onClick={handleNoClick}
            className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-5 rounded-full text-2xl cursor-pointer"
          >
            No
          </button>
        </div>
      )}
      <span>{response}</span>
      {gif && (
        <div className="flex justify-center">
          <img src={gif} alt="Happy Valentine's Day" />
        </div>
      )}
    </div>
  );
}
