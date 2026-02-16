import { useState } from "react";
import CustomDateInput from "./CustomDateInput";

function PeriodCalculator() {

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [lastPeriod, setLastPeriod] = useState(getToday());
  const [periodLength, setPeriodLength] = useState(5);
  const [cycleLength, setCycleLength] = useState(28);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    try {
      if (!lastPeriod)
        throw "Please select the first day of your last period.";

      if (cycleLength < 21 || cycleLength > 45)
        throw "Cycle length should be between 21 and 45 days.";

      if (periodLength < 1 || periodLength > 10)
        throw "Period length should be between 1 and 10 days.";

      const lmp = new Date(lastPeriod);
      const cycles = [];

      for (let i = 0; i < 6; i++) {

        // Period Start
        const periodStart = new Date(lmp);
        periodStart.setDate(lmp.getDate() + (cycleLength * i));

        // Period End
        const periodEnd = new Date(periodStart);
        periodEnd.setDate(periodStart.getDate() + (periodLength - 1));

        // Ovulation
        const ovulation = new Date(periodStart);
        ovulation.setDate(periodStart.getDate() + (cycleLength - 14));

        // Ovulation Window (-2 to +2)
        const ovulationStart = new Date(ovulation);
        ovulationStart.setDate(ovulation.getDate() - 2);

        const ovulationEnd = new Date(ovulation);
        ovulationEnd.setDate(ovulation.getDate() + 2);

        const formatRange = (start, end) =>
          `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${end.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;

        cycles.push({
          period: formatRange(periodStart, periodEnd),
          ovulation: formatRange(ovulationStart, ovulationEnd)
        });
      }

      setResult(cycles);

    } catch (err) {
      setError(err);
    }
  };

  const resetCalculator = () => {
    setLastPeriod(getToday());
    setPeriodLength(5);
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

      {/* Period Length */}
      <div className="mb-3 d-flex align-items-center gap-3">
        <label
          className="fw-semibold mb-0 text-nowrap"
          style={{ width: "300px" }}
        >
          How long did it last?
        </label>

        <input
          type="number"
          className="form-control form-control-lg w-25"
          value={periodLength}
          onChange={(e) =>
            setPeriodLength(Number(e.target.value))
          }
        />
        <span>days</span>
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
          <h5 className="fw-bold mb-3 text-center">
            Important dates for the next 6 cycles:
          </h5>

          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-success">
                <tr>
                  <th>Period</th>
                  <th>Most Probable Ovulation Days</th>
                </tr>
              </thead>
              <tbody>
                {result.map((cycle, index) => (
                  <tr key={index}>
                    <td>{cycle.period}</td>
                    <td>{cycle.ovulation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default PeriodCalculator;
