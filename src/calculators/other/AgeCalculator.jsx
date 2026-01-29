import { useState } from "react";

function AgeCalculator() {
  const todayISO = new Date().toISOString().split("T")[0];

  const [dob, setDob] = useState("");
  const [targetDate, setTargetDate] = useState(todayISO);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!dob) {
      setError("Please select your date of birth.");
      setResult(null);
      return;
    }

    if (!targetDate) {
      setError("Please select the age calculation date.");
      setResult(null);
      return;
    }

    const birthDate = new Date(dob);
    const target = new Date(targetDate);

    if (birthDate > target) {
      setError("Date of birth cannot be after the selected date.");
      setResult(null);
      return;
    }

    setError("");

    let years = target.getFullYear() - birthDate.getFullYear();
    let months = target.getMonth() - birthDate.getMonth();
    let days = target.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const daysInPrevMonth = new Date(
        target.getFullYear(),
        target.getMonth(),
        0
      ).getDate();
      days += daysInPrevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = target - birthDate;
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
    setTargetDate(todayISO);
    setResult(null);
    setError("");
  };

  return (
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
          max={todayISO}
          onChange={(e) => setDob(e.target.value)}
          style={{ cursor: "pointer" }}
        />
        <small className="text-muted">
          Tap to open date picker
        </small>
      </div>

      {/* Age at the Date of */}
      <div className="mb-3">
        <label htmlFor="targetDate" className="form-label fw-semibold">
          Age at the Date of
        </label>
        <input
          id="targetDate"
          type="date"
          className="form-control form-control-lg"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          style={{ cursor: "pointer" }}
          {...(dob ? { min: dob } : {})}
        />
        <small className="text-muted">
          Select any past or future date
        </small>
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
            Age Result
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
  );
}

export default AgeCalculator;
