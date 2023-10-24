import React, { useState } from "react";

const Button = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = (event) => {
    const { name } = event.target;
    name === "count"
      ? setClickCount((prev) => prev + 1)
      : setClickCount((prev) => prev * 0);
  };

  return (
    <div>
      <button name="count" className="btn btn-primary" onClick={handleClick}>
        My Button
      </button>
      <p className="display-1">
        You have clicked the button {clickCount} times
      </p>
      <button name="reset" className="btn btn-warning" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};

export default Button;
