import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function RoofingCalculator() {
  const seo = calculatorsSeo["roofing-calculator"];

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
   

  
 <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
    <div className="row g-2 mb-3">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder={`Length (${unit})`}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder={`Width (${unit})`}
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Pitch (rise/run)"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
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
          <option value="m">Meters</option>
          <option value="ft">Feet</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateRoofArea}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Roof Area:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default RoofingCalculator;
