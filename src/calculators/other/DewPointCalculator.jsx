import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function DewPointCalculator() {
  const seo = calculatorsSeo["dew-point-calculator"];

  const [temperature, setTemperature] = useState(""); // in °C or °F
  const [humidity, setHumidity] = useState(""); // in %
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDewPoint = () => {
    let T = parseFloat(temperature);
    const RH = parseFloat(humidity);

    if (isNaN(T) || isNaN(RH) || RH <= 0 || RH > 100) {
      setError("Please enter valid temperature and humidity values (0–100%).");
      setResult(null);
      return;
    }

    setError("");

    // Convert °F to °C if needed
    if (unit === "imperial") {
      T = (T - 32) * 5 / 9;
    }

    // Magnus formula for dew point
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * T) / (b + T)) + Math.log(RH / 100);
    let dewPoint = (b * alpha) / (a - alpha);

    // Convert back to °F if imperial
    if (unit === "imperial") {
      dewPoint = dewPoint * 9/5 + 32;
      dewPoint = dewPoint.toFixed(2) + " °F";
    } else {
      dewPoint = dewPoint.toFixed(2) + " °C";
    }

    setResult(dewPoint);
  };

  const resetCalculator = () => {
    setTemperature("");
    setHumidity("");
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
            placeholder={`Temperature (${unit === "metric" ? "°C" : "°F"})`}
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Relative Humidity (%)"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
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
          <option value="metric">Metric (°C)</option>
          <option value="imperial">Imperial (°F)</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateDewPoint}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Dew Point:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default DewPointCalculator;
