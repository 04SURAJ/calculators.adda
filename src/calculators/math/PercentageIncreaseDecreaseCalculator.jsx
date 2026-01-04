// src/calculators/other/PercentageIncreaseDecreaseCalculator.jsx

import { useState } from "react";

export default function PercentageIncreaseDecreaseCalculator() {
  const [originalValue, setOriginalValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateChange = () => {
    setError("");
    setResult(null);

    if (!originalValue || !newValue) {
      setError("Please enter both original and new values.");
      return;
    }

    const original = parseFloat(originalValue);
    const updated = parseFloat(newValue);

    if (original === 0) {
      setError("Original value cannot be zero.");
      return;
    }

    const difference = updated - original;
    const percentChange = (difference / original) * 100;

    setResult({
      difference: difference.toFixed(2),
      percentChange: percentChange.toFixed(2),
      type: percentChange >= 0 ? "increase" : "decrease",
    });
  };

  const resetCalculator = () => {
    setOriginalValue("");
    setNewValue("");
    setResult(null);
    setError("");
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Original Value</label>
        <input
          type="number"
          className="form-control"
          value={originalValue}
          onChange={(e) => setOriginalValue(e.target.value)}
          placeholder="Enter original value"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">New Value</label>
        <input
          type="number"
          className="form-control"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="Enter new value"
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculateChange}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className="border-top pt-3">
          <h2 className="h5 mb-3">Result</h2>
          <ul className="list-group">
            <li className="list-group-item">
              The value has a <strong>{result.type}</strong> of{" "}
              <strong>{result.difference}</strong>, which is{" "}
              <strong>{result.percentChange}%</strong>.
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
