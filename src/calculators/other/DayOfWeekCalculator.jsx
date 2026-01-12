import { useState } from "react";


function DayOfWeekCalculator() {


  const [date, setDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDayOfWeek = () => {
    if (!date) {
      setError("Please enter a date.");
      setResult(null);
      return;
    }

    const d = new Date(date);
    if (isNaN(d.getTime())) {
      setError("Invalid date entered.");
      setResult(null);
      return;
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    setError("");
    setResult(days[d.getDay()]);
  };

  const resetCalculator = () => {
    setDate("");
    setResult(null);
    setError("");
  };

  return (
  
      
<>
      

      <div className="mb-3">
        <label className="form-label fw-semibold">Select Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateDayOfWeek}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Day of the Week:</strong> {result}
        </div>
      )}
      
</>   
    
  );
}

export default DayOfWeekCalculator;
