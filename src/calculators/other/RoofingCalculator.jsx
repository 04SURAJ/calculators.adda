import { useState } from "react";


function RoofingCalculator() {

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [pitch, setPitch] = useState(""); // roof slope as ratio: rise/run
  const [unit, setUnit] = useState("m"); // meters or feet
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateRoofArea = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const p = parseFloat(pitch);

    if (isNaN(l) || l <= 0 || isNaN(w) || w <= 0 || isNaN(p) || p < 0) {
      setError("Please enter valid positive numbers for all fields.");
      setResult(null);
      return;
    }

    setError("");

    // Roof area = base area * slope factor
    const slopeFactor = Math.sqrt(1 + p * p);
    const area = l * w * slopeFactor;

    setResult(`${area.toFixed(2)} ${unit}²`);
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setPitch("");
    setResult(null);
    setError("");
  };

  return (
   

  
<>
    <div className="row g-2 mb-3">
  <div className="col-md-4">
    <label htmlFor="lengthInput" className="form-label fw-semibold">
      Length ({unit})
    </label>
    <input
      id="lengthInput"
      type="number"
      className="form-control"
      placeholder={`Length (${unit})`}
      value={length}
      onChange={(e) => setLength(e.target.value)}
    />
  </div>

  <div className="col-md-4">
    <label htmlFor="widthInput" className="form-label fw-semibold">
      Width ({unit})
    </label>
    <input
      id="widthInput"
      type="number"
      className="form-control"
      placeholder={`Width (${unit})`}
      value={width}
      onChange={(e) => setWidth(e.target.value)}
    />
  </div>

  <div className="col-md-4">
    <label htmlFor="pitchInput" className="form-label fw-semibold">
      Roof Pitch (rise / run)
    </label>
    <input
      id="pitchInput"
      type="number"
      className="form-control"
      placeholder="Pitch (rise/run)"
      value={pitch}
      onChange={(e) => setPitch(e.target.value)}
    />
  </div>
</div>

<div className="mb-3">
  <label htmlFor="unitSelect" className="form-label fw-semibold">
    Measurement Unit
  </label>
  <select
    id="unitSelect"
    className="form-select"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="m">Meters</option>
    <option value="ft">Feet</option>
  </select>
</div>


      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateRoofArea}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Roof Area:</strong> {result}
        </div>
      )}     
   </>
     );
}

export default RoofingCalculator;
