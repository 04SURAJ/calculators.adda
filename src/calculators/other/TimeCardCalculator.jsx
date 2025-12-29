import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function TimeCardCalculator() {
  const seo = calculatorsSeo["time-card-calculator"];

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [breakMinutes, setBreakMinutes] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateHours = () => {
    if (!startTime || !endTime) {
      setError("Please enter both start and end times.");
      setResult(null);
      return;
    }

    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    let diff = (end - start) / (1000 * 60); // difference in minutes

    if (diff < 0) {
      diff += 24 * 60; // handle overnight shifts
    }

    diff -= parseFloat(breakMinutes);

    if (diff < 0) {
      setError("Break time is longer than total work duration.");
      setResult(null);
      return;
    }

    const hours = Math.floor(diff / 60);
    const minutes = Math.round(diff % 60);

    setError("");
    setResult(`${hours} hr ${minutes} min`);
  };

  const resetCalculator = () => {
    setStartTime("");
    setEndTime("");
    setBreakMinutes(0);
    setResult(null);
    setError("");
  };

  return (
  

  
  <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
    <div className="row g-2 mb-3">
        <div className="col-md-4">
          <label className="form-label">Start Time</label>
          <input
            type="time"
            className="form-control"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">End Time</label>
          <input
            type="time"
            className="form-control"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Break (minutes)</label>
          <input
            type="number"
            className="form-control"
            min="0"
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateHours}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Total Hours Worked:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default TimeCardCalculator;
