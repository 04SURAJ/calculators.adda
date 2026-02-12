import { useState } from "react";

function CalorieCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateCalories = () => {
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

    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenance = Math.round(bmr * parseFloat(activity));

    setResult({
      bmr: Math.round(bmr),
      maintenance,
      weightLoss: maintenance - 500,
      weightGain: maintenance + 500,
    });
  };

  const resetCalculator = () => {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setActivity("1.2");
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


      {/* Activity Level */}
      <div className="mb-3">
  <label className="form-label fw-semibold">Activity Level</label>

  <div className="row g-2">
    {[
      { label: "Sedentary", value: "1.2", desc: "No exercise" },
      { label: "Light", value: "1.375", desc: "1–3 days/week" },
      { label: "Moderate", value: "1.55", desc: "3–5 days/week" },
      { label: "Very Active", value: "1.725", desc: "6–7 days/week" },
      { label: "Extra Active", value: "1.9", desc: "Physical job" },
    ].map((item) => (
      <div className="col-6 col-md-4" key={item.value}>
        <div
          className={`p-3 border rounded text-center h-100 cursor-pointer ${
            activity === item.value
              ? "border-primary bg-primary-subtle"
              : "bg-white"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setActivity(item.value)}
        >
          <div className="fw-semibold">{item.label}</div>
          <div className="small text-muted">{item.desc}</div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Error */}
      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-4 mb-5">
          <div className="rounded-3 p-4 shadow-sm bg-primary-subtle border border-primary">
            <h2 className="h5 fw-bold mb-4 text-center">
              🔥 Your Daily Calorie Needs
            </h2>

            <div className="row text-center g-3">
              <div className="col-12 col-sm-6">
                <div className="p-3 rounded bg-white border">
                  <div className="text-muted small">
                    Basal Metabolic Rate (BMR)
                  </div>
                  <div className="fs-4 fw-bold text-primary">
                    {result.bmr} kcal
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="p-3 rounded bg-white border">
                  <div className="text-muted small">Maintain Weight</div>
                  <div className="fs-4 fw-bold">
                    {result.maintenance} kcal/day
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="p-3 rounded bg-white border border-success">
                  <div className="text-muted small">Weight Loss</div>
                  <div className="fs-5 fw-bold text-success">
                    {result.weightLoss} kcal/day
                  </div>
                  <div className="small text-muted">
                    (~0.5 kg weight loss / week)
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="p-3 rounded bg-white border border-warning">
                  <div className="text-muted small">Weight Gain</div>
                  <div className="fs-5 fw-bold text-warning">
                    {result.weightGain} kcal/day
                  </div>
                  <div className="small text-muted">
                    (~0.5 kg weight gain / week)
                  </div>
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
  onClick={calculateCalories}
  disabled={!age || !weight || !height}
>
  Calculate Calories
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

export default CalorieCalculator;
