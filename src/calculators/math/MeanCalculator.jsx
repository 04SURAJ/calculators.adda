import { useState } from "react";

export default function MeanCalculator() {
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
    if (values.length <= 2) return;
    setValues(values.filter((_, i) => i !== index));
  };

  const calculateMean = () => {
    setError("");
    setResult(null);

    const validValues = values
      .map(v => parseFloat(v))
      .filter(v => !isNaN(v));

    if (validValues.length < 2) {
      setError("Please enter at least two valid values.");
      return;
    }

    const sum = validValues.reduce((a, b) => a + b, 0);
    const mean = sum / validValues.length;

    setResult({
      count: validValues.length,
      sum,
      mean
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

      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculateMean}
        >
          Calculate Mean
        </button>

        <button
          className="btn btn-outline-secondary btn-lg w-100"
          onClick={resetCalculator}
        >
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
              <strong>Sum:</strong> {result.sum}
            </li>
            <li className="list-group-item">
              <strong>Mean (Average):</strong> {result.mean}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
