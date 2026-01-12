import { useState } from "react";


function WindChillCalculator() {


  const [temperature, setTemperature] = useState(""); // in Celsius or Fahrenheit
  const [windSpeed, setWindSpeed] = useState(""); // in km/h or mph
  const [unit, setUnit] = useState("metric"); // metric or imperial
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateWindChill = () => {
    const temp = parseFloat(temperature);
    const speed = parseFloat(windSpeed);

    if (isNaN(temp) || isNaN(speed) || speed < 0) {
      setError("Please enter valid numbers for temperature and wind speed.");
      setResult(null);
      return;
    }

    setError("");

    let windChill;

    if (unit === "metric") {
      // Metric: temp in °C, speed in km/h
      if (speed < 4.8) {
        windChill = temp;
      } else {
        windChill =
          13.12 +
          0.6215 * temp -
          11.37 * Math.pow(speed, 0.16) +
          0.3965 * temp * Math.pow(speed, 0.16);
      }
      windChill = windChill.toFixed(2) + " °C";
    } else {
      // Imperial: temp in °F, speed in mph
      if (speed < 3) {
        windChill = temp;
      } else {
        windChill =
          35.74 +
          0.6215 * temp -
          35.75 * Math.pow(speed, 0.16) +
          0.4275 * temp * Math.pow(speed, 0.16);
      }
      windChill = windChill.toFixed(2) + " °F";
    }

    setResult(windChill);
  };

  const resetCalculator = () => {
    setTemperature("");
    setWindSpeed("");
    setResult(null);
    setError("");
  };

  return (
   

      
<>
<div className="row g-2 mb-3">
  <div className="col-md-6">
    <label htmlFor="temperatureInput" className="form-label fw-semibold">
      Temperature ({unit === "metric" ? "°C" : "°F"})
    </label>
    <input
      id="temperatureInput"
      type="number"
      className="form-control"
      placeholder={`Temperature (${unit === "metric" ? "°C" : "°F"})`}
      value={temperature}
      onChange={(e) => setTemperature(e.target.value)}
    />
  </div>

  <div className="col-md-6">
    <label htmlFor="windSpeedInput" className="form-label fw-semibold">
      Wind Speed ({unit === "metric" ? "km/h" : "mph"})
    </label>
    <input
      id="windSpeedInput"
      type="number"
      className="form-control"
      placeholder={`Wind Speed (${unit === "metric" ? "km/h" : "mph"})`}
      value={windSpeed}
      onChange={(e) => setWindSpeed(e.target.value)}
    />
  </div>
</div>

<div className="mb-3">
  <label htmlFor="unitSelect" className="form-label fw-semibold">
    Unit System
  </label>
  <select
    id="unitSelect"
    className="form-select"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="metric">Metric (°C, km/h)</option>
    <option value="imperial">Imperial (°F, mph)</option>
  </select>
</div>

      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateWindChill}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Wind Chill:</strong> {result}
        </div>
      )}     
</>    
  );
}

export default WindChillCalculator;
