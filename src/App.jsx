import React, { useState } from "react";
import "./App.css";

const App = () => {
  const changeColor = (theme) => {
    document.querySelector("body").style.backgroundColor = theme;
  };

  let [color, setColor] = useState("white");
  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="button">
        <button
          style={{
            backgroundColor: "blue",
          }}
          onClick={() => changeColor("blue")}
        >
          {" "}
          Blue
        </button>
        <button
          style={{
            backgroundColor: "red",
          }}
          onClick={() => changeColor("red")}
        >
          Red
        </button>
        <button
          style={{
            backgroundColor: "yellow",
          }}
          onClick={() => changeColor("yellow")}
        >
          Yellow
        </button>
        <button
          style={{
            backgroundColor: "grey",
          }}
          onClick={() => changeColor("grey")}
        >
          Grey
        </button>
        <button
          style={{
            backgroundColor: "pink",
          }}
          onClick={() => changeColor("pink")}
        >
          Grey
        </button>
        <button
          style={{
            backgroundColor: "orange",
          }}
          onClick={() => changeColor("orange")}
        >
          Orange
        </button>
        <button
          style={{
            backgroundColor: "purple",
          }}
          onClick={() => changeColor("purple")}
        >
          purple
        </button>
      </div>
    </div>
  );
};

export default App;
