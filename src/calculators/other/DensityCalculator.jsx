import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function DensityCalculator() {
  const seo = calculatorsSeo["density-calculator"];

  const [mass, setMass] = useState("");
  const [volume, setVolume] = useState("");
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDensity = () => {
    const m = parseFloat(mass);
    const v = parseFloat(volume);

    if (isNaN(m) || m <= 0 || isNaN(v) || v <= 0) {
      setError("Please enter valid positive numbers for mass and volume.");
      setResult(null);
      return;
    }

    setError("");

    let density;
    if (unit === "metric") {
      // mass in kg, volume in m³
      density = m / v; // kg/m³
      setResult(`${density.toFixed(2)} kg/m³`);
    } else {
      // imperial: mass in lbs, volume in ft³
      density = m / v; // lbs/ft³
      setResult(`${density.toFixed(2)} lbs/ft³`);
    }
  };

  const resetCalculator = () => {
    setMass("");
    setVolume("");
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
            placeholder={unit === "metric" ? "Mass (kg)" : "Mass (lbs)"}
            value={mass}
            onChange={(e) => setMass(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder={unit === "metric" ? "Volume (m³)" : "Volume (ft³)"}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
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
          <option value="metric">Metric (kg/m³)</option>
          <option value="imperial">Imperial (lbs/ft³)</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={calculateDensity}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Density:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>
    
      );
}

export default DensityCalculator;
