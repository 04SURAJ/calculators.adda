import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function GasMileageCalculator() {
  const seo = calculatorsSeo["gas-mileage-calculator"];

  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");
  const [unit, setUnit] = useState("mpg"); // mpg or kmpl
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateMileage = () => {
    const dist = parseFloat(distance);
    const f = parseFloat(fuel);

    if (isNaN(dist) || dist <= 0 || isNaN(f) || f <= 0) {
      setError("Please enter valid positive numbers for distance and fuel.");
      setResult(null);
      return;
    }

    setError("");

    let mileage;
    if (unit === "mpg") {
      mileage = dist / f; // miles per gallon
      setResult(`${mileage.toFixed(2)} MPG`);
    } else {
      mileage = dist / f; // km per liter
      setResult(`${mileage.toFixed(2)} km/L`);
    }
  };

  const resetCalculator = () => {
    setDistance("");
    setFuel("");
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
            placeholder={unit === "mpg" ? "Distance (miles)" : "Distance (km)"}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder={unit === "mpg" ? "Fuel used (gallons)" : "Fuel used (liters)"}
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
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
          <option value="mpg">Miles per Gallon (MPG)</option>
          <option value="kmpl">Kilometers per Liter (km/L)</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={calculateMileage}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Fuel Efficiency:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>
  );
}

export default GasMileageCalculator;
