import { useState } from "react";


function WeightCalculator() {

  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg"); // kg or lbs
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const convertWeight = () => {
    const w = parseFloat(weight);

    if (isNaN(w) || w <= 0) {
      setError("Please enter a valid positive weight.");
      setResult(null);
      return;
    }

    setError("");

    let converted;
    if (unit === "kg") {
      converted = w * 2.20462; // kg → lbs
      setResult(`${w} kg = ${converted.toFixed(2)} lbs`);
    } else {
      converted = w / 2.20462; // lbs → kg
      setResult(`${w} lbs = ${converted.toFixed(2)} kg`);
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setResult(null);
    setError("");
  };

  return (
    

      
<>
<div className="row g-2 mb-3">
  {/* Weight Input */}
  <div className="col-md-6">
    <label className="form-label fw-semibold">Weight ({unit})</label>
    <input
      type="number"
      className="form-control"
      placeholder={`Enter weight in ${unit}`}
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
    />
  </div>

  {/* Unit Selector */}
  <div className="col-md-6">
    <label className="form-label fw-semibold">Select Unit</label>
    <select
      className="form-select"
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
    >
      <option value="kg">Kilograms (kg)</option>
      <option value="lbs">Pounds (lbs)</option>
    </select>
  </div>
</div>


      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={convertWeight}>
          Convert
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Result:</strong> {result}
        </div>
      )}     
</>    
  );
}

export default WeightCalculator;
