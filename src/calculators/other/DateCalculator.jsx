import { useState } from "react";

function DateCalculator() {

  const [operation, setOperation] = useState("difference");
  const [mode, setMode] = useState("add"); // add | subtract

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("days");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  /* ---------------- Difference Logic ---------------- */
  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      setResult(null);
      return;
    }

    const d1 = new Date(startDate);
    const d2 = new Date(endDate);

    const forward = d2 >= d1;
    const start = forward ? d1 : d2;
    const end = forward ? d2 : d1;

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        end.getFullYear(),
        end.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = Math.abs(end - start);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    setError("");
    setResult({
      type: "difference",
      direction: forward ? "after" : "before",
      years,
      months,
      days,
      totalDays,
      weeks: Math.floor(totalDays / 7),
    });
  };

  /* ---------------- Add / Subtract Logic ---------------- */
  const calculateAddSubtract = () => {
    if (!startDate || !value) {
      setError("Please select date and enter a value.");
      setResult(null);
      return;
    }

    const num = Number(value);
    if (isNaN(num) || num <= 0) {
      setError("Enter a valid positive number.");
      setResult(null);
      return;
    }

    const base = new Date(startDate);
    const factor = mode === "add" ? num : -num;

    switch (unit) {
      case "days":
        base.setDate(base.getDate() + factor);
        break;
      case "weeks":
        base.setDate(base.getDate() + factor * 7);
        break;
      case "months":
        base.setMonth(base.getMonth() + factor);
        break;
      case "years":
        base.setFullYear(base.getFullYear() + factor);
        break;
      default:
        break;
    }

    setError("");
    setResult({
      type: "add",
      date: base.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    });
  };

  const handleCalculate = () => {
    operation === "difference"
      ? calculateDifference()
      : calculateAddSubtract();
  };

  const resetCalculator = () => {
    setStartDate("");
    setEndDate("");
    setValue("");
    setResult(null);
    setError("");
  };

  return (
    <div className="container-fluid px-0">
      {/* Operation */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Operation</label>
        <select
          className="form-select"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="difference">Date Difference</option>
          <option value="add">Add / Subtract Time</option>
        </select>
      </div>

      {/* Start Date */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Start Date</label>
        <input
          type="date"
          className="form-control form-control-lg"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* End Date */}
      {operation === "difference" && (
        <div className="mb-3">
          <label className="form-label fw-semibold">End Date</label>
          <input
            type="date"
            className="form-control form-control-lg"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      {/* Add / Subtract */}
      {operation === "add" && (
        <>
          <div className="mb-2">
            <div className="btn-group w-100">
              <button
                className={`btn btn-${mode === "add" ? "primary" : "outline-primary"}`}
                onClick={() => setMode("add")}
              >
                Add
              </button>
              <button
                className={`btn btn-${mode === "subtract" ? "primary" : "outline-primary"}`}
                onClick={() => setMode("subtract")}
              >
                Subtract
              </button>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="col-6">
              <select
                className="form-select form-select-lg"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
          </div>
        </>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={handleCalculate}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {/* Result */}
      {result && result.type === "difference" && (
        <div className="border-top pt-3">
          <h2 className="h6 fw-bold">Result</h2>
          <p>
            <strong>
              {result.years} Years {result.months} Months {result.days} Days
            </strong>
          </p>
          <p>
            <strong>{result.totalDays}</strong> days (
            {result.weeks} weeks)
          </p>
          <p className="text-muted">
            End date is {result.totalDays} days {result.direction} start date
          </p>
        </div>
      )}

      {result && result.type === "add" && (
        <div className="border-top pt-3">
          <h2 className="h6 fw-bold">Result Date</h2>
          <p><strong>{result.date}</strong></p>
        </div>
      )}
    </div>
  );
}

export default DateCalculator;
