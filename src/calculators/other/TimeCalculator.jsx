import { useState } from "react";

function TimeCalculator() {
  const [baseTime, setBaseTime] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [operation, setOperation] = useState("add");
  const [show24Hour, setShow24Hour] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Quick preset buttons
  const presets = [
    { label: "+15 min", h: 0, m: 15 },
    { label: "+30 min", h: 0, m: 30 },
    { label: "+1 hour", h: 1, m: 0 },
    { label: "+2 hours", h: 2, m: 0 },
  ];

  const applyPreset = (h, m) => {
    setHours(String(Number(hours || 0) + h));
    setMinutes(String(Number(minutes || 0) + m));
  };

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

    // Wrap 24-hour
    let dayShift = 0;
    if (totalMinutes >= 1440) {
      dayShift = Math.floor(totalMinutes / 1440);
      totalMinutes = totalMinutes % 1440;
    } else if (totalMinutes < 0) {
      dayShift = Math.floor(totalMinutes / 1440);
      totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;
    }

    const resultHours = Math.floor(totalMinutes / 60);
    const resultMinutes = totalMinutes % 60;

    // Format time based on 12/24h
    let displayHours = resultHours;
    let period = "";
    if (!show24Hour) {
      period = resultHours >= 12 ? "PM" : "AM";
      displayHours = resultHours % 12 || 12;
    }

    setResult({
      hours: String(displayHours).padStart(2, "0"),
      minutes: String(resultMinutes).padStart(2, "0"),
      totalMinutes: deltaMinutes,
      dayShift,
      period,
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
    <>
      {/* Base Time */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Base Time</label>
        <input
          type="time"
          className="form-control"
          value={baseTime}
          onChange={(e) => setBaseTime(e.target.value)}
        />
      </div>

      {/* Operation */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Operation</label>
        <select
          className="form-select"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add Time</option>
          <option value="subtract">Subtract Time</option>
        </select>
      </div>

      {/* Hours and Minutes */}
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <label className="form-label fw-semibold">Hours</label>
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
          <label className="form-label fw-semibold">Minutes</label>
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

      {/* Quick Presets */}
      <div className="mb-3 d-flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.label}
            className="btn btn-outline-secondary btn-sm"
            onClick={() => applyPreset(p.h, p.m)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* 12/24-hour toggle */}
      <div className="mb-3 form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={show24Hour}
          id="toggle24h"
          onChange={(e) => setShow24Hour(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="toggle24h">
          24-hour format
        </label>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Actions */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculateTime}
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

      {/* Result */}
      {result && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Result Time</h2>
          <p className="fs-5 fw-semibold">
            {result.hours}:{result.minutes}{" "}
            {!show24Hour && result.period}
            {result.dayShift > 0 && " (Next day)"}
            {result.dayShift < 0 && " (Previous day)"}
          </p>
          <p>
            <strong>Total minutes:</strong> {result.totalMinutes} min
          </p>
        </div>
      )}
    </>
  );
}

export default TimeCalculator;
