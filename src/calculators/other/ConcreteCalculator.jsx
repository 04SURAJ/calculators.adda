import { useState } from "react";


function ConcreteCalculator() {

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("meters");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateVolume = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);

    if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
      setError("Please enter valid positive numbers for all dimensions.");
      setResult(null);
      return;
    }

    setError("");

    let volume = l * w * h; // default cubic meters

    if (unit === "feet") {
      volume = (volume * 35.3147).toFixed(2); // convert m³ to ft³
    } else {
      volume = volume.toFixed(3);
    }

    setResult(volume);
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setHeight("");
    setResult(null);
    setError("");
  };

  return (
  
      
     <>
{/* Dimensions */}
      <div className="row g-2 mb-3">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>

      {/* Unit Selector */}
      <div className="mb-3">
        <label className="form-label">Output Unit</label>
        <select
          className="form-select"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="meters">Cubic Meters (m³)</option>
          <option value="feet">Cubic Feet (ft³)</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateVolume}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Result */}
      {result && (
        <div className="alert alert-success">
          <strong>Concrete Volume:</strong> {result}{" "}
          {unit === "meters" ? "m³" : "ft³"}
        </div>
      )}     
</>
  );
}

export default ConcreteCalculator;
