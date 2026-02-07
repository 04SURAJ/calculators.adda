import { useEffect, useState } from "react";


export default function HomeScientificCalculator() {
  const [input, setInput] = useState("0");
  const [memory, setMemory] = useState(0);
  const [deg, setDeg] = useState(true);

  /* ---------- Helpers ---------- */
  const append = (v) => {
    setInput((p) => (p === "0" ? v : p + v));
  };

  const clearAll = () => setInput("0");
  const back = () => setInput((p) => (p.length > 1 ? p.slice(0, -1) : "0"));

  window.factorial = function factorial(n) {
    if (n < 0) return NaN;
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const evaluate = () => {
    try {
      let exp = input
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/sin\(/g, deg ? "Math.sin(Math.PI/180*" : "Math.sin(")
        .replace(/cos\(/g, deg ? "Math.cos(Math.PI/180*" : "Math.cos(")
        .replace(/tan\(/g, deg ? "Math.tan(Math.PI/180*" : "Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/(\d+)!/g, "factorial($1)")
        .replace(/\^/g, "**");

      // eslint-disable-next-line no-eval
      setInput(String(eval(exp)));
    } catch {
      setInput("Error");
    }
  };

  /* ---------- Keyboard ---------- */
  useEffect(() => {
    const k = (e) => {
      if ("0123456789+-*/().".includes(e.key)) append(e.key);
      if (e.key === "Enter") evaluate();
      if (e.key === "Backspace") back();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <div className="sc-wrap">
      <div className="sc-box">
        {/* DISPLAY */}
        <div className="sc-display">{input}</div>

        {/* KEYS */}
        <div className="sc-keys">
          {/* SCIENTIFIC */}
          <div className="sc-left">
            <button onClick={() => append("sin(")}>sin</button>
            <button onClick={() => append("cos(")}>cos</button>
            <button onClick={() => append("tan(")}>tan</button>

            <div className="deg-rad">
              <label>
                <input type="radio" checked={deg} onChange={() => setDeg(true)} /> Deg
              </label>
              <label>
                <input type="radio" checked={!deg} onChange={() => setDeg(false)} /> Rad
              </label>
            </div>

            <button onClick={() => append("asin(")}>sin⁻¹</button>
            <button onClick={() => append("acos(")}>cos⁻¹</button>
            <button onClick={() => append("atan(")}>tan⁻¹</button>
            <button onClick={() => append("π")}>π</button>
            <button onClick={() => append("e")}>e</button>

            <button onClick={() => append("^")}>xʸ</button>
            <button onClick={() => append("^3")}>x³</button>
            <button onClick={() => append("^2")}>x²</button>
            <button onClick={() => append("Math.E**")}>eˣ</button>
            <button onClick={() => append("10**")}>10ˣ</button>

            <button onClick={() => append("^(1/")}>ʸ√x</button>
            <button onClick={() => append("3√(")}>³√x</button>
            <button onClick={() => append("√(")}>√x</button>
            <button onClick={() => append("ln(")}>ln</button>
            <button onClick={() => append("log(")}>log</button>

            <button onClick={() => append("(")}>(</button>
            <button onClick={() => append(")")}> )</button>
            <button onClick={() => append("1/(")}>1/x</button>
            <button onClick={() => append("%")}>%</button>
            <button onClick={() => append("!")}>n!</button>
          </div>

          {/* NUMBERS */}
          <div className="sc-right">
            {["7","8","9","+","Back",
              "4","5","6","-","Ans",
              "1","2","3","*","M+",
              "0",".","EXP","/","M-"].map((b, i) => (
              <button
                key={i}
                onClick={() => {
                  if (b === "Back") back();
                  else if (b === "Ans") append(input);
                  else if (b === "M+") setMemory(memory + Number(input));
                  else if (b === "M-") setMemory(memory - Number(input));
                  else if (b === "EXP") append("e");
                  else append(b);
                }}
              >
                {b}
              </button>
            ))}

            <button onClick={() => append("-")}>±</button>
            <button onClick={() => append(Math.random().toFixed(2))}>RND</button>
            <button onClick={clearAll}>AC</button>
            <button onClick={evaluate}>=</button>
            <button onClick={() => setInput(String(memory))}>MR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
