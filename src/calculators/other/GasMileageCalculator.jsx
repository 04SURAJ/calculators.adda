import { useState } from "react";


function GasMileageCalculator() {

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
   

   <>
 <div className="row g-2 mb-3">
  {/* Distance Input */}
  <div className="col-md-6">
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

  {/* Fuel Used Input */}
  <div className="col-md-6">
    <label className="form-label fw-semibold">
      {unit === "mpg" ? "Fuel Used (Gallons)" : "Fuel Used (Liters)"}
    </label>
    <input
      type="number"
      className="form-control"
      placeholder={unit === "mpg" ? "Enter fuel used in gallons" : "Enter fuel used in liters"}
      value={fuel}
      onChange={(e) => setFuel(e.target.value)}
    />
  </div>
</div>

{/* Unit Selector */}
<div className="mb-3">
  <label className="form-label fw-semibold">Select Unit</label>
  <select
    className="form-select"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="mpg">Miles per Gallon (MPG)</option>
    <option value="kmpl">Kilometers per Liter (km/L)</option>
  </select>
</div>


      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateMileage}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Fuel Efficiency:</strong> {result}
        </div>
      )}     
  </>
  );
}

export default GasMileageCalculator;
