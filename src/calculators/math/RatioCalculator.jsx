import { useState } from "react";

export default function RatioCalculator() {
  const [values, setValues] = useState(["", ""]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleValueChange = (index, newValue) => {
    const updated = [...values];
    updated[index] = newValue;
    setValues(updated);
  };

  // GCD for two values
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // GCD for multiple values
  const gcdMultiple = (nums) =>
    nums.reduce((acc, num) => gcd(acc, num));

  const calculateRatio = () => {
    setError("");
    setResult(null);

    // Validation
    if (values.some(v => v === "")) {
      setError("Please enter all values.");
      return;
    }

    const nums = values.map(v => parseFloat(v));

    if (nums.some(n => isNaN(n))) {
      setError("Only numeric values are allowed.");
      return;
    }

    if (nums.some(n => n === 0)) {
      setError("Values must be greater than zero.");
      return;
    }

    // Calculate simplified ratio
    const commonGcd = gcdMultiple(nums);
    const simplified = nums.map(n => n / commonGcd);

    setResult(simplified);
  };

  const resetCalculator = () => {
    setValues(["", ""]);
    setResult(null);
    setError("");
  };

  const addField = () => {
    if (values.length < 4) setValues([...values, ""]);
  };

  const removeField = (index) => {
    if (values.length > 2) {
      const updated = values.filter((_, i) => i !== index);
      setValues(updated);
    }
  };

  return (
    <>
      <h2 className="h5 mb-3">Enter Values</h2>

      {values.map((val, index) => (
        <div className="mb-3 d-flex gap-2" key={index}>
          <input
            type="number"
            className="form-control"
            value={val}
            onChange={(e) => handleValueChange(index, e.target.value)}
            placeholder={`Value ${index + 1}`}
          />

          {values.length > 2 && (
            <button
              className="btn btn-outline-danger"
              onClick={() => removeField(index)}
            >
              ×
            </button>
          )}
        </div>
      ))}

      {values.length < 4 && (
        <button className="btn btn-outline-secondary mb-3" onClick={addField}>
          + Add Value
        </button>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculateRatio}>
          Calculate
        </button>

        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className="border-top pt-3">
          <h3 className="h6 mb-2">Simplified Ratio</h3>
          <strong>{result.join(" : ")}</strong>
        </div>
      )}
    </>
  );
}
