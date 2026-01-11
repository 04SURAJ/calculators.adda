import { useState } from "react";


function DensityCalculator() {

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
    
<>
<div className="row g-2 mb-3">
  {/* Mass Input */}
  <div className="col-md-6">
    <label className="form-label fw-semibold">
      {unit === "metric" ? "Mass (kg)" : "Mass (lbs)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={unit === "metric" ? "Enter mass in kg" : "Enter mass in lbs"}
      value={mass}
      onChange={(e) => setMass(e.target.value)}
    />
  </div>

  {/* Volume Input */}
  <div className="col-md-6">
    <label className="form-label fw-semibold">
      {unit === "metric" ? "Volume (m³)" : "Volume (ft³)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={unit === "metric" ? "Enter volume in m³" : "Enter volume in ft³"}
      value={volume}
      onChange={(e) => setVolume(e.target.value)}
    />
  </div>
</div>

{/* Unit Selector */}
<div className="mb-3">
  <label className="form-label fw-semibold">Select Unit System</label>
  <select
    className="form-select"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="metric">Metric (kg/m³)</option>
    <option value="imperial">Imperial (lbs/ft³)</option>
  </select>
</div>


      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateDensity}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Density:</strong> {result}
        </div>
      )}     
</>    
      );
}

export default DensityCalculator;
