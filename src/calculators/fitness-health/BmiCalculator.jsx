import { useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric"); // metric | imperial
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setError("Please enter both height and weight.");
      setResult(null);
      return;
    }

    if (weight <= 0 || height <= 0) {
      setError("Height and weight must be positive numbers.");
      setResult(null);
      return;
    }

    setError("");

    let bmi;

    if (unit === "metric") {
      // height in cm → meters
      const heightInMeters = height / 100;
      bmi = weight / (heightInMeters * heightInMeters);
    } else {
      // imperial formula
      bmi = (703 * weight) / (height * height);
    }

    const bmiRounded = bmi.toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult({
      bmi: bmiRounded,
      category,
    });
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setResult(null);
    setError("");
  };

  return (
    <div className="container-fluid px-0">
      {/* Unit Selector */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Unit System</label>
        <select
          className="form-select form-select-lg"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="metric">Metric (kg, cm)</option>
          <option value="imperial">Imperial (lb, inch)</option>
        </select>
      </div>

      {/* Weight */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Weight ({unit === "metric" ? "kg" : "lb"})
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={`Enter weight in ${unit === "metric" ? "kg" : "lb"}`}
        />
      </div>

      {/* Height */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Height ({unit === "metric" ? "cm" : "inch"})
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={`Enter height in ${unit === "metric" ? "cm" : "inch"}`}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

     

    {/* Result */}
{result && (
  <div className="mt-4 mb-4">
    <div className="rounded-3 p-4 shadow-sm bg-success-subtle border border-success">
      <h2 className="h5 fw-bold mb-3 text-center">
        📊 Your BMI Result
      </h2>

      <div className="d-flex flex-column flex-sm-row justify-content-between gap-3">
        <div className="text-center flex-fill">
          <div className="text-muted small">BMI Value</div>
          <div className="fs-3 fw-bold text-success">
            {result.bmi}
          </div>
        </div>

        <div className="text-center flex-fill">
          <div className="text-muted small">Category</div>
          <div className="fs-5 fw-semibold">
            {result.category}
          </div>
        </div>
      </div>
    </div>
  </div>
)}

       {/* Actions */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
        <button
          className="btn btn-outline-secondary btn-lg w-100"
          onClick={resetCalculator}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default BmiCalculator;
