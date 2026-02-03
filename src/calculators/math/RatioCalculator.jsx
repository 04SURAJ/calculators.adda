import { useState } from "react";

export default function RatioCalculator() {
  const [values, setValues] = useState(["", ""]);
  const [total, setTotal] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleValueChange = (index, newValue) => {
    const updated = [...values];
    updated[index] = newValue;
    setValues(updated);
  };

  /* ---------- Math Utilities ---------- */

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const gcdMultiple = (nums) =>
    nums.reduce((acc, num) => gcd(acc, num));

  const getDecimalMultiplier = (nums) => {
    const decimals = nums.map((n) => {
      const s = n.toString();
      return s.includes(".") ? s.split(".")[1].length : 0;
    });
    return Math.pow(10, Math.max(...decimals));
  };

  /* ---------- Calculation ---------- */

  const calculateRatio = () => {
    setError("");
    setResult(null);

    if (values.some((v) => v === "")) {
      setError("Please enter all values.");
      return;
    }

    const nums = values.map(Number);

    if (nums.some((n) => isNaN(n))) {
      setError("Only numeric values are allowed.");
      return;
    }

    if (nums.some((n) => n <= 0)) {
      setError("Values must be greater than zero.");
      return;
    }

    // Handle decimals safely
    const multiplier = getDecimalMultiplier(nums);
    const scaled = nums.map((n) => Math.round(n * multiplier));
    const commonGcd = gcdMultiple(scaled);
    const simplified = scaled.map((n) => n / commonGcd);

    // Fraction conversion
    const sum = simplified.reduce((a, b) => a + b, 0);
    const fractions = simplified.map((n) => `${n}/${sum}`);

    // Scaling by total (optional)
    let scaledValues = null;
    if (total && !isNaN(total) && total > 0) {
      scaledValues = simplified.map(
        (n) => ((n / sum) * total).toFixed(2)
      );
    }

    setResult({
      original: nums.join(" : "),
      simplified,
      fractions,
      scaledValues,
    });
  };

  /* ---------- Controls ---------- */

  const resetCalculator = () => {
    setValues(["", ""]);
    setTotal("");
    setResult(null);
    setError("");
  };

  const addField = () => {
    if (values.length < 4) setValues([...values, ""]);
  };

  const removeField = (index) => {
    if (values.length > 2) {
      setValues(values.filter((_, i) => i !== index));
    }
  };

  /* ---------- UI ---------- */

  return (
    <>
      <h2 className="h5 mb-3">Enter Ratio Values</h2>

      {values.map((val, index) => (
        <div className="mb-3 d-flex gap-2" key={index}>
          <input
            type="number"
            step="any"
            className="form-control"
            value={val}
            onChange={(e) => handleValueChange(index, e.target.value)}
            placeholder={`Value ${index + 1}`}
          />

          {values.length > 2 && (
            <button
              className="btn btn-outline-danger"
              onClick={() => removeField(index)}
            >
              ×
            </button>
          )}
        </div>
      ))}

      {values.length < 4 && (
        <button
          className="btn btn-outline-secondary mb-3"
          onClick={addField}
        >
          + Add Value
        </button>
      )}

      <div className="mb-3">
        <label className="form-label fw-semibold">
          Total Value (optional)
        </label>
        <input
          type="number"
          className="form-control"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          placeholder="e.g. 1000"
        />
      </div>
{error && <div className="alert alert-danger">{error}</div>}

{/* RESULT — ABOVE buttons */}
{result && (
  <div
    className="mb-4 p-3 rounded"
    style={{
      backgroundColor: "#f1f5ff",
      border: "1px solid #d6e0ff",
    }}
  >
    <h3 className="h6 mb-2">Result</h3>

    <p className="mb-1">
      <strong>Original Ratio:</strong> {result.original}
    </p>

    <p className="mb-1">
      <strong>Simplified Ratio:</strong>{" "}
      {result.simplified.join(" : ")}
    </p>

    <p className="mb-1">
      <strong>Fraction Form:</strong>{" "}
      {result.fractions.join(", ")}
    </p>

    {result.scaledValues && (
      <p className="mb-0">
        <strong>Scaled Values:</strong>{" "}
        {result.scaledValues.join(" , ")}
      </p>
    )}
  </div>
)}

{/* BUTTONS — BELOW result */}
<div className="d-grid d-sm-flex gap-2 mb-4">
  <button
    className="btn btn-primary btn-lg w-100"
    onClick={calculateRatio}
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
