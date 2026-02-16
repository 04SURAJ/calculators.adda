import { useState } from "react";

function PregnancyWeightGainCalculator() {
  const [week, setWeek] = useState(20);
  const [twins, setTwins] = useState("no");
  const [height, setHeight] = useState(165);
  const [weightBefore, setWeightBefore] = useState(50);
  const [weightNow, setWeightNow] = useState(55);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    try {
      if (!height || !weightBefore || !weightNow)
        throw "Please fill all fields.";

      const heightM = height / 100;
      const bmi = weightBefore / (heightM * heightM);

      let category = "";
      let totalGainMin = 0;
      let totalGainMax = 0;

      // ---------- BMI CATEGORY + GUIDELINES ----------

      if (twins === "no") {
        if (bmi < 18.5) {
          category = "Underweight";
          totalGainMin = 12.5;
          totalGainMax = 18;
        } else if (bmi < 25) {
          category = "Normal weight";
          totalGainMin = 11.5;
          totalGainMax = 16;
        } else if (bmi < 30) {
          category = "Overweight";
          totalGainMin = 7;
          totalGainMax = 11.5;
        } else {
          category = "Obese";
          totalGainMin = 5;
          totalGainMax = 9;
        }
      } else {
        // Twins guideline
        if (bmi < 18.5) {
          category = "Underweight";
          totalGainMin = 22;
          totalGainMax = 28;
        } else if (bmi < 25) {
          category = "Normal weight";
          totalGainMin = 17;
          totalGainMax = 25;
        } else if (bmi < 30) {
          category = "Overweight";
          totalGainMin = 14;
          totalGainMax = 23;
        } else {
          category = "Obese";
          totalGainMin = 11;
          totalGainMax = 19;
        }
      }

      // ---------- WEEK BASED CALCULATION ----------

      // Assume linear gain after 1st trimester
      const progress = week / 40;

      const currentMin =
        weightBefore + totalGainMin * progress;
      const currentMax =
        weightBefore + totalGainMax * progress;

      const deliveryMin = weightBefore + totalGainMin;
      const deliveryMax = weightBefore + totalGainMax;

      let weightStatus = "";

      if (weightNow < currentMin)
        weightStatus = "below";
      else if (weightNow > currentMax)
        weightStatus = "above";
      else
        weightStatus = "in";

      setResult({
        bmi: bmi.toFixed(1),
        category,
        currentMin: currentMin.toFixed(1),
        currentMax: currentMax.toFixed(1),
        deliveryMin: deliveryMin.toFixed(1),
        deliveryMax: deliveryMax.toFixed(1),
        weightStatus
      });

    } catch (err) {
      setError(err);
    }
  };

  const resetCalculator = () => {
    setWeek(20);
    setTwins("no");
    setHeight(165);
    setWeightBefore(50);
    setWeightNow(55);
    setResult(null);
    setError("");
  };

  return (
    <div className="container-fluid px-0">

      {/* Week Dropdown */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label className="fw-semibold mb-0 text-nowrap" style={{ width: "300px" }}>
          Your Current Pregnancy Stage
        </label>
        <select
          className="form-select form-select-lg w-25 "
          value={week}
          onChange={(e) => setWeek(Number(e.target.value))} 
        >
          {[...Array(40)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              Week {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Twins */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label className="fw-semibold mb-0 text-nowrap " style={{ width: "300px" }}>
          Pregnant with Twins
        </label>
        <select
          className="form-select form-select-lg w-25"
          value={twins}
          onChange={(e) => setTwins(e.target.value)}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {/* Height */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label className="fw-semibold mb-0 text-nowrap" style={{ width: "300px" }}>
          Your Height (cm)
        </label>
        <input
          type="number"
          className="form-control form-control-lg w-25"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>

      {/* Weight Before */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label className="fw-semibold mb-0 text-nowrap" style={{ width: "300px" }}>
          Your Weight Before Pregnancy (kg)
        </label>
        <input
          type="number"
          className="form-control form-control-lg w-25"
          value={weightBefore}
          onChange={(e) => setWeightBefore(Number(e.target.value))}
        />
      </div>

      {/* Weight Now */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label className="fw-semibold mb-0 text-nowrap" style={{ width: "300px" }}>
          Your Weight Now (kg)
        </label>
        <input
          type="number"
          className="form-control form-control-lg w-25"
          value={weightNow}
          onChange={(e) => setWeightNow(Number(e.target.value))}
        />
      </div>

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4 mb-4 rounded-3 p-4 shadow-sm bg-success-subtle border border-success text-center">
          <h5 className="fw-bold mb-3">Result</h5>

          <p>
            <strong>
              Recommended weight range for week #{week}:
            </strong>{" "}
            {result.currentMin} - {result.currentMax} kgs.
            {" "}Your current weight is {result.weightStatus} this range.
          </p>

          <p className="mt-3">
            <strong>
              Recommended weight range when delivering (40th week):
            </strong>{" "}
            {result.deliveryMin} - {result.deliveryMax} kgs.
          </p>

          <p className="mt-3">
            <strong>
              Your BMI before pregnancy:
            </strong>{" "}
            {result.bmi} kg/m2 ({result.category})
          </p>
        </div>
      )}

      <div className="d-grid d-sm-flex gap-2 mt-3 mb-4">
        <button
          className="btn btn-success btn-lg w-100"
          onClick={calculate}
        >
          Calculate
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

export default PregnancyWeightGainCalculator;
