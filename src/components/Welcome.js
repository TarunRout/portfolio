import { useEffect, useState } from "react";

import "./Welcome.css";

export default function Welcome() {
  const [redirect, setRedirect] = useState(false);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const greetings = [
    "Hello",
    "नमस्ते",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Hallo",
    // "",
  ];

  console.log(currentGreetingIndex, "curent");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(greetings[currentGreetingIndex]);

      if (currentGreetingIndex === 6) {
        console.log("HIHIHIHHI");
      }

      setCurrentGreetingIndex((prevIndex) =>
        prevIndex === greetings.length - 1 ? prevIndex : prevIndex + 1
      );

      if (currentGreetingIndex === greetings.length - 1) {
        clearInterval(interval);
        // setTimeout(() => {
        //   setRedirect(true);
        //   console.log("moved to homepage trigered");
        // }, 300);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentGreetingIndex, greetings]);

  return (
    <div className="greet-container">
      <h1
        className={`greetings ${currentGreetingIndex === 7 ? "last-one" : ""}`}
      >
        {greetings[currentGreetingIndex]}
      </h1>
    </div>
  );
}
