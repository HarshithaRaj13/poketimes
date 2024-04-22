import React from "react";
import Rainbow from "./hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        <h5>Which language is React? </h5>
        <br />
        React is a JavaScript React Software
        <br />
        <span>Original author(s) : Jordan Walke</span>
        <br />
        <span>Repository : github.com/facebook/react</span>
        <br />
        <span>Written in : JavaScript Platform</span> <br />
        Web platform Type : JavaScript library
      </p>
    </div>
  );
};

export default Rainbow(About);
