import Counter from "@/components/Counter/Counter";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl pt-10 font-bold">
        My first next js app
      </h1>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default HomePage;
