import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function TireSizeCalculator() {
  const seo = calculatorsSeo["tire-size-calculator"];

  const [width, setWidth] = useState("");
  const [aspectRatio, setAspectRatio] = useState("");
  const [diameter, setDiameter] = useState("");
  const [unit, setUnit] = useState("metric"); // metric (mm) or imperial (inches)
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateTireDimensions = () => {
    const w = parseFloat(width);
    const ar = parseFloat(aspectRatio);
    const d = parseFloat(diameter);

    if (isNaN(w) || w <= 0 || isNaN(ar) || ar <= 0 || isNaN(d) || d <= 0) {
      setError("Please enter valid positive numbers for all fields.");
      setResult(null);
      return;
    }

    setError("");

    // Overall diameter formula: total diameter = wheel + 2 * sidewall
    // Sidewall height = width * aspectRatio / 100
    let sidewallHeight = (w * ar) / 100; // in mm
    let wheelDiameter = d * 25.4; // convert inches to mm
    let totalDiameter = wheelDiameter + 2 * sidewallHeight; // mm

    if (unit === "imperial") {
      // convert mm to inches
      totalDiameter = totalDiameter / 25.4;
    }

    setResult(totalDiameter.toFixed(2) + (unit === "metric" ? " mm" : " in"));
  };

  const resetCalculator = () => {
    setWidth("");
    setAspectRatio("");
    setDiameter("");
    setResult(null);
    setError("");
  };

  return (
  

     

    <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
 <div className="row g-2 mb-3">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Width (mm)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Aspect Ratio (%)"
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Wheel Diameter (inches)"
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
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
          <option value="metric">Millimeters (mm)</option>
          <option value="imperial">Inches (in)</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateTireDimensions}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Overall Tire Diameter:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default TireSizeCalculator;
