import React, { useState } from "react";
import "../components/calculator.css";

const Calculator = () => {
  const [input, setInput] = useState(""); // Input expression
  const [result, setResult] = useState(""); // Result of the expression

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  return (
    <div>
      {" "}
      <h1> Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
            "C",
          ].map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
