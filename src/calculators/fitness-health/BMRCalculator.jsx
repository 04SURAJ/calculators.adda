import { useState } from "react";

function BMRCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateBMR = () => {
    if (!age || !weight || !height) {
      setError("Please fill in all required fields.");
      setResult(null);
      return;
    }

    if (age <= 0 || weight <= 0 || height <= 0) {
      setError("All values must be positive numbers.");
      setResult(null);
      return;
    }

    setError("");

    let bmr;

    // Mifflin-St Jeor Equation
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setResult(Math.round(bmr));
  };

  const resetCalculator = () => {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setResult(null);
    setError("");
  };

  return (
    <div className="container-fluid px-0">

      {/* Gender */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Gender</label>
        <select
          className="form-select form-select-lg"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Age */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Age <span className="text-muted">(years)</span>
        </label>

        <div className="d-flex align-items-center gap-3">
          <input
            type="number"
            min="10"
            max="100"
            className="form-control form-control-lg"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />

          <input
            type="range"
            min="10"
            max="100"
            value={age || 25}
            onChange={(e) => setAge(e.target.value)}
            className="form-range"
          />
        </div>
      </div>

      {/* Weight */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Weight <span className="text-muted">(kg)</span>
        </label>

        <div className="d-flex align-items-center gap-3">
          <input
            type="number"
            min="30"
            max="300"
            step="0.1"
            className="form-control form-control-lg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
          />

          <input
            type="range"
            min="30"
            max="200"
            step="0.5"
            value={weight || 70}
            onChange={(e) => setWeight(e.target.value)}
            className="form-range"
          />
        </div>
      </div>

      {/* Height */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Height <span className="text-muted">(cm)</span>
        </label>

        <div className="d-flex align-items-center gap-3">
          <input
            type="number"
            min="120"
            max="230"
            className="form-control form-control-lg"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
          />

          <input
            type="range"
            min="120"
            max="230"
            value={height || 170}
            onChange={(e) => setHeight(e.target.value)}
            className="form-range"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger py-2">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-4 mb-5">
          <div className="rounded-3 p-4 shadow-sm bg-primary-subtle border border-primary text-center">
            <h2 className="h5 fw-bold mb-3">
              🔥 Your Basal Metabolic Rate
            </h2>
            <div className="display-6 fw-bold text-primary">
              {result} kcal/day
            </div>
            <div className="small text-muted mt-2">
              Calories your body burns at complete rest
            </div>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculateBMR}
          disabled={!age || !weight || !height}
        >
          Calculate BMR
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

export default BMRCalculator;
