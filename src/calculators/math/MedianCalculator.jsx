import { useState } from "react";

export default function MedianCalculator() {
  const [values, setValues] = useState(["", ""]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const addField = () => {
    setValues([...values, ""]);
  };

  const removeField = (index) => {
    if (values.length <= 2) return; // minimum 2 fields
    const updated = values.filter((_, i) => i !== index);
    setValues(updated);
  };

  const calculateMedian = () => {
    setError("");
    setResult(null);

    const nums = values
      .map(v => parseFloat(v))
      .filter(v => !isNaN(v));

    if (nums.length < 2) {
      setError("Please enter at least two valid numeric values.");
      return;
    }

    const sorted = [...nums].sort((a, b) => a - b);
    const n = sorted.length;
    const mid = Math.floor(n / 2);

    let median =
      n % 2 === 1
        ? sorted[mid]
        : (sorted[mid - 1] + sorted[mid]) / 2;

    setResult({
      count: n,
      sortedValues: sorted,
      median
    });
  };

  const resetCalculator = () => {
    setValues(["", ""]);
    setResult(null);
    setError("");
  };

  return (
    <>
      <h2 className="h5 mb-3">Enter Values</h2>

      {values.map((val, index) => (
        <div key={index} className="mb-3">
          <label className="form-label">
            Value {index + 1}
          </label>

          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control"
              value={val}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Enter value ${index + 1}`}
            />

            {values.length > 2 && (
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeField(index)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}

      <button
        className="btn btn-outline-primary mb-3"
        onClick={addField}
        type="button"
      >
        Add Value
      </button>

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculateMedian}>
          Calculate Median
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
              <strong>Total Values:</strong> {result.count}
            </li>

            <li className="list-group-item">
              <strong>Sorted Values:</strong> {result.sortedValues.join(", ")}
            </li>

            <li className="list-group-item">
              <strong>Median:</strong> {result.median}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
