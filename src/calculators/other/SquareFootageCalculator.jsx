import { useState } from "react";


function SquareFootageCalculator() {
  

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [unit, setUnit] = useState("ft"); // ft or m
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateArea = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (isNaN(l) || l <= 0 || isNaN(w) || w <= 0) {
      setError("Please enter valid positive numbers for length and width.");
      setResult(null);
      return;
    }

    setError("");

    let area;
    if (unit === "ft") {
      area = l * w; // square feet
      setResult(`${area.toFixed(2)} sq ft`);
    } else {
      // meters to sq meters then convert to sq ft
      area = l * w;
      const areaInFt = area * 10.7639; // 1 m² = 10.7639 ft²
      setResult(`${area.toFixed(2)} m² (${areaInFt.toFixed(2)} sq ft)`);
    }
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setResult(null);
    setError("");
  };

  return (

<>

      <div className="row g-2 mb-3">
  {/* Length */}
  <div className="col-md-6">
    <label className="form-label fw-semibold">
      {unit === "ft" ? "Length (Feet)" : "Length (Meters)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={unit === "ft" ? "Enter length in ft" : "Enter length in meters"}
      value={length}
      onChange={(e) => setLength(e.target.value)}
    />
  </div>

  {/* Width */}
  <div className="col-md-6">
    <label className="form-label fw-semibold">
      {unit === "ft" ? "Width (Feet)" : "Width (Meters)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={unit === "ft" ? "Enter width in ft" : "Enter width in meters"}
      value={width}
      onChange={(e) => setWidth(e.target.value)}
    />
  </div>
</div>

{/* Unit Selector */}
<div className="mb-3">
  <label className="form-label fw-semibold">Select Unit</label>
  <select
    className="form-select"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="ft">Feet</option>
    <option value="m">Meters</option>
  </select>
</div>

      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateArea}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Area:</strong> {result}
        </div>
      )}     
    </> 
     );
}

export default SquareFootageCalculator;
