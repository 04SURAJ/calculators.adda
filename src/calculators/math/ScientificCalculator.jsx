import { useEffect, useState } from "react";

export default function ScientificCalculator() {
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
  if (n === 0 || n === 1) return 1;
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
      const res = eval(exp);
      setInput(String(res));
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

  /* ---------- Styles ---------- */
  const btn = {
    height: 34,
    borderRadius: 8,
    border: "1px solid #8aa4bf",
    background: "#cddded",
    fontWeight: "bold",
  };

  const whiteBtn = {
    ...btn,
    background: "#fff",
  };

  const displayStyle = {
    background: "#2f5f8f",
    color: "#fff",
    fontSize: 32,
    textAlign: "right",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  };

  /* ---------- UI ---------- */
  return (
    <div style={{ minHeight: "60vh",   display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: 350 }}>
        <div style={displayStyle}>{input}</div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6 }}>
          {/* Row 1 */}
          <button style={btn} onClick={() => append("sin(")}>sin</button>
          <button style={btn} onClick={() => append("cos(")}>cos</button>
          <button style={btn} onClick={() => append("tan(")}>tan</button>
          <div style={{ gridColumn: "span 2", display: "flex", gap: 10, alignItems: "center" }}>
            <label><input type="radio" checked={deg} onChange={() => setDeg(true)} /> Deg</label>
            <label><input type="radio" checked={!deg} onChange={() => setDeg(false)} /> Rad</label>
          </div>

          {/* Row 2 */}
          <button style={btn} onClick={() => append("asin(")}>sin⁻¹</button>
          <button style={btn} onClick={() => append("acos(")}>cos⁻¹</button>
          <button style={btn} onClick={() => append("atan(")}>tan⁻¹</button>
          <button style={btn} onClick={() => append("π")}>π</button>
          <button style={btn} onClick={() => append("e")}>e</button>

          {/* Row 3 */}
          <button style={btn} onClick={() => append("^")}>xʸ</button>
          <button style={btn} onClick={() => append("^3")}>x³</button>
          <button style={btn} onClick={() => append("^2")}>x²</button>
          <button style={btn} onClick={() => append("Math.E**")}>eˣ</button>
          <button style={btn} onClick={() => append("10**")}>10ˣ</button>

          {/* Row 4 */}
          <button style={btn} onClick={() => append("^(1/")}>ʸ√x</button>
          <button style={btn} onClick={() => append("3√(")}>³√x</button>
          <button style={btn} onClick={() => append("√(")}>√x</button>
          <button style={btn} onClick={() => append("ln(")}>ln</button>
          <button style={btn} onClick={() => append("log(")}>log</button>

          {/* Row 5 */}
          <button style={btn} onClick={() => append("(")}>(</button>
          <button style={btn} onClick={() => append(")")}> )</button>
          <button style={btn} onClick={() => append("1/(")}>1/x</button>
          <button style={btn} onClick={() => append("%")}>%</button>
          <button style={btn} onClick={() => append("!")}>n!</button>

          {/* Numbers */}
          {["7","8","9","+","Back",
            "4","5","6","-","Ans",
            "1","2","3","*","M+",
            "0",".","EXP","/","M-"].map((b, i) => (
            <button
              key={i}
              style={b.match(/[+\-*/]/) ? whiteBtn : btn}
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

          {/* Last Row */}
          <button style={whiteBtn} onClick={() => append("-")}>±</button>
          <button style={whiteBtn} onClick={() => append(Math.random().toFixed(2))}>RND</button>
          <button style={btn} onClick={clearAll}>AC</button>
          <button style={btn} onClick={evaluate}>=</button>
          <button style={whiteBtn} onClick={() => setInput(String(memory))}>MR</button>
        </div>
      </div>
    </div>
  );
}
