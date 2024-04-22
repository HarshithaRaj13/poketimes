import React from "react";

const Rainbow = (WrappedComponent) => {
  const colours = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
    "black",
    "purple",
    "pink",
    "darkgreen",
  ];
  const randomColour = colours[Math.floor(Math.random() * 10)];
  const className = randomColour + "-text";
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
