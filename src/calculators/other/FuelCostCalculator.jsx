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
     {/* Unit Selector */}
<div className="mb-3">
  <label className="form-label fw-semibold">Select Units</label>
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
    <label className="form-label fw-semibold">
      {unit === "mpg" ? "Distance (Miles)" : "Distance (Kilometers)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={unit === "mpg" ? "Enter distance in miles" : "Enter distance in km"}
      value={distance}
      onChange={(e) => setDistance(e.target.value)}
    />
  </div>

  <div className="col-md-4">
    <label className="form-label fw-semibold">
      {unit === "mpg"
        ? "Fuel Efficiency (MPG)"
        : "Fuel Efficiency (L/100km)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={
        unit === "mpg" ? "Enter MPG" : "Enter L/100km"
      }
      value={fuelEfficiency}
      onChange={(e) => setFuelEfficiency(e.target.value)}
    />
  </div>

  <div className="col-md-4">
    <label className="form-label fw-semibold">
      {unit === "mpg"
        ? "Fuel Price ($ per gallon)"
        : "Fuel Price ($ per liter)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={
        unit === "mpg"
          ? "Enter $/gallon"
          : "Enter $/liter"
      }
      value={fuelPrice}
      onChange={(e) => setFuelPrice(e.target.value)}
    />
  </div>
</div>


      {/* Buttons */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateCost}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
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
