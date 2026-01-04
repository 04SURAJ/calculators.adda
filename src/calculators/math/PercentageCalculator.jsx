import { useState } from "react";

export default function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculatePercentage = () => {
    setError("");
    if (!value || !percent) {
      setError("Please enter both value and percentage.");
      setResult(null);
      return;
    }

    const res = (parseFloat(value) * parseFloat(percent)) / 100;
    setResult(res);
  };

  const resetCalculator = () => {
    setValue("");
    setPercent("");
    setResult(null);
    setError("");
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Enter Value</label>
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Percentage (%)</label>
        <input
          type="number"
          className="form-control"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
          placeholder="Enter percentage"
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary " 
        
        onClick={calculatePercentage}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary " onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="border-top pt-3">
          <h2 className="h5 mb-3">Result</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>{result}</strong> is {percent}% of {value}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
