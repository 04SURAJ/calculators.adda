import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function AgeCalculator() {
const seo = calculatorsSeo["age-calculator"];


  const [dob, setDob] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!dob) {
      setError("Please select your date of birth.");
      setResult(null);
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      setError("Date of birth cannot be in the future.");
      setResult(null);
      return;
    }

    setError("");

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += prevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = today.getTime() - birthDate.getTime();
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(diffTime / (1000 * 60 * 60));

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalHours,
    });
  };

  const resetCalculator = () => {
    setDob("");
    setResult(null);
    setError("");
  };

  return (
   
     
      <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
 <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          className="form-control"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={calculateAge}>
          Calculate Age
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {result && (
        <div className="border-top pt-3">
          <h2 className="h5 mb-3">Your Age Is</h2>

          <ul className="list-group">
            <li className="list-group-item">
              <strong>{result.years}</strong> Years{" "}
              <strong>{result.months}</strong> Months{" "}
              <strong>{result.days}</strong> Days
            </li>
            <li className="list-group-item">
              <strong>{result.totalDays.toLocaleString()}</strong> Total Days
            </li>
            <li className="list-group-item">
              <strong>{result.totalWeeks.toLocaleString()}</strong> Total Weeks
            </li>
            <li className="list-group-item">
              <strong>{result.totalHours.toLocaleString()}</strong> Total Hours
            </li>
          </ul>
        </div>
      )}     
      <button className="btn btn-primary">Calculate</button>
    </CalculatorLayout>
    
  );
}

export default AgeCalculator;
