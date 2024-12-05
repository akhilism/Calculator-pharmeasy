import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleBtnClick = (btn) => {
    console.log(btn);
    if (btn === "AC") {
      setInput("");
    } else if (btn === "=") {
      try {
        let val = eval(input).toString();
        setInput(val);
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + btn);
    }
  };

  const buttons = [
    ["(", ")", "%", "AC"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <div className="App">
      <div className="calculator">
        <div className="input"> {input || "0"} </div>
        <div className="buttons">
          {buttons.flat().map((btn, id) => (
            <div key={id}>
              <button className="btn" onClick={() => handleBtnClick(btn)}>
                {" "}
                {btn}{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
