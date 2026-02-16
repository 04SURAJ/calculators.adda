import { useState } from "react";
import CustomDateInput from "./CustomDateInput";

function ConceptionCalculator() {

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [lastPeriod, setLastPeriod] = useState(getToday());
  const [cycleLength, setCycleLength] = useState(28);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    try {
      if (!lastPeriod)
        throw "Please select the first day of your last period.";

      if (!cycleLength || cycleLength < 21 || cycleLength > 45)
        throw "Cycle length should be between 21 and 45 days.";

      const lmp = new Date(lastPeriod);

      // Ovulation
      const ovulation = new Date(lmp);
      ovulation.setDate(lmp.getDate() + (cycleLength - 14));

      // Ovulation Window (-2 to +1)
      const ovulationStart = new Date(ovulation);
      ovulationStart.setDate(ovulation.getDate() - 2);

      const ovulationEnd = new Date(ovulation);
      ovulationEnd.setDate(ovulation.getDate() + 1);

      // Most Probable Conception Days (-1 to +4)
      const conceptionStart = new Date(ovulation);
      conceptionStart.setDate(ovulation.getDate() - 1);

      const conceptionEnd = new Date(ovulation);
      conceptionEnd.setDate(ovulation.getDate() + 4);

      // Best Intercourse Days (-4 to +1)
      const intercourseStart = new Date(ovulation);
      intercourseStart.setDate(ovulation.getDate() - 4);

      const intercourseEnd = new Date(ovulation);
      intercourseEnd.setDate(ovulation.getDate() + 1);

      // Pregnancy Test (+10 days)
      const pregnancyTest = new Date(ovulation);
      pregnancyTest.setDate(ovulation.getDate() + 10);

      // Next Period
      const nextPeriod = new Date(lmp);
      nextPeriod.setDate(lmp.getDate() + cycleLength);

      // Due Date (38 weeks from conception)
      const dueDate = new Date(ovulation);
      dueDate.setDate(ovulation.getDate() + 266);

      const format = (date) =>
        date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

      setResult({
        conceptionDays: `${format(conceptionStart)} - ${format(conceptionEnd)}`,
        ovulationWindow: `${format(ovulationStart)} - ${format(ovulationEnd)}`,
        intercourseWindow: `${format(intercourseStart)} - ${format(intercourseEnd)}`,
        pregnancyTest: format(pregnancyTest),
        nextPeriod: format(nextPeriod),
        dueDate: format(dueDate),
      });

    } catch (err) {
      setError(err);
    }
  };

  const resetCalculator = () => {
    setLastPeriod(getToday());
    setCycleLength(28);
    setResult(null);
    setError("");
  };

  return (
    <div className="container-fluid px-0">

      {/* Last Period */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label
          className="fw-semibold mb-0 text-nowrap"
          style={{ width: "300px" }}
        >
          First Day of Your Last Period
        </label>

        <CustomDateInput
          value={lastPeriod}
          onChange={setLastPeriod}
        />
      </div>

      {/* Cycle Length */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label
          className="fw-semibold mb-0 text-nowrap"
          style={{ width: "300px" }}
        >
          Average Length of Cycles
        </label>

        <input
          type="number"
          className="form-control form-control-lg w-25"
          value={cycleLength}
          onChange={(e) =>
            setCycleLength(Number(e.target.value))
          }
        />
        <span>days</span>
      </div>

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4 mb-4 rounded-3 p-4 shadow-sm bg-success-subtle border border-success">
          <h5 className="fw-bold mb-3 text-center">Result</h5>

          <div className="row gy-2">

            <div className="col-12">
              <strong>Most Probable Conception Days</strong><br />
              {result.conceptionDays}
            </div>

            <div className="col-12">
              <strong>Ovulation Window</strong><br />
              {result.ovulationWindow}
            </div>

            <div className="col-12">
              <strong>Best Intercourse Days for Pregnancy</strong><br />
              {result.intercourseWindow}
            </div>

            <div className="col-12">
              <strong>Pregnancy Test</strong><br />
              {result.pregnancyTest}
            </div>

            <div className="col-12">
              <strong>Next Period Start</strong><br />
              {result.nextPeriod}
            </div>

            <div className="col-12">
              <strong>Due Date If Pregnant</strong><br />
              {result.dueDate}
            </div>

          </div>
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

export default ConceptionCalculator;
