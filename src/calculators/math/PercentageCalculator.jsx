import { useState } from "react";

export default function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculatePercentage = () => {
    setError("");
    setResult(null);

    const val = parseFloat(value);
    const pct = parseFloat(percent);

    if (isNaN(val) || isNaN(pct)) {
      setError("Please enter valid numbers.");
      return;
    }

    if (val < 0 || pct < 0) {
      setError("Negative values are not allowed.");
      return;
    }

    const res = (val * pct) / 100;
    setResult(res.toFixed(2));
  };

  const resetCalculator = () => {
    setValue("");
    setPercent("");
    setResult(null);
    setError("");
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label fw-semibold">Value</label>
        <input
          type="number"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. 200"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Percentage (%)</label>
        <input
          type="number"
          className="form-control"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
          placeholder="e.g. 15"
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculatePercentage}
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

      {result !== null && (
        <div className="border-top pt-3">
          <h2 className="h5 mb-2">Result</h2>
          <p className="fs-5">
            <strong>{percent}%</strong> of <strong>{value}</strong> is{" "}
            <strong>{result}</strong>
          </p>
        </div>
      )}
    </>
  );
}
