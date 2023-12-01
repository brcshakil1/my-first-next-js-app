import Counter from "@/components/Counter/Counter";
import Link from "next/link";
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
      <Link href="about">
        {" "}
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="news">
        {" "}
        <button className="btn btn-accent">News</button>
      </Link>
      <Link href="contact">
        {" "}
        <button className="btn btn-accent">Contact</button>
      </Link>
      <Link href="products">
        {" "}
        <button className="btn btn-accent">Products</button>
      </Link>
      <Link href="album">
        {" "}
        <button className="btn btn-accent">Album</button>
      </Link>
    </div>
  );
};

export default HomePage;
