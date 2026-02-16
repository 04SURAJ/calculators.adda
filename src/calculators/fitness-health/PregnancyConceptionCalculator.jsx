import { useState } from "react";
import CustomDateInput from "./CustomDateInput";

function PregnancyConceptionCalculator() {
  const [method, setMethod] = useState("due");
  const [cycleLength, setCycleLength] = useState(28);
  const [pregnancyLength, setPregnancyLength] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [dueDate, setDueDate] = useState(getToday());
  const [lastPeriod, setLastPeriod] = useState(getToday());
  const [ultrasoundDate, setUltrasoundDate] = useState(getToday());

  const calculate = () => {
    setError("");
    setResult(null);

    try {
      let estimatedDue;

      // ------------------- ESTIMATE DUE DATE -------------------

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

      // ------------------- CONCEPTION CALCULATION -------------------

      const conceptionCenter = new Date(estimatedDue);
      conceptionCenter.setDate(conceptionCenter.getDate() - 266);

      // Most probable conception range (±2 days)
      const mostProbStart = new Date(conceptionCenter);
      mostProbStart.setDate(mostProbStart.getDate() - 2);

      const mostProbEnd = new Date(conceptionCenter);
      mostProbEnd.setDate(mostProbEnd.getDate() + 2);

      // Possible conception range (±5 days)
      const possibleStart = new Date(conceptionCenter);
      possibleStart.setDate(possibleStart.getDate() - 5);

      const possibleEnd = new Date(conceptionCenter);
      possibleEnd.setDate(possibleEnd.getDate() + 5);

      // Intercourse dates (3 days before ovulation window)
      const intercourseMostStart = new Date(mostProbStart);
      intercourseMostStart.setDate(intercourseMostStart.getDate() - 3);

      const intercoursePossibleStart = new Date(possibleStart);
      intercoursePossibleStart.setDate(
        intercoursePossibleStart.getDate() - 5
      );

      setResult({
        mostProbStart,
        mostProbEnd,
        possibleStart,
        possibleEnd,
        intercourseMostStart,
        intercourseMostEnd: mostProbEnd,
        intercoursePossibleStart,
        intercoursePossibleEnd: possibleEnd
      });

    } catch (err) {
      setError(err);
    }
  };

  const resetCalculator = () => {
    setDueDate(getToday());
    setLastPeriod(getToday());
    setUltrasoundDate(getToday());
    setCycleLength(28);
    setPregnancyLength("");
    setResult(null);
    setError("");
  };

  return (
    <div className="container-fluid px-0">

      {/* Dropdown */}
      <div className="mb-3 d-flex align-items-center">
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
  </select>
</div>

      {/* Fields */}
      {method === "due" && (
  <div className="mb-3 d-flex align-items-center">
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
    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        First Day of Your Last Period
      </label>

      <div style={{ width: "250px" , whiteSpace: "nowrap"}}>
        <CustomDateInput
          value={lastPeriod}
          onChange={setLastPeriod}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center">
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
    <div className="mb-3 d-flex align-items-center">
      <label
        className="fw-semibold mb-0"
        style={{ width: "280px" }}
      >
        Ultrasound Date
      </label>

      <div style={{ width: "250px", whiteSpace: "nowrap" }}>
        <CustomDateInput
          value={ultrasoundDate}
          onChange={setUltrasoundDate}
        />
      </div>
    </div>

    <div className="mb-3 d-flex align-items-center">
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


      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      {/* RESULT SECTION */}
      {result && (
        <div className="mt-4 mb-4 rounded-3 p-4 shadow-sm bg-success-subtle border border-success text-center">
          <h5 className="fw-bold mb-3">Result</h5>

          <p>
            <strong>
              Most probable conception dates:
            </strong>{" "}
            {result.mostProbStart.toDateString()} -{" "}
            {result.mostProbEnd.toDateString()}
          </p>

          <p>
            <strong>
              Most probable dates of sexual intercourse that led to the pregnancy:
            </strong>{" "}
            {result.intercourseMostStart.toDateString()} -{" "}
            {result.intercourseMostEnd.toDateString()}
          </p>

          <p className="mt-3">
            <strong>Possible conception dates:</strong>{" "}
            {result.possibleStart.toDateString()} -{" "}
            {result.possibleEnd.toDateString()}
          </p>

          <p>
            <strong>
              Possible dates of sexual intercourse that led to the pregnancy:
            </strong>{" "}
            {result.intercoursePossibleStart.toDateString()} -{" "}
            {result.intercoursePossibleEnd.toDateString()}
          </p>

          <p className="mt-3 text-muted">
            The results of this calculator are estimation only.
          </p>
        </div>
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

export default PregnancyConceptionCalculator;
