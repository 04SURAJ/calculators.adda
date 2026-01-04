import { useState } from "react";

export default function AverageCalculator() {
  const [numbers, setNumbers] = useState(["", ""]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    const updated = [...numbers];
    updated[index] = value;
    setNumbers(updated);
  };

  const addField = () => {
    setNumbers([...numbers, ""]);
  };

  const removeField = (index) => {
    if (numbers.length <= 2) return; // minimum 2 fields
    const updated = numbers.filter((_, i) => i !== index);
    setNumbers(updated);
  };

  const calculateAverage = () => {
    setError("");
    setResult(null);

    const validNumbers = numbers
      .map(n => parseFloat(n))
      .filter(n => !isNaN(n));

    if (validNumbers.length < 2) {
      setError("Please enter at least two valid values.");
      return;
    }

    const sum = validNumbers.reduce((a, b) => a + b, 0);
    const avg = sum / validNumbers.length;

    setResult({
      sum,
      count: validNumbers.length,
      average: avg
    });
  };

  const resetCalculator = () => {
    setNumbers(["", ""]);
    setResult(null);
    setError("");
  };

  return (
    <>
      <h2 className="h5 mb-3">Enter Values</h2>

      {numbers.map((num, index) => (
        
        <div className="mb-3 d-flex gap-2" key={index} >
            
          <input
            type="number"
            className="form-control"
            value={num}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Enter value ${index + 1}`}
          />

          {numbers.length > 2 && (
            <button
              className="btn btn-outline-danger"
              onClick={() => removeField(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
       
      
      <button className="btn btn-outline-secondary mb-3" onClick={addField}>
        Add Value
      </button>
       

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculateAverage}>
          Calculate Average
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
              <strong>Sum:</strong> {result.sum}
            </li>
            <li className="list-group-item">
              <strong>Average:</strong> {result.average}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
