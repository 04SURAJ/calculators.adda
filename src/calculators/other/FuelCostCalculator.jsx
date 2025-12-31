import { useState } from "react";


function FuelCostCalculator() {

  const [distance, setDistance] = useState("");
  const [fuelEfficiency, setFuelEfficiency] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [unit, setUnit] = useState("mpg"); // mpg or lper100
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateCost = () => {
    const dist = parseFloat(distance);
    const eff = parseFloat(fuelEfficiency);
    const price = parseFloat(fuelPrice);

    if (isNaN(dist) || dist <= 0 || isNaN(eff) || eff <= 0 || isNaN(price) || price <= 0) {
      setError("Please enter valid positive numbers for all fields.");
      setResult(null);
      return;
    }

    setError("");

    let fuelUsed;

    if (unit === "mpg") {
      fuelUsed = dist / eff; // miles / miles-per-gallon = gallons
    } else {
      // L/100km
      fuelUsed = (dist * eff) / 100; // distance in km * liters/100km /100 = liters
    }

    const cost = (fuelUsed * price).toFixed(2);

    setResult(cost);
  };

  const resetCalculator = () => {
    setDistance("");
    setFuelEfficiency("");
    setFuelPrice("");
    setResult(null);
    setError("");
  };

  return (
  

     
  <>
 {/* Units */}
      <div className="mb-3">
        <label className="form-label">Select Units</label>
        <select
          className="form-select"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="mpg">Miles + MPG + $/gallon</option>
          <option value="lper100">Kilometers + L/100km + $/liter</option>
        </select>
      </div>

      {/* Inputs */}
      <div className="row g-2 mb-3">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder={unit === "mpg" ? "Distance (miles)" : "Distance (km)"}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder={unit === "mpg" ? "Fuel Efficiency (MPG)" : "Fuel Efficiency (L/100km)"}
            value={fuelEfficiency}
            onChange={(e) => setFuelEfficiency(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder={unit === "mpg" ? "Fuel Price $/gallon" : "Fuel Price $/liter"}
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={calculateCost}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Estimated Fuel Cost:</strong> ${result}
        </div>
      )}     
</>
);
}

export default FuelCostCalculator;
