import { useState } from "react";

export default function AvgMeanMedianModeCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  /* ---------- Helpers ---------- */

  const parseNumbers = () => {
    return input
      .split(/[\s,]+/)
      .map((n) => Number(n))
      .filter((n) => !isNaN(n));
  };

  const calculateAverage = (nums) =>
    nums.reduce((a, b) => a + b, 0) / nums.length;

  const calculateMedian = (nums) => {
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  const calculateMode = (nums) => {
    const freq = {};
    nums.forEach((n) => (freq[n] = (freq[n] || 0) + 1));

    const maxFreq = Math.max(...Object.values(freq));
    if (maxFreq === 1) return "No mode";

    return Object.keys(freq)
      .filter((key) => freq[key] === maxFreq)
      .join(", ");
  };

  /* ---------- Calculation ---------- */

  const calculateStatistics = () => {
    setError("");
    setResult(null);

    if (!input.trim()) {
      setError("Please enter numbers.");
      return;
    }

    const numbers = parseNumbers();

    if (numbers.length < 2) {
      setError("Enter at least two valid numbers.");
      return;
    }

    const average = calculateAverage(numbers);
    const mean = average; // Mean = Average
    const median = calculateMedian(numbers);
    const mode = calculateMode(numbers);

    setResult({
      average: average.toFixed(2),
      mean: mean.toFixed(2),
      median,
      mode,
    });
  };

  const resetCalculator = () => {
    setInput("");
    setResult(null);
    setError("");
  };

  /* ---------- UI ---------- */

  return (
    <>
      <h2 className="h5 mb-3">
        Average, Mean, Median & Mode Calculator
      </h2>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          Enter Numbers
        </label>
        <textarea
          className="form-control"
          rows="3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 10, 20, 30, 40, 50"
        />
        <small className="text-muted">
          Separate numbers using commas or spaces.
        </small>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* RESULT — ABOVE BUTTONS */}
      {result && (
        <div
          className="mb-4 p-3 rounded"
          style={{
            backgroundColor: "#f1f5ff",
            border: "1px solid #d6e0ff",
          }}
        >
          <h3 className="h6 mb-2">Results</h3>

          <p className="mb-1">
            <strong>Average:</strong> {result.average}
          </p>

          <p className="mb-1">
            <strong>Mean:</strong> {result.mean}
          </p>

          <p className="mb-1">
            <strong>Median:</strong> {result.median}
          </p>

          <p className="mb-0">
            <strong>Mode:</strong> {result.mode}
          </p>
        </div>
      )}

      {/* BUTTONS */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculateStatistics}
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
    </>
  );
}
