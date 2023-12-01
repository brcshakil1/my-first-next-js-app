"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="grid place-items-center">
      <h2>Counter: {counter}</h2>
      <div className="py-5">
        {" "}
        <button
          className="btn btn-primary mr-5"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
