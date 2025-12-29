import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function TimeCalculator() {
  const seo = calculatorsSeo["time-calculator"];

  const [baseTime, setBaseTime] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateTime = () => {
    if (!baseTime) {
      setError("Please select a base time.");
      setResult(null);
      return;
    }

    const h = Number(hours) || 0;
    const m = Number(minutes) || 0;

    if (h < 0 || m < 0) {
      setError("Hours and minutes must be positive numbers.");
      setResult(null);
      return;
    }

    setError("");

    const [baseH, baseM] = baseTime.split(":").map(Number);
    let totalMinutes = baseH * 60 + baseM;

    const deltaMinutes = h * 60 + m;

    totalMinutes =
      operation === "add"
        ? totalMinutes + deltaMinutes
        : totalMinutes - deltaMinutes;

    // Handle negative or overflow (24-hour wrap)
    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

    const resultHours = Math.floor(totalMinutes / 60);
    const resultMinutes = totalMinutes % 60;

    setResult({
      hours: String(resultHours).padStart(2, "0"),
      minutes: String(resultMinutes).padStart(2, "0"),
    });
  };

  const resetCalculator = () => {
    setBaseTime("");
    setHours("");
    setMinutes("");
    setResult(null);
    setError("");
  };

  return (
  

    

    <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
  {/* Base Time */}
      <div className="mb-3">
        <label className="form-label">Base Time</label>
        <input
          type="time"
          className="form-control"
          value={baseTime}
          onChange={(e) => setBaseTime(e.target.value)}
        />
      </div>

      {/* Operation */}
      <div className="mb-3">
        <label className="form-label">Operation</label>
        <select
          className="form-select"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add Time</option>
          <option value="subtract">Subtract Time</option>
        </select>
      </div>

      {/* Time Input */}
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <label className="form-label">Hours</label>
          <input
            type="number"
            className="form-control"
            placeholder="Hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            min="0"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Minutes</label>
          <input
            type="number"
            className="form-control"
            placeholder="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculateTime}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Result Time</h2>
          <p className="fs-5 fw-semibold">
            {result.hours}:{result.minutes}
          </p>
        </div>
      )}     
    </CalculatorLayout>  );
}

export default TimeCalculator;
