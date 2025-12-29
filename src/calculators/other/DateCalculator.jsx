import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function DateCalculator() {
  const seo = calculatorsSeo["date-calculator"];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [operation, setOperation] = useState("difference");
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("days");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setError("Please select both dates.");
      setResult(null);
      return;
    }

    const d1 = new Date(startDate);
    const d2 = new Date(endDate);

    const diffTime = Math.abs(d2 - d1);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    setError("");
    setResult({
      type: "difference",
      days,
      weeks: Math.floor(days / 7),
    });
  };

  const calculateAddSubtract = () => {
    if (!startDate || !value) {
      setError("Please select date and value.");
      setResult(null);
      return;
    }

    const baseDate = new Date(startDate);
    const num = Number(value);

    if (isNaN(num) || num <= 0) {
      setError("Enter a valid positive number.");
      setResult(null);
      return;
    }

    setError("");

    const newDate = new Date(baseDate);

    switch (unit) {
      case "days":
        newDate.setDate(newDate.getDate() + num);
        break;
      case "weeks":
        newDate.setDate(newDate.getDate() + num * 7);
        break;
      case "months":
        newDate.setMonth(newDate.getMonth() + num);
        break;
      case "years":
        newDate.setFullYear(newDate.getFullYear() + num);
        break;
      default:
        break;
    }

    setResult({
      type: "add",
      date: newDate.toDateString(),
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
  

     
      <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
 {/* Operation Selector */}
      <div className="mb-3">
        <label className="form-label">Operation</label>
        <select
          className="form-select"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="difference">Date Difference</option>
          <option value="add">Add Time to Date</option>
        </select>
      </div>

      {/* Start Date */}
      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      {/* End Date (Difference only) */}
      {operation === "difference" && (
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      )}

      {/* Add/Subtract Inputs */}
      {operation === "add" && (
        <div className="row mb-3">
          <div className="col-md-6 mb-2">
            <input
              type="number"
              className="form-control"
              placeholder="Enter value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
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
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={handleCalculate}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {/* Result */}
      {result && result.type === "difference" && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Result</h2>
          <p>
            <strong>{result.days}</strong> days
          </p>
          <p>
            <strong>{result.weeks}</strong> weeks
          </p>
        </div>
      )}

      {result && result.type === "add" && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Result Date</h2>
          <p>
            <strong>{result.date}</strong>
          </p>
        </div>
      )}     
    </CalculatorLayout>
   
  );
}

export default DateCalculator;
