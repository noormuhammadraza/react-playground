import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = (event) => {
    const { name } = event.target;
    name === "increment" && setCount(count + 1);
    name === "decrement" && setCount(count - 1);
    name === "reset" && setCount(count * 0)
  };

  return (
    <div>
      <button
        name="increment"
        className="btn btn-primary"
        onClick={handleClick}
      >
        +
      </button>
      <button name="decrement" className="btn btn-danger" onClick={handleClick}>
        -
      </button>
      <p className="display-1">{count}</p>
      <button name="reset" className="btn btn-warning" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
