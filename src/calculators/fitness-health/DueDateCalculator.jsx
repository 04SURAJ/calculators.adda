import { useState } from "react";
import CustomDateInput from "./CustomDateInput";

function DueDateCalculator() {

  // ✅ Default method = Last Period
  const [method, setMethod] = useState("lastPeriod");

  const [cycleLength, setCycleLength] = useState(28);
  const [pregnancyLength, setPregnancyLength] = useState("");
  const [embryoAge, setEmbryoAge] = useState("3");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [lastPeriod, setLastPeriod] = useState(getToday());
  const [ultrasoundDate, setUltrasoundDate] = useState(getToday());
  const [conceptionDate, setConceptionDate] = useState(getToday());
  const [ivfDate, setIvfDate] = useState(getToday());

  const babyData = {
  23: {
    lengthIn: "11.38 inches (28.9 cm)",
    weight: "1.1 pounds (501 grams)"
  }
};

  const calculate = () => {
    setError("");
    setResult(null);

    try {
      let estimatedDue;

      // LAST PERIOD
      if (method === "lastPeriod") {
        if (!lastPeriod) throw "Please enter last period date.";
        const lmp = new Date(lastPeriod);
        estimatedDue = new Date(lmp);
        estimatedDue.setDate(lmp.getDate() + 280 + (cycleLength - 28));
      }

      // ULTRASOUND
      if (method === "ultrasound") {
        if (!ultrasoundDate || !pregnancyLength)
          throw "Fill ultrasound details.";
        const us = new Date(ultrasoundDate);
        estimatedDue = new Date(us);
        estimatedDue.setDate(us.getDate() + (280 - pregnancyLength * 7));
      }

      // CONCEPTION DATE
      if (method === "conception") {
        if (!conceptionDate) throw "Enter conception date.";
        const c = new Date(conceptionDate);
        estimatedDue = new Date(c);
        estimatedDue.setDate(c.getDate() + 266);
      }

      // IVF TRANSFER DATE
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
  babyInfo: babyData[currentWeek] || null,
  weeks
});


    } catch (err) {
      setError(err);
    }
  };

  const resetCalculator = () => {
    setLastPeriod(getToday());
    setUltrasoundDate(getToday());
    setConceptionDate(getToday());
    setIvfDate(getToday());
    setCycleLength(28);
    setPregnancyLength("");
    setEmbryoAge("3");
    setMethod("lastPeriod");
    setResult(null);
    setError("");
  };

  return (
    <div className="container-fluid px-0">

      {/* Method Dropdown */}
      <div className="mb-3 d-flex align-items-center">
  <label
    className="fw-semibold mb-0"
    style={{ width: "300px" }}
  >
    Calculate Based On
  </label>

  <select
    className="form-select form-select-lg"
    style={{ width: "250px" }}
    value={method}
    onChange={(e) => setMethod(e.target.value)}
  >
    <option value="lastPeriod">Last Period</option>
    <option value="ultrasound">Ultrasound</option>
    <option value="conception">Conception Date</option>
    <option value="ivf">IVF Transfer Date</option>
  </select>
</div>


      {/* Conditional Fields */}

      {method === "lastPeriod" && (
  <>
    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "300px" }}
      >
        First Day of Your Last Period
      </label>

      <div style={{ width: "250px", whiteSpace: "nowrap" }}>
        <CustomDateInput
          value={lastPeriod}
          onChange={setLastPeriod}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "300px" }}
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
    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "300px" }}
      >
        Ultrasound Date
      </label>

      <div style={{ width: "250px" , whiteSpace: "nowrap"}}>
        <CustomDateInput
          value={ultrasoundDate}
          onChange={setUltrasoundDate}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "300px" }}
      >
        Length of Pregnancy at the Time (weeks)
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
  <div className="mb-3 d-flex align-items-center">
    <label
      className="fw-semibold mb-0"
      style={{ width: "300px" }}
    >
      Conception Date
    </label>

    <div style={{ width: "250px" , whiteSpace: "nowrap"}}>
      <CustomDateInput
        value={conceptionDate}
        onChange={setConceptionDate}
      />
    </div>
  </div>
)}
{method === "ivf" && (
  <>
    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "300px" }}
      >
        IVF Transfer Date
      </label>

      <div style={{ width: "250px", whiteSpace: "nowrap" }}>
        <CustomDateInput
          value={ivfDate}
          onChange={setIvfDate}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "300px" }}
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

      {/* RESULT UI SAME AS YOUR CODE — KEEPING EXACTLY SAME */}

      {result && (
  <>
    <div className="mt-4 mb-4 rounded-3 p-4 shadow-sm bg-success-subtle border border-success text-center">

      <h4 className="fw-bold mb-3">Result</h4>

       <div className="fs-4 fw-semibold">
        <strong>The estimated due date is </strong>
        {result.dueDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        })}.
      </div>

      <div className="mt-2">
        You are currently at <strong>week #{result.currentWeek}</strong> (
        {result.currentWeek - 1} weeks {result.currentDays} days or{" "}
        {Math.floor(result.currentWeek / 4)} months{" "}
        {result.currentDays} days) of pregnancy.
      </div>

      <div className="mt-2">
        You are in the <strong>{result.trimester.toLowerCase()}</strong>.
      </div>

      {result.babyInfo && (
        <div className="mt-2"p>
          On average, your baby is around{" "}
          <strong>{result.babyInfo.lengthIn}</strong> long and weighs around{" "}
          <strong>{result.babyInfo.weight}</strong>.
        </div>
      )}

      <div className="mt-2">
        Your baby was likely conceived on{" "}
        <strong>
          {result.conceptionDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}
        </strong>
      </div>

      <div className="mt-2">
        You are <strong>{result.progressPercent}%</strong> of the way through
        your pregnancy.
      </div>

      <div className="progress mb-4">
        <div
          className="progress-bar bg-success"
          style={{ width: `${result.progressPercent}%` }}
        >
          {result.progressPercent}%
        </div>
      </div>
    </div>

    {/* 42 Week Table */}

    <div className="table-responsive mt-4">
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
            <tr
              key={w.week}
              className={w.isCurrent ? "table-success fw-bold" : ""}
            >
              <td>Week {w.week}</td>
              <td>
                {w.start.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}{" "}
                -{" "}
                {w.end.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
                {w.isCurrent && " (today)"}
              </td>
              <td>{w.trimester.toLowerCase()}</td>
              <td>{w.milestone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3 small text-muted">
        Note: The results of this calculator are estimations based on averages
        for single pregnancy. The results for twin pregnancy or multiple
        pregnancy are different.
      </div>
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

export default DueDateCalculator;
