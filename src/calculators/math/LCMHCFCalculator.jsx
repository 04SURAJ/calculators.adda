import { useState } from "react";

function LCMHCFCalculator() {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  /* ---------- Helpers ---------- */

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return Math.abs(a);
  };

  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

  const calculateLcmHcf = () => {
    if (!numbers.trim()) {
      setError("Please enter at least two numbers.");
      setResult(null);
      return;
    }

    const nums = numbers
      .split(/[\s,]+/)
      .map(Number)
      .filter((n) => !isNaN(n) && n > 0);

    if (nums.length < 2) {
      setError("Enter at least two valid positive numbers.");
      setResult(null);
      return;
    }

    setError("");

    const hcfResult = nums.reduce((a, b) => gcd(a, b));
    const lcmResult = nums.reduce((a, b) => lcm(a, b));

    setResult({
      numbers: nums,
      hcf: hcfResult,
      lcm: lcmResult,
    });
  };

  const resetCalculator = () => {
    setNumbers("");
    setResult(null);
    setError("");
  };

  /* ---------- UI ---------- */

  return (
    <div className="container-fluid px-0">
      {/* Input */}
      <div className="mb-3">
        <label htmlFor="numbers" className="form-label fw-semibold">
          Enter Numbers
        </label>
        <input
          id="numbers"
          type="text"
          className="form-control form-control-lg"
          placeholder="Example: 12, 18, 24"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <small className="text-muted">
          Separate numbers using comma or space
        </small>
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

      {/* Actions */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculateLcmHcf}
        >
          Calculate LCM & HCF
        </button>
        <button
          className="btn btn-outline-secondary btn-lg w-100"
          onClick={resetCalculator}
        >
          Reset
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="border-top pt-3">
          <h2 className="h5 fw-bold mb-3 text-center text-sm-start">
            Calculation Result
          </h2>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Numbers:</strong>{" "}
              {result.numbers.join(", ")}
            </li>

            <li className="list-group-item">
              <strong>HCF (Highest Common Factor):</strong>{" "}
              {result.hcf}
            </li>

            <li className="list-group-item">
              <strong>LCM (Least Common Multiple):</strong>{" "}
              {result.lcm}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LCMHCFCalculator;
