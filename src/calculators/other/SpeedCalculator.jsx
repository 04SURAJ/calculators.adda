import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function SpeedCalculator() {
  const seo = calculatorsSeo["speed-calculator"];

  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [unit, setUnit] = useState("kmh"); // kmh or mph
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateSpeed = () => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (isNaN(d) || d <= 0 || isNaN(t) || t <= 0) {
      setError("Please enter valid positive numbers for distance and time.");
      setResult(null);
      return;
    }

    setError("");

    let speed;
    if (unit === "kmh") {
      speed = d / t; // km/h
      setResult(`${speed.toFixed(2)} km/h`);
    } else {
      speed = d / t; // miles per hour
      setResult(`${speed.toFixed(2)} mph`);
    }
  };

  const resetCalculator = () => {
    setDistance("");
    setTime("");
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
            placeholder={unit === "kmh" ? "Distance (km)" : "Distance (miles)"}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Time (hours)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
          <option value="kmh">Kilometers per hour (km/h)</option>
          <option value="mph">Miles per hour (mph)</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateSpeed}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Speed:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default SpeedCalculator;
