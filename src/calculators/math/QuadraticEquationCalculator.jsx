import { useState, useEffect } from "react";

function QuadraticEquationCalculator() {
  // ===== UI 1 =====
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // ===== UI 2 =====
  const [equation, setEquation] = useState("x² - 5x + 6 = 0");
  const [typedResult, setTypedResult] = useState(null);
  const [typedError, setTypedError] = useState("");

  const solveQuadratic = (A, B, C, setFn) => {
    const D = B * B - 4 * A * C;

    if (D > 0) {
      const x1 = (-B + Math.sqrt(D)) / (2 * A);
      const x2 = (-B - Math.sqrt(D)) / (2 * A);

      setFn({
        type: "two",
        x1,
        x2,
        steps: [
          `Given equation: ${A}x² + ${B}x + ${C} = 0`,
          `D = b² - 4ac = ${D}`,
          `D > 0 → two real roots`,
          `x₁ = ${x1}`,
          `x₂ = ${x2}`,
        ],
      });
      return;
    }

    if (D === 0) {
      const x = -B / (2 * A);
      setFn({
        type: "one",
        x,
        steps: [
          `D = ${D}`,
          `D = 0 → one real root`,
          `x = ${x}`,
        ],
      });
      return;
    }

    setFn({
      type: "none",
      steps: [
        `D = ${D}`,
        `D < 0 → no real roots`,
      ],
    });
  };

  // ===== UI 1 Solver =====
  const calculate = () => {
    setError("");
    setResult(null);

    if (!a || !b || !c) {
      setError("Please enter values for a, b, and c.");
      return;
    }

    const A = Number(a);
    const B = Number(b);
    const C = Number(c);

    if (A === 0) {
      setError("Value of a cannot be 0.");
      return;
    }

    solveQuadratic(A, B, C, setResult);
  };

  // ===== UI 2 Solver =====
  const solveTyped = () => {
    setTypedError("");
    setTypedResult(null);

    try {
      const clean = equation.replace(/\s+/g, "").replace("²", "^2");
      const match = clean.match(/([+-]?\d*)x\^2([+-]?\d*)x([+-]?\d+)=0/);

      if (!match) throw new Error();

      const A = Number(match[1] || 1);
      const B = Number(match[2] || 1);
      const C = Number(match[3]);

      solveQuadratic(A, B, C, setTypedResult);
    } catch {
      setTypedError("Invalid quadratic equation format.");
    }
  };

  const resetAll = () => {
    setA("");
    setB("");
    setC("");
    setResult(null);
    setError("");
    setEquation("x² - 5x + 6 = 0");
    setTypedResult(null);
    setTypedError("");
  };
useEffect(() => {
  solveTyped();
}, []);

  return (
    <>
    
      {/* ========== UI 1 ========== */}
      <div className="card mb-5 shadow-sm">
        <div className="card-body">
          <h2 className="h4 fw-bold mb-3">
            Quadratic Equation Calculator (ax² + bx + c = 0)
          </h2>

          <div className="mb-3">
            <label className="form-label fw-semibold">Value of a</label>
            <input className="form-control form-control-lg" value={a} onChange={(e) => setA(e.target.value)} 
            placeholder="Coefficient of x²"/>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Value of b</label>
            <input className="form-control form-control-lg" value={b} onChange={(e) => setB(e.target.value)} 
            placeholder="Coefficient of x"/>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Value of c</label>
            <input className="form-control form-control-lg" value={c} onChange={(e) => setC(e.target.value)}
            placeholder="Constant term" />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="d-grid d-sm-flex gap-2 mb-3">
            <button className="btn btn-success btn-lg w-100" onClick={calculate}>
              Solve
            </button>
            <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetAll}>
              Reset
            </button>
          </div>

          {result && (
            <ul className="list-group">
              {result.steps.map((s, i) => (
                <li key={i} className="list-group-item">{s}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ========== UI 2 ========== */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h4 fw-bold mb-3">
            Solve Quadratic Equation by Typing
          </h2>

          <div className="mb-3">
            <label className="form-label fw-semibold">Quadratic Equation</label>
            <input
              className="form-control form-control-lg"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
            />
          </div>

          {typedError && <div className="alert alert-danger">{typedError}</div>}

          <div className="d-grid d-sm-flex gap-2 mb-3">
            <button className="btn btn-success btn-lg w-100" onClick={solveTyped}>
              Solve
            </button>
            <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetAll}>
              Reset
            </button>
          </div>

          {typedResult && (
            <ul className="list-group">
              {typedResult.steps.map((s, i) => (
                <li key={i} className="list-group-item">{s}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default QuadraticEquationCalculator;
