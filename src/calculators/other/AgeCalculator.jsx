import { useState } from "react";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const todayDate = new Date().toISOString().split("T")[0];

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
      const daysInPrevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += daysInPrevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = today - birthDate;
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = Math.floor(diffTime / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diffTime / (1000 * 60));

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
      totalHours,
      totalMinutes,
    });
  };

  const resetCalculator = () => {
    setDob("");
    setResult(null);
    setError("");
  };

  return (
    <>
    <div className="container-fluid px-0">
      {/* Date of Birth */}
      <div className="mb-3">
        <label htmlFor="dob" className="form-label fw-semibold">
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          className="form-control form-control-lg"
          value={dob}
          max={todayDate}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      {/* Age at the Date of */}
      <div className="mb-3">
        <label className="form-label fw-semibold">
          Age at the Date of
        </label>
        <input
          type="date"
          className="form-control form-control-lg bg-light"
          value={todayDate}
          readOnly
        />
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger py-2" role="alert">
          {error}
        </div>
      )}

      {/* Actions */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button
          className="btn btn-primary btn-lg w-100"
          onClick={calculateAge}
        >
          Calculate Age
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
          <h2 className="h5 fw-bold mb-3 text-center text-sm-start">
            Your Age
          </h2>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>{result.years}</strong> Years{" "}
              <strong>{result.months}</strong> Months{" "}
              <strong>{result.days}</strong> Days
            </li>

            <li className="list-group-item">
              <strong>{result.totalMonths.toLocaleString()}</strong> Total Months
            </li>

            <li className="list-group-item">
              <strong>{result.totalWeeks.toLocaleString()}</strong> Total Weeks
            </li>

            <li className="list-group-item">
              <strong>{result.totalDays.toLocaleString()}</strong> Total Days
            </li>

            <li className="list-group-item">
              <strong>{result.totalHours.toLocaleString()}</strong> Total Hours
            </li>

            <li className="list-group-item">
              <strong>{result.totalMinutes.toLocaleString()}</strong> Total Minutes
            </li>
          </ul>
        </div>
      )}
      
    </div>



    </>
    
  );
}

export default AgeCalculator;
