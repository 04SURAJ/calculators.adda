import { useState } from "react";


function DayCounter() {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDays = () => {
    if (!startDate || !endDate) {
      setError("Please enter both start and end dates.");
      setResult(null);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffTime = end - start;
    if (isNaN(diffTime)) {
      setError("Invalid dates entered.");
      setResult(null);
      return;
    }

    const diffDays = Math.abs(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    setError("");
    setResult(`${diffDays} day(s)`);
  };

  const resetCalculator = () => {
    setStartDate("");
    setEndDate("");
    setResult(null);
    setError("");
  };

  return (
    

     
<>
 <div className="row g-2 mb-3">
        <div className="col-md-6">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateDays}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Days:</strong> {result}
        </div>
      )}     
</>
 );
}

export default DayCounter;
