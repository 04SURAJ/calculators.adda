import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function SquareFootageCalculator() {
  const seo = calculatorsSeo["square-footage-calculator"];

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


 <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >

      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder={unit === "ft" ? "Length (ft)" : "Length (m)"}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder={unit === "ft" ? "Width (ft)" : "Width (m)"}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Unit</label>
        <select
          className="form-select"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="ft">Feet</option>
          <option value="m">Meters</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateArea}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Area:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default SquareFootageCalculator;
