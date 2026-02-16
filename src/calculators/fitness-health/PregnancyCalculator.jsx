import { useState } from "react";
import CustomDateInput from "./CustomDateInput";

function PregnancyCalculator() {
  const [method, setMethod] = useState("due");
  
  const [cycleLength, setCycleLength] = useState(28);
 
  const [pregnancyLength, setPregnancyLength] = useState("");
  
  const [embryoAge, setEmbryoAge] = useState("3");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
const getToday = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const [dueDate, setDueDate] = useState(getToday());
const [lastPeriod, setLastPeriod] = useState(getToday());
const [ultrasoundDate, setUltrasoundDate] = useState(getToday());
const [conceptionDate, setConceptionDate] = useState(getToday());
const [ivfDate, setIvfDate] = useState(getToday());

 const calculate = () => {
  setError("");
  setResult(null);

  try {
    let estimatedDue;

    if (method === "due") {
      if (!dueDate) throw "Please select due date.";
      estimatedDue = new Date(dueDate);
    }

    if (method === "lastPeriod") {
      if (!lastPeriod) throw "Please enter last period date.";
      const lmp = new Date(lastPeriod);
      estimatedDue = new Date(lmp);
      estimatedDue.setDate(lmp.getDate() + 280 + (cycleLength - 28));
    }

    if (method === "ultrasound") {
      if (!ultrasoundDate || !pregnancyLength)
        throw "Fill ultrasound details.";
      const us = new Date(ultrasoundDate);
      estimatedDue = new Date(us);
      estimatedDue.setDate(us.getDate() + (280 - pregnancyLength * 7));
    }

    if (method === "conception") {
      if (!conceptionDate) throw "Enter conception date.";
      const c = new Date(conceptionDate);
      estimatedDue = new Date(c);
      estimatedDue.setDate(c.getDate() + 266);
    }

    if (method === "ivf") {
      if (!ivfDate) throw "Enter IVF transfer date.";
      const ivf = new Date(ivfDate);
      estimatedDue = new Date(ivf);
      estimatedDue.setDate(ivf.getDate() + 266 - Number(embryoAge));
    }

    // ---------- PREGNANCY ENGINE ----------

    const pregnancyStart = new Date(estimatedDue);
    pregnancyStart.setDate(pregnancyStart.getDate() - 280);

    const today = new Date();
    const diffDays = Math.floor(
      (today - pregnancyStart) / (1000 * 60 * 60 * 24)
    );

    const currentWeek = Math.floor(diffDays / 7) + 1;
    const currentDays = diffDays % 7;

    const progressPercent = Math.min(
      Math.round((diffDays / 280) * 100),
      100
    );

    let trimester = "";
    if (currentWeek <= 12) trimester = "First Trimester";
    else if (currentWeek <= 27) trimester = "Second Trimester";
    else trimester = "Third Trimester";

    const conceptionCalc = new Date(pregnancyStart);
    conceptionCalc.setDate(conceptionCalc.getDate() + 14);

    // Milestones
    const milestones = {
      3: "Baby conceived",
      4: "Pregnancy test positive",
      6: "Heartbeat detectable by ultrasound",
      13: "Miscarriage risk decreases",
      18: "Baby movement noticeable",
      23: "Premature baby may survive",
      28: "Baby can breathe",
      38: "Full Term"
    };

    // Generate 42-week table
    const weeks = [];

    for (let i = 1; i <= 42; i++) {
      const start = new Date(pregnancyStart);
      start.setDate(start.getDate() + (i - 1) * 7);

      const end = new Date(start);
      end.setDate(start.getDate() + 6);

      let tri = "";
      if (i <= 12) tri = "First";
      else if (i <= 27) tri = "Second";
      else tri = "Third";

      weeks.push({
        week: i,
        start,
        end,
        trimester: tri,
        milestone: milestones[i] || "",
        isCurrent: i === currentWeek
      });
    }

    setResult({
      dueDate: estimatedDue,
      currentWeek,
      currentDays,
      trimester,
      progressPercent,
      conceptionDate: conceptionCalc,
      weeks
    });

  } catch (err) {
    setError(err);
  }
};



const resetCalculator = () => {
  setDueDate(getToday());
  setLastPeriod(getToday());
  setUltrasoundDate(getToday());
  setConceptionDate(getToday());
  setIvfDate(getToday());

  setResult(null);
  setError("");
};

  return (
    <div className="container-fluid px-0">

      {/* Method Dropdown */}
      <div className="mb-3 d-flex align-items-center gap-3">
  <label
    className="fw-semibold mb-0"
    style={{ width: "280px" }}
  >
    Calculate Based On
  </label>

  <select
    className="form-select form-select-lg"
    style={{ width: "250px" }}
    value={method}
    onChange={(e) => setMethod(e.target.value)}
  >
    <option value="due">Due Date</option>
    <option value="lastPeriod">Last Period</option>
    <option value="ultrasound">Ultrasound</option>
    <option value="conception">Conception Date</option>
    <option value="ivf">IVF Transfer Date</option>
  </select>
</div>


      {/* Conditional Fields */}

    {method === "due" && (
  <div className="mb-3 d-flex align-items-center gap-3">
    <label
      className="fw-semibold mb-0"
      style={{ width: "280px" }}
    >
      Your Due Date
    </label>

   <div style={{ width: "250px", whiteSpace: "nowrap" }}>
  <CustomDateInput
    value={dueDate}
    onChange={setDueDate}
  />
</div>

  </div>
)}


      {method === "lastPeriod" && (
  <>
    <div className="mb-3 d-flex align-items-center gap-3">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        First Day of Your Last Period
      </label>

      <div style={{ width: "250px", whiteSpace: "nowrap"  }}>
        <CustomDateInput
          value={lastPeriod}
          onChange={setLastPeriod}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center gap-3">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        Average Length of Your Cycles
      </label>

      <input
        type="number"
        className="form-control form-control-lg"
        style={{ width: "250px" }}
        value={cycleLength}
        onChange={(e) =>
          setCycleLength(Number(e.target.value))
        }
      />
    </div>
  </>
)}


      {method === "ultrasound" && (
  <>
    <div className="mb-3 d-flex align-items-center gap-3">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        Ultrasound Date
      </label>

      <div style={{ width: "250px", whiteSpace: "nowrap"  }}>
        <CustomDateInput
          value={ultrasoundDate}
          onChange={setUltrasoundDate}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center gap-3">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        Length of Pregnancy (weeks)
      </label>

      <input
        type="number"
        className="form-control form-control-lg"
        style={{ width: "250px" }}
        value={pregnancyLength}
        onChange={(e) =>
          setPregnancyLength(Number(e.target.value))
        }
      />
    </div>
  </>
)}

      {method === "conception" && (
  <div className="mb-3 d-flex align-items-center gap-3">
    <label
      className="fw-semibold mb-0"
      style={{ width: "280px" }}
    >
      Conception Date
    </label>

    <div style={{ width: "250px", whiteSpace: "nowrap"  }}>
      <CustomDateInput
        value={conceptionDate}
        onChange={setConceptionDate}
      />
    </div>
  </div>
)}

      {method === "ivf" && (
  <>
    <div className="mb-3 d-flex align-items-center gap-3">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        IVF Transfer Date
      </label>

      <div style={{ width: "250px", whiteSpace: "nowrap"  }}>
        <CustomDateInput
          value={ivfDate}
          onChange={setIvfDate}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center gap-3">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        Embryo Age
      </label>

      <select
        className="form-select form-select-lg"
        style={{ width: "250px" }}
        value={embryoAge}
        onChange={(e) =>
          setEmbryoAge(e.target.value)
        }
      >
        <option value="3">Day 3</option>
        <option value="5">Day 5</option>
        <option value="6">Day 6</option>
      </select>
    </div>
  </>
)}


      {error && (
        <div className="alert alert-danger mt-3">{error}</div>
      )}

      {result && (
  <>
    <div className="mt-4 mb-4 rounded-3 p-4 shadow-sm bg-success-subtle border border-success text-center">
      <h5 className="fw-bold mb-3">Pregnancy Progress</h5>

      <div className="fs-4 fw-semibold">
        You are currently at week #{result.currentWeek}
        {" "}({result.currentWeek - 1} weeks {result.currentDays} days)
      </div>

      <div className="mt-2">
        You are in the <strong>{result.trimester}</strong>
      </div>

      <div className="mt-2">
        {result.progressPercent}% of pregnancy completed
      </div>

      <div className="progress mt-3">
        <div
          className="progress-bar bg-success"
          style={{ width: `${result.progressPercent}%` }}
        />
      </div>

      <div className="mt-3">
        <strong>Estimated Due Date:</strong>{" "}
        {result.dueDate.toDateString()}
      </div>

      <div>
        <strong>Likely Conception Date:</strong>{" "}
        {result.conceptionDate.toDateString()}
      </div>
    </div>

    <div className="table-responsive mb-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Week</th>
            <th>Date Range</th>
            <th>Trimester</th>
            <th>Milestone</th>
          </tr>
        </thead>
        <tbody>
          {result.weeks.map((w) => (
            <tr
              key={w.week}
              className={w.isCurrent ? "table-success" : ""}
            >
              <td>Week {w.week}</td>
              <td>
                {w.start.toDateString()} - {w.end.toDateString()}
              </td>
              <td>{w.trimester}</td>
              <td>{w.milestone}</td>
            </tr>
          ))}
        </tbody>
      </table>🔴Note: Results are estimates based on average 40-week single pregnancy. Actual delivery dates vary. Always consult your healthcare provider.
    </div>
  </>
)}

<div className="d-grid d-sm-flex gap-2 mt-3 mb-4">
  <button
    className="btn btn-success btn-lg w-100"
    onClick={calculate}
  >
    Calculate
  </button>

  <button
    className="btn btn-outline-secondary btn-lg w-100"
    onClick={resetCalculator}
  >
    Reset
  </button>
</div>


    </div>
  );
}

export default PregnancyCalculator;
