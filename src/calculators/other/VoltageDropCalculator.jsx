import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

// Approximate resistances in ohms per 1000 ft for copper wires at 75°C
const wireResistance = {
  "14": 2.525,
  "12": 1.588,
  "10": 0.999,
  "8": 0.628,
  "6": 0.395,
  "4": 0.248,
  "2": 0.156,
  "1": 0.124,
  "0": 0.0983,
};

function VoltageDropCalculator() {
  const seo = calculatorsSeo["voltage-drop-calculator"];

  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [length, setLength] = useState("");
  const [gauge, setGauge] = useState("14");
  const [phase, setPhase] = useState("single");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateVoltageDrop = () => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const L = parseFloat(length);

    if (isNaN(V) || V <= 0 || isNaN(I) || I <= 0 || isNaN(L) || L <= 0) {
      setError("Please enter valid positive numbers for voltage, current, and wire length.");
      setResult(null);
      return;
    }

    const resistancePer1000ft = wireResistance[gauge];
    if (!resistancePer1000ft) {
      setError("Wire gauge not supported.");
      setResult(null);
      return;
    }

    setError("");

    // Total resistance = (resistance per 1000 ft) * (length in ft / 1000) * 2 (round trip)
    const totalResistance = resistancePer1000ft * (L / 1000) * 2;

    // Voltage drop
    let Vdrop;
    if (phase === "single") {
      Vdrop = I * totalResistance;
    } else {
      // three-phase
      Vdrop = Math.sqrt(3) * I * totalResistance;
    }

    const percentDrop = ((Vdrop / V) * 100).toFixed(2);

    setResult({
      Vdrop: Vdrop.toFixed(2),
      percentDrop,
    });
  };

  const resetCalculator = () => {
    setVoltage("");
    setCurrent("");
    setLength("");
    setGauge("14");
    setPhase("single");
    setResult(null);
    setError("");
  };

  return (
   

<CalculatorLayout
      title={seo.title}
      description={seo.description}
    >

      <div className="row g-2 mb-3">
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Voltage (V)"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Current (A)"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Wire Length (ft)"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={gauge}
            onChange={(e) => setGauge(e.target.value)}
          >
            {Object.keys(wireResistance).map((g) => (
              <option key={g} value={g}>
                AWG {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Phase</label>
        <select
          className="form-select"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        >
          <option value="single">Single-phase</option>
          <option value="three">Three-phase</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={calculateVoltageDrop}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Result</h2>
          <p>
            <strong>Voltage Drop:</strong> {result.Vdrop} V
          </p>
          <p>
            <strong>Percent Drop:</strong> {result.percentDrop} %
          </p>
        </div>
      )}     
    </CalculatorLayout>  );
}

export default VoltageDropCalculator;
