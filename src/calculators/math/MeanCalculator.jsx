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
    setValues(values.filter((_, i) => i !== index));
  };

  const calculateMedian = () => {
    setError("");
    setResult(null);

    const validValues = values
      .map(v => parseFloat(v))
      .filter(v => !isNaN(v));

    if (validValues.length < 2) {
      setError("Please enter at least two valid values.");
      return;
    }

    const sorted = [...validValues].sort((a, b) => a - b);
    const n = sorted.length;

    let median;
    if (n % 2 === 1) {
      median = sorted[Math.floor(n / 2)];
    } else {
      median = (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    }

    setResult({
      count: n,
      sorted,
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
        <div key={index} className="mb-2">

          <label className="form-label fw-semibold">
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
                className="btn btn-outline-danger"
                onClick={() => removeField(index)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}

      <button className="btn btn-outline-primary mb-3" onClick={addField}>
        Add Value
      </button>

      {error && <div className="alert alert-danger">{error}</div>}

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
              <strong>Sorted Values:</strong> {result.sorted.join(", ")}
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
