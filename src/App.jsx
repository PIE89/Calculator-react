import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState("0");

  const handleClick = (value) => {
    if (!Number.isNaN(+value)) {
      setCount((prev) => (prev === "0" ? value : prev + value));
    } else {
      if (count !== "0") {
        setCount((prev) => prev + value);
      }

      if (value === "=") {
        try {
          let result = Function('"use strict";return (' + count + ")")();

          let pointLength = result.toString().includes(".")
            ? result.toString().split(".").pop().length
            : 0;

          if (pointLength > 2) {
            result = result.toFixed(2); // округление до 2 чисел после запятой
          }

          setCount(result);
        } catch {
          setCount("Ошибка");
        }
      }
    }
  };

  return (
    <div className="calculator">
      <input type="text" name="result" id="result" value={count} />
      <button type="button" onClick={() => handleClick("7")}>
        7
      </button>
      <button type="button" onClick={() => handleClick("8")}>
        8
      </button>
      <button type="button" onClick={() => handleClick("9")}>
        9
      </button>
      <button type="button" onClick={() => handleClick("/")}>
        /
      </button>
      <button type="button" onClick={() => handleClick("4")}>
        4
      </button>
      <button type="button" onClick={() => handleClick("5")}>
        5
      </button>
      <button type="button" onClick={() => handleClick("6")}>
        6
      </button>
      <button type="button" onClick={() => handleClick("*")}>
        *
      </button>
      <button type="button" onClick={() => handleClick("1")}>
        1
      </button>
      <button type="button" onClick={() => handleClick("2")}>
        2
      </button>
      <button type="button" onClick={() => handleClick("3")}>
        3
      </button>
      <button type="button" onClick={() => handleClick("-")}>
        -
      </button>
      <button type="button" onClick={() => handleClick("0")}>
        0
      </button>
      <button type="button" onClick={() => handleClick(".")}>
        .
      </button>
      <button type="button" onClick={() => handleClick("=")}>
        =
      </button>
      <button type="button" onClick={() => handleClick("+")}>
        +
      </button>
      <button type="button" onClick={() => setCount("0")}>
        C
      </button>
    </div>
  );
};

export default App;
