import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function SleepCalculator() {
    const seo = calculatorsSeo["sleep-calculator"];

  const [wakeTime, setWakeTime] = useState("");
  const [sleepTime, setSleepTime] = useState("");
  const [mode, setMode] = useState("wake-to-sleep"); // "wake-to-sleep" or "sleep-to-wake"
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const sleepCycleMinutes = 90; // average sleep cycle

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const calculateSleepTimes = () => {
    setError("");
    setResult([]);

    try {
      if (mode === "wake-to-sleep") {
        if (!wakeTime) throw new Error("Please enter desired wake-up time.");
        const wake = new Date(`1970-01-01T${wakeTime}:00`);
        const times = [];

        for (let i = 6; i >= 3; i--) {
          const sleepDate = new Date(wake.getTime() - i * sleepCycleMinutes * 60000);
          times.push(formatTime(sleepDate));
        }
        setResult(times);
      } else {
        if (!sleepTime) throw new Error("Please enter your sleep time.");
        const sleep = new Date(`1970-01-01T${sleepTime}:00`);
        const times = [];

        for (let i = 1; i <= 6; i++) {
          const wakeDate = new Date(sleep.getTime() + i * sleepCycleMinutes * 60000);
          times.push(formatTime(wakeDate));
        }
        setResult(times);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const resetCalculator = () => {
    setWakeTime("");
    setSleepTime("");
    setResult([]);
    setError("");
  };

  return (
  

      
  <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
<div className="mb-3">
        <label className="form-label">Mode</label>
        <select
          className="form-select mb-3"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="wake-to-sleep">Calculate Sleep Time from Wake Time</option>
          <option value="sleep-to-wake">Calculate Wake Time from Sleep Time</option>
        </select>

        {mode === "wake-to-sleep" ? (
          <input
            type="time"
            className="form-control"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
          />
        ) : (
          <input
            type="time"
            className="form-control"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
          />
        )}
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateSleepTimes}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result.length > 0 && (
        <div className="alert alert-success">
          <strong>Optimal Times:</strong>
          <ul className="mb-0">
            {result.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      )}     
    </CalculatorLayout>  );
}

export default SleepCalculator;
