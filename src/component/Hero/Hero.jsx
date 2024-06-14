import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = ["Front-End Web", "Back-End Web", "Full Stack Web", "Game "];

  const TypingEffect = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("");

    useEffect(() => {
      let currentIndex = 0;
      let word = "";
      const intervalId = setInterval(() => {
        word = word + words[currentWordIndex][currentIndex];
        setCurrentWord(word);
        currentIndex++;
        if (currentIndex === words[currentWordIndex].length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setCurrentWord("");
          }, 1000);
        }
      }, 200);

      return () => clearInterval(intervalId);
    }, [currentWordIndex, words]);

    return <span className="typing">{currentWord}</span>;
  };

  return (
    <div className="hero-container">
      <div className="left" data-aos="fade-right">
        <h1>
          Hi!! I AM Fatima <br className="break-line" />{" "}
          <TypingEffect words={words} /> <br />
          <span className="typing">Developer</span>
        </h1>
        <p>
          she is a wizard of the web, crafting responsive websites where
          technology and creativity converge seamlessly{" "}
        </p>
        <Link to={"/contacts"}>Contact me !!</Link>
      </div>
      <div className="right" data-aos="fade-left">
        <img src="./images/fatima.png" alt="" />
        <div className="card">
          <div className="square"></div>
          <div className="content">
            currently open to <span>work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
