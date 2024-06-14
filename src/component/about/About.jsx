import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div
        className="top"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <div>
          <h3>
            <span>#</span>About-me
          </h3>
          <div className="line"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="left" data-aos="fade-right">
          <p>Hello I am Adjissi Fatima Amina </p>
          <p>
            Accomplished Full Stack Developer proficient in both front-end and
            back-end programming for various types of websites. Expert in
            managing the entire software development lifecycle with a focus on
            quality, security, and user-friendliness.
          </p>
          <p>
            Brings strong multitasking
            abilities and problem-solving skills. Currently a student working
            towards a degree in Computer Science and seeking an opportunity to
            start a career. Quickly identifies and addresses knowledge gaps to
            deliver value to employers and teams{" "}
          </p>
          <Link to="/about">{"Read more ->"}</Link>
        </div>
        <div className="right" data-aos="fade-left">
          <img src="./images/fatima.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
