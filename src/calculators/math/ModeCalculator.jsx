import { useState } from "react";

export default function ModeCalculator() {
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

  const calculateMode = () => {
    setError("");
    setResult(null);

    const nums = values.map(v => parseFloat(v));
    if (nums.some(v => isNaN(v))) {
      setError("Please fill all fields with valid numbers.");
      return;
    }

    if (nums.length < 2) {
      setError("Please enter at least two values.");
      return;
    }

    // Calculate frequency map
    const freqMap = {};
    nums.forEach(n => {
      freqMap[n] = (freqMap[n] || 0) + 1;
    });

    const maxFreq = Math.max(...Object.values(freqMap));
    const modes = Object.keys(freqMap)
      .filter(k => freqMap[k] === maxFreq)
      .map(Number);

    setResult({
      count: nums.length,
      values: nums,
      modes,
      frequency: maxFreq
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
          <label className="form-label fw-semibold">Value {index + 1}</label>
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
        <button className="btn btn-primary" onClick={calculateMode}>
          Calculate Mode
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
              <strong>Input Values:</strong> {result.values.join(", ")}
            </li>

            <li className="list-group-item">
              <strong>Mode(s):</strong> {result.modes.join(", ")}
            </li>

            <li className="list-group-item">
              <strong>Frequency:</strong> {result.frequency} occurrence(s)
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
