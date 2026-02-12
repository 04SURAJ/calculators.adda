import { useState } from "react";

// Milestone data
const milestones = {
  3: "Baby conceived",
  4: "Pregnancy test positive",
  6: "Heartbeat detectable by ultrasound",
  13: "Miscarriage risk decreases",
  18: "Baby begins making noticeable movements, can hear sounds, and gender can be found out",
  23: "Premature baby may survive",
  28: "Baby can breathe",
  38: "Full Term",
};

function DueDateCalculator() {
  const [estimateMethod, setEstimateMethod] = useState("lmp");
  const [lmpDate, setLmpDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDueDate = () => {
    if (!lmpDate) {
      setError("Please select the first day of your last period.");
      setResult(null);
      return;
    }

    setError("");
    const startDate = new Date(lmpDate);
    const pregnancyDays = 280 + (cycleLength - 28); // adjust for cycle length
    const dueDate = new Date(startDate);
    dueDate.setDate(dueDate.getDate() + pregnancyDays);

    const today = new Date();
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const currentWeek = Math.min(Math.floor(diffDays / 7) + 1, 42);
    const currentDay = diffDays % 7;

    // Baby size estimation (approx)
    const babyLength = (currentWeek * 0.1).toFixed(1); // inches
    const babyWeight = (currentWeek * 0.01).toFixed(2); // oz

    const conceptionDate = new Date(startDate);
    conceptionDate.setDate(conceptionDate.getDate() + 14); // approx ovulation

    const pregnancyProgress = Math.min(Math.floor((diffDays / 280) * 100), 100);

    // Generate week-by-week table
    const weeks = [];
    for (let i = 1; i <= 42; i++) {
      const weekStart = new Date(startDate);
      weekStart.setDate(weekStart.getDate() + (i - 1) * 7);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);

      let trimester = "";
      if (i <= 13) trimester = "First";
      else if (i <= 27) trimester = "Second";
      else trimester = "Third";

      weeks.push({
        week: i,
        startDate: weekStart,
        endDate: weekEnd,
        trimester,
        milestone: milestones[i] || "",
      });
    }

    setResult({
      dueDate,
      currentWeek,
      currentDay,
      trimester:
        currentWeek <= 13
          ? "First"
          : currentWeek <= 27
          ? "Second"
          : "Third",
      babyLength,
      babyWeight,
      conceptionDate,
      pregnancyProgress,
      weeks,
    });
  };

  const resetCalculator = () => {
    setEstimateMethod("lmp");
    setLmpDate("");
    setCycleLength(28);
    setResult(null);
    setError("");
  };

  return (
    <div className="container py-4">
      {/* Estimate Method Dropdown */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Estimate Based On:</label>
        <select
          className="form-select"
          value={estimateMethod}
          onChange={(e) => setEstimateMethod(e.target.value)}
        >
          <option value="lmp">Last Period</option>
          <option value="ultrasound">Ultrasound</option>
          <option value="conception">Conception Date</option>
          <option value="ivf">IVF Transfer</option>
        </select>
      </div>

      {/* LMP Date */}
      <div className="mb-3">
        <label className="form-label fw-semibold">First Day of Your Last Period:</label>
        <input
          type="date"
          className="form-control"
          value={lmpDate}
          onChange={(e) => setLmpDate(e.target.value)}
        />
      </div>

      {/* Average Cycle Length */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Average Length of Your Cycles (days):</label>
        <input
          type="number"
          min="20"
          max="45"
          className="form-control"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number(e.target.value))}
        />
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary flex-fill" onClick={calculateDueDate}>
          Calculate Due Date
        </button>
        <button className="btn btn-outline-secondary flex-fill" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {/* Error */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Result */}
      {result && (
        <div>
          <div className="alert alert-success">
            <p><strong>Estimated Due Date:</strong> {result.dueDate.toDateString()}</p>
            <p>
              You are currently at week #{result.currentWeek} ({result.currentWeek - 1} weeks {result.currentDay} days)
            </p>
            <p>Trimester: {result.trimester}</p>
            <p>
              Baby size: {result.babyLength} inch ({(result.babyLength * 2.54).toFixed(1)} cm),{" "}
              {result.babyWeight} oz ({(result.babyWeight * 28.35).toFixed(1)} g)
            </p>
            <p>Likely conceived on: {result.conceptionDate.toDateString()}</p>
            <p>Pregnancy progress: {result.pregnancyProgress}%</p>
          </div>

          {/* Week-by-week Table */}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Week</th>
                  <th>Date</th>
                  <th>Trimester</th>
                  <th>Important Milestones</th>
                </tr>
              </thead>
              <tbody>
                {result.weeks.map((w) => (
                  <tr key={w.week}>
                    <td>Week {w.week}</td>
                    <td>{w.startDate.toDateString()} - {w.endDate.toDateString()}</td>
                    <td>{w.trimester}</td>
                    <td>{w.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="small text-muted">
            Note: These results are estimations based on averages for a single pregnancy. Twin or multiple pregnancies may differ.
          </p>
        </div>
      )}
    </div>
  );
}

export default DueDateCalculator;
