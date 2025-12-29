import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function HoursCalculator() {
  const seo = calculatorsSeo["hours-calculator"];

  const [entries, setEntries] = useState([""]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const addEntry = () => {
    setEntries([...entries, ""]);
  };

  const removeEntry = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated.length ? updated : [""]);
  };

  const updateEntry = (index, value) => {
    const updated = [...entries];
    updated[index] = value;
    setEntries(updated);
  };

  const calculateTotal = () => {
    let totalMinutes = 0;

    for (let time of entries) {
      if (!time) continue;

      const [h, m] = time.split(":").map(Number);

      if (
        isNaN(h) ||
        isNaN(m) ||
        h < 0 ||
        m < 0 ||
        m >= 60
      ) {
        setError("Please enter valid time values (HH:MM).");
        setResult(null);
        return;
      }

      totalMinutes += h * 60 + m;
    }

    setError("");

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    setResult({
      hours,
      minutes,
      totalMinutes,
    });
  };

  const resetCalculator = () => {
    setEntries([""]);
    setResult(null);
    setError("");
  };

  return (
   


    <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >

      {/* Time Entries */}
      {entries.map((time, index) => (
        <div className="row mb-2" key={index}>
          <div className="col-8">
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => updateEntry(index, e.target.value)}
            />
          </div>
          <div className="col-4">
            {entries.length > 1 && (
              <button
                className="btn btn-outline-danger w-100"
                onClick={() => removeEntry(index)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}

      <div className="d-flex gap-2 my-3">
        <button className="btn btn-outline-primary" onClick={addEntry}>
          + Add Entry
        </button>
        <button className="btn btn-primary" onClick={calculateTotal}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Result */}
      {result && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Total Time</h2>
          <p className="mb-1">
            <strong>{result.hours}</strong> hours{" "}
            <strong>{result.minutes}</strong> minutes
          </p>
          <p className="text-muted">
            ({result.totalMinutes} total minutes)
          </p>
        </div>
      )}     
    </CalculatorLayout>
    
  );
}

export default HoursCalculator;
