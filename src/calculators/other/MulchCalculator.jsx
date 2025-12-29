import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function MulchCalculator() {
  const seo = calculatorsSeo["mulch-calculator"];

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState(""); // in cm or inches
  const [unit, setUnit] = useState("metric"); // metric (m, cm) or imperial (ft, in)
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateMulch = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if ([l, w, d].some((v) => isNaN(v) || v <= 0)) {
      setError("Please enter valid positive numbers for all fields.");
      setResult(null);
      return;
    }

    setError("");

    let volume;
    if (unit === "metric") {
      // convert depth from cm to meters
      volume = l * w * (d / 100); // cubic meters
      setResult(`${volume.toFixed(2)} m³ of mulch`);
    } else {
      // imperial: ft × ft × in → cubic feet
      volume = l * w * (d / 12); // cubic feet
      setResult(`${volume.toFixed(2)} ft³ of mulch`);
    }
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setDepth("");
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
            placeholder={`Length (${unit === "metric" ? "m" : "ft"})`}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder={`Width (${unit === "metric" ? "m" : "ft"})`}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder={`Depth (${unit === "metric" ? "cm" : "in"})`}
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Unit System</label>
        <select
          className="form-select"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="metric">Metric (m, cm)</option>
          <option value="imperial">Imperial (ft, in)</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateMulch}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Mulch Required:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default MulchCalculator;
