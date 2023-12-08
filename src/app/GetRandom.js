import React, { useState } from "react";

const GetRandom = ({ value, onClick }) => {
  const [display, setDisplay] = useState({ title: "", content: "" });
  const randomQuote = () => {
    const random = Math.floor(Math.random() * value.length);
    return value[random];
  };
  const displayRandom = () => {
    const quote = randomQuote();
    setDisplay({ title: quote.text, author: quote.author.slice(0, -10) });
  };
  return (
    <div className="container">
      <h1>Get Random Quote</h1>
      <h2>{display.title}</h2>
      <p>{display.author ? display.author : "Anonymous"}</p>
      <button onClick={() => onClick(displayRandom)}>Get Random Quote</button>
    </div>
  );
};

export default GetRandom;
