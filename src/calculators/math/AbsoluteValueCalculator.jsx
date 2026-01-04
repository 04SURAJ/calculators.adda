import { useState } from "react";

export default function AbsoluteValueCalculator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateAbsolute = () => {
    setError("");
    setResult(null);

    const num = parseFloat(value);
    if (isNaN(num)) {
      setError("Please enter a valid number.");
      return;
    }

    setResult(Math.abs(num));
  };

  const resetCalculator = () => {
    setValue("");
    setResult(null);
    setError("");
  };

  return (
    <>
      <h2 className="h5 mb-3">Absolute Value Calculator</h2>

      <div className="mb-3">
        <label className="form-label">Number</label>
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculateAbsolute}>
          Calculate Absolute Value
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="border-top pt-3">
          <h2 className="h5 mb-3">Result</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Absolute Value:</strong> {result}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
