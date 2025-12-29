import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function TimeDurationCalculator() {
  const seo = calculatorsSeo["time-duration-calculator"];

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDuration = () => {
    if (!startTime || !endTime) {
      setError("Please enter both start and end times.");
      setResult(null);
      return;
    }

    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    let diff = (end - start) / 1000; // difference in seconds

    if (diff < 0) {
      // Assume end time is on next day
      diff += 24 * 3600;
    }

    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);

    setError("");
    setResult(`${hours}h ${minutes}m ${seconds}s`);
  };

  const resetCalculator = () => {
    setStartTime("");
    setEndTime("");
    setResult(null);
    setError("");
  };

  return (
  

    <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
<div className="row g-2 mb-3">
        <div className="col-md-6">
          <label className="form-label">Start Time</label>
          <input
            type="time"
            className="form-control"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">End Time</label>
          <input
            type="time"
            className="form-control"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateDuration}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Duration:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default TimeDurationCalculator;
