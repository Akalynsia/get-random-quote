"use client";
import React, { useEffect, useState } from "react";
import FetchQuote from "./FetchQuote";
import GetRandom from "./GetRandom";

const App = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const data = async () => {
      const quote = await FetchQuote();
      setQuote(quote);
    };
    data();
  }, []);
  const handleDisplayRandom = (displayRandom) => {
    displayRandom();
  };
  return (
    <div>
      <GetRandom value={quote} onClick={handleDisplayRandom} />
    </div>
  );
};

export default App;
