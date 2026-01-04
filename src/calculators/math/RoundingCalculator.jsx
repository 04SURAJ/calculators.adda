import { useState } from "react";

export default function RoundingCalculator() {
  const [value, setValue] = useState("");
  const [method, setMethod] = useState("nearest"); // nearest, floor, ceil, fixed
  const [decimals, setDecimals] = useState(2); // used for fixed decimal
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    const num = parseFloat(value);
    if (isNaN(num)) {
      setError("Please enter a valid number.");
      return;
    }

    let rounded;

    switch (method) {
      case "nearest":
        rounded = Math.round(num);
        break;
      case "floor":
        rounded = Math.floor(num);
        break;
      case "ceil":
        rounded = Math.ceil(num);
        break;
      case "fixed":
        rounded = num.toFixed(decimals);
        break;
      default:
        rounded = num;
    }

    setResult(rounded);
  };

  const resetCalculator = () => {
    setValue("");
    setMethod("nearest");
    setDecimals(2);
    setResult(null);
    setError("");
  };

  return (
    <>
      <h2 className="h5 mb-3">Rounding Calculator</h2>

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

      <div className="mb-3">
        <label className="form-label">Rounding Method</label>
        <select
          className="form-select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="nearest">Nearest Integer</option>
          <option value="floor">Floor (Round Down)</option>
          <option value="ceil">Ceil (Round Up)</option>
          <option value="fixed">Fixed Decimal Places</option>
        </select>
      </div>

      {method === "fixed" && (
        <div className="mb-3">
          <label className="form-label">Decimal Places</label>
          <input
            type="number"
            className="form-control"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
            min={0}
            placeholder="Enter number of decimals"
          />
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculate}>
          Calculate
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
              <strong>Rounded Value:</strong> {result}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
