import { useState } from "react";

function BodyFatCalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateBodyFat = () => {
    if (!height || !neck || !waist || (gender === "female" && !hip)) {
      setError("Please fill in all required fields.");
      setResult(null);
      return;
    }

    if (
      height <= 0 ||
      neck <= 0 ||
      waist <= 0 ||
      (gender === "female" && hip <= 0)
    ) {
      setError("All values must be positive numbers.");
      setResult(null);
      return;
    }

    setError("");

    let bodyFat;

    if (gender === "male") {
      bodyFat =
        86.01 * Math.log10(waist - neck) -
        70.041 * Math.log10(height) +
        36.76;
    } else {
      bodyFat =
        163.205 * Math.log10(waist + hip - neck) -
        97.684 * Math.log10(height) -
        78.387;
    }

    setResult(bodyFat.toFixed(1));
  };

  const resetCalculator = () => {
    setGender("male");
    setHeight("");
    setNeck("");
    setWaist("");
    setHip("");
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

      {/* Height */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Height <span className="text-muted">(cm)</span>
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height"
        />
      </div>

      {/* Neck */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Neck <span className="text-muted">(cm)</span>
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          value={neck}
          onChange={(e) => setNeck(e.target.value)}
          placeholder="Neck circumference"
        />
      </div>

      {/* Waist */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Waist <span className="text-muted">(cm)</span>
        </label>
        <input
          type="number"
          className="form-control form-control-lg"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
          placeholder="Waist circumference"
        />
      </div>

      {/* Hip (Female Only) */}
      {gender === "female" && (
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Hip <span className="text-muted">(cm)</span>
          </label>
          <input
            type="number"
            className="form-control form-control-lg"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            placeholder="Hip circumference"
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="alert alert-danger py-2">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-4 mb-5">
          <div className="rounded-3 p-4 shadow-sm bg-success-subtle border border-success text-center">
            <h2 className="h5 fw-bold mb-3">
              📊 Your Body Fat Percentage
            </h2>
            <div className="display-6 fw-bold text-success">
              {result}%
            </div>
            <div className="small text-muted mt-2">
              Estimated using U.S. Navy Method
            </div>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-success btn-lg w-100"
          onClick={calculateBodyFat}
        >
          Calculate Body Fat
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

export default BodyFatCalculator;
