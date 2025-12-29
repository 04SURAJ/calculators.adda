import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function DayOfWeekCalculator() {
   const seo = calculatorsSeo["day-of-week-calculator"];


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
  
      

       <CalculatorLayout
      title="Day of Week Calculator"
      description={seo.description}
    >
      

      <div className="mb-3">
        <label className="form-label">Select Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateDayOfWeek}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Day of the Week:</strong> {result}
        </div>
      )}
      
    </CalculatorLayout>
   
    
  );
}

export default DayOfWeekCalculator;
