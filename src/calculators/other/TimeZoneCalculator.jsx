import { useState } from "react";


const timeZones = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Asia/Kolkata",
  "Asia/Tokyo",
  "Australia/Sydney",
];

function TimeZoneCalculator() {


  const [inputTime, setInputTime] = useState("");
  const [fromZone, setFromZone] = useState("UTC");
  const [toZone, setToZone] = useState("UTC");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const convertTime = () => {
    if (!inputTime) {
      setError("Please enter a valid time.");
      setResult("");
      return;
    }

    try {
      const date = new Date(`1970-01-01T${inputTime}:00`);
      const fromOffset = date.toLocaleString("en-US", { timeZone: fromZone });
      const fromDate = new Date(fromOffset);

      const toTime = fromDate.toLocaleString("en-US", {
        timeZone: toZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setResult(toTime);
      setError("");
    } catch (e) {
      setError("Invalid conversion.");
      setResult("");
    }
  };

  const resetCalculator = () => {
    setInputTime("");
    setFromZone("UTC");
    setToZone("UTC");
    setResult("");
    setError("");
  };

  return (
   

     
<>
 <div className="row g-2 mb-3">
        <div className="col-md-4">
          <label className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">From Time Zone</label>
          <select
            className="form-select"
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
          >
            {timeZones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">To Time Zone</label>
          <select
            className="form-select"
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
          >
            {timeZones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={convertTime}>
          Convert
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Converted Time:</strong> {result}
        </div>
      )}     
   </>
   
  );
}

export default TimeZoneCalculator;
