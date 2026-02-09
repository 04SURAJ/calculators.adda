import { useState } from "react";

function LinearEquationCalculator() {
  // ===== UI 1: ax + b = 0 =====
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // ===== UI 2: Typed equations =====
  const [equation1, setEquation1] = useState("");
  const [equation2, setEquation2] = useState("");
  const [eqResult, setEqResult] = useState(null);
  const [eqError, setEqError] = useState("");

  // ===== Solver 1 =====
  const solveEquation = () => {
    setError("");
    setResult(null);

    if (a === "" || b === "") {
      setError("Please enter values for both a and b.");
      return;
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setError("Please enter valid numbers.");
      return;
    }

    if (numA === 0 && numB === 0) {
      setResult({ type: "infinite" });
      return;
    }

    if (numA === 0) {
      setResult({ type: "none" });
      return;
    }

    const x = -numB / numA;
    setResult({ type: "single", value: x });
  };

  const resetEquation = () => {
    setA("");
    setB("");
    setResult(null);
    setError("");
  };

  // ===== Solver 2 =====
  const parseEquation = (eq) => {
    const clean = eq.replace(/\s+/g, "");
    const [left, right] = clean.split("=");

    if (!right) throw new Error();

    const xMatch = left.match(/([+-]?\d*)x/);
    const yMatch = left.match(/([+-]?\d*)y/);

    const a = xMatch ? Number(xMatch[1] || 1) : 0;
    const b = yMatch ? Number(yMatch[1] || 1) : 0;

    return { a, b, c: Number(right) };
  };

  const solveTypedEquations = () => {
    setEqError("");
    setEqResult(null);

    if (!equation1) {
      setEqError("Please enter an equation.");
      return;
    }

    try {
      if (!equation2) {
        const { a, b, c } = parseEquation(equation1);
        if (a === 0) throw new Error();
        setEqResult({ x: (c - b) / a });
        return;
      }

      const e1 = parseEquation(equation1);
      const e2 = parseEquation(equation2);

      const det = e1.a * e2.b - e2.a * e1.b;
      if (det === 0) throw new Error();

      const x = (e1.c * e2.b - e2.c * e1.b) / det;
      const y = (e1.a * e2.c - e2.a * e1.c) / det;

      setEqResult({ x, y });
    } catch {
      setEqError("Invalid equation format.");
    }
  };

  const resetTypedEquations = () => {
    setEquation1("");
    setEquation2("");
    setEqResult(null);
    setEqError("");
  };

  return (
    
    <>

      {/* ================= UI 1 ================= */}
      <div className="card mb-5 shadow-sm">
        <div className="card-body">
        <h2 className="h4 fw-bold mb-3">
          Linear Equation Solver (ax + b = 0)
        </h2>

        <div className="mb-3">
          <label className="form-label fw-semibold">Value of a</label>
          <input
            type="number"
            className="form-control form-control-lg"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Value of b</label>
          <input
            type="number"
            className="form-control form-control-lg"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
 {result && (
          <div className="alert alert-success">
            {result.type === "single" && <strong>x = {result.value}</strong>}
            {result.type === "none" && "No solution exists."}
            {result.type === "infinite" && "Infinite solutions exist."}
          </div>
        )}
        <div className="d-grid d-sm-flex gap-2 mb-3">
          <button className="btn btn-success btn-lg w-100" onClick={solveEquation}>
            Solve
          </button>
          <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetEquation}>
            Reset
          </button>
        </div>

       
      </div>
</div>

      {/* ================= UI 2 ================= */}
      <div className="border-top pt-4">
        <div className="card mb-5 shadow-sm">
        <div className="card-body">
        <h2 className="h4 fw-bold mb-3">
          Solve Linear Equations by Typing
        </h2>

        <div className="mb-3">
          <label className="form-label fw-semibold">Equation 1</label>
          <input
            className="form-control form-control-lg"
            placeholder="e.g. 2x + y = 5"
            value={equation1}
            onChange={(e) => setEquation1(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Equation 2 (optional)
          </label>
          <input
            className="form-control form-control-lg"
            placeholder="e.g. x + y = 3"
            value={equation2}
            onChange={(e) => setEquation2(e.target.value)}
          />
        </div>

        {eqError && <div className="alert alert-danger">{eqError}</div>}
{eqResult && (
          <div className="alert alert-success">
            {"x" in eqResult && <div><strong>x = {eqResult.x}</strong></div>}
            {"y" in eqResult && <div><strong>y = {eqResult.y}</strong></div>}
          </div>
        )}
        <div className="d-grid d-sm-flex gap-2 mb-3">
          <button className="btn btn-success btn-lg w-100" onClick={solveTypedEquations}>
            Solve
          </button>
          <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetTypedEquations}>
            Reset
          </button>
        </div>

        
      </div>
      </div>
      </div>
    </>
  );
}

export default LinearEquationCalculator;
