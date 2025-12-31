import { useState } from "react";


function HeatIndexCalculator() {


  const [temperature, setTemperature] = useState(""); // in °C or °F
  const [humidity, setHumidity] = useState(""); // in %
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateHeatIndex = () => {
    const T = parseFloat(temperature);
    const RH = parseFloat(humidity);

    if (isNaN(T) || isNaN(RH) || RH < 0 || RH > 100) {
      setError("Please enter valid temperature and humidity values (0–100%).");
      setResult(null);
      return;
    }

    setError("");

    let heatIndex;

    if (unit === "metric") {
      // Convert Celsius to Fahrenheit for formula
      const Tf = T * 9/5 + 32;
      heatIndex =
        -42.379 +
        2.04901523 * Tf +
        10.14333127 * RH -
        0.22475541 * Tf * RH -
        0.00683783 * Tf * Tf -
        0.05481717 * RH * RH +
        0.00122874 * Tf * Tf * RH +
        0.00085282 * Tf * RH * RH -
        0.00000199 * Tf * Tf * RH * RH;

      // Convert back to Celsius
      heatIndex = ((heatIndex - 32) * 5/9).toFixed(2) + " °C";
    } else {
      // Imperial: °F, % RH
      heatIndex =
        -42.379 +
        2.04901523 * T +
        10.14333127 * RH -
        0.22475541 * T * RH -
        0.00683783 * T * T -
        0.05481717 * RH * RH +
        0.00122874 * T * T * RH +
        0.00085282 * T * RH * RH -
        0.00000199 * T * T * RH * RH;

      heatIndex = heatIndex.toFixed(2) + " °F";
    }

    setResult(heatIndex);
  };

  const resetCalculator = () => {
    setTemperature("");
    setHumidity("");
    setResult(null);
    setError("");
  };

  return (
  

     
<>
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
        <button className="btn btn-primary" onClick={calculateHeatIndex}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Heat Index:</strong> {result}
        </div>
      )}     
   </>
   
  );
}

export default HeatIndexCalculator;
