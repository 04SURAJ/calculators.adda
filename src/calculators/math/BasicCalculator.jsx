import { useState, useRef, useEffect } from "react";

const buttons = [
  ["C", "+/-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".","*", "="],
];

export default function BasicCalculator() {
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("0");
  const displayRef = useRef();

  useEffect(() => {
    const element = displayRef.current;
    if (!element) return;
    const parentWidth = element.offsetWidth;
    const textWidth = element.scrollWidth;
    element.style.fontSize =
      textWidth > parentWidth ? `${parentWidth / (textWidth / 2)}px` : "2rem";
  }, [display]);

  const handleClick = (btn) => {
    if (btn === "C") {
      setExpression("");
      setDisplay("0");
      return;
    }

    if (btn === "+/-") {
      if (expression) {
        const parts = expression.match(/([^\d.]|\d+\.?\d*)/g) || [];
        if (parts.length === 0) return;
        let last = parts.pop();
        if (!isNaN(last)) last = String(-parseFloat(last));
        parts.push(last);
        const newExp = parts.join("");
        setExpression(newExp);
        setDisplay(newExp);
      }
      return;
    }

    if (btn === "%") {
      try {
        const value = eval(expression.replace(/×/g, "*").replace(/÷/g, "/"));
        const percent = value / 100;
        setExpression(String(percent));
        setDisplay(String(percent));
      } catch {
        setDisplay("Error");
      }
      return;
    }

    if (btn === "=") {
      try {
        const result = eval(
          expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-")
        );
        setExpression(String(result));
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
        setExpression("");
      }
      return;
    }

    if (["×", "÷", "−", "+"].includes(btn)) {
      if (expression === "" || /[+\-×÷−]$/.test(expression)) return;
    }

    setExpression((prev) => prev + btn);
    setDisplay((prev) => (prev === "0" ? btn : prev + btn));
  };

  return (
   <div
  className="card mx-auto"
  style={{
    width: 300,          // <-- fixed width
    maxWidth: "100%",
    padding: "0.3rem",
    borderRadius: "20px",
    background: "#222",
    color: "white",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
  }}
>


      <div
        ref={displayRef}
        className="text-end p-3 mb-3"
        style={{
          fontSize: "2rem",
          borderRadius: "10px",
          minHeight: "50px",
          overflowX: "auto",
          wordWrap: "break-word",
          fontFamily: "monospace",
          background: "#111",
        }}
      >
        {display}
      </div>

      {buttons.map((row, i) => (
        <div className="d-flex mb-1" key={i}>
          {row.map((btn, j) => (
            <button
              key={j}
              className={`flex-fill m-1 btn ${
                ["C", "+/-", "%"].includes(btn)
                  ? "btn-secondary"
                  : ["÷", "×", "−", "+", "="].includes(btn)
                  ? "btn-warning text-dark"
                  : "btn-light text-dark"
              }`}
              style={{
                height: 42,
                fontSize: "1.3rem",
                borderRadius: "50%",
                flex: btn === "0" ? 2 : 1,
              }}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
