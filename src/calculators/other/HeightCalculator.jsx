import { useState } from "react";


function HeightCalculator() {
  

  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cm, setCm] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const convertToCm = () => {
    const f = parseFloat(feet);
    const i = parseFloat(inches);

    if (isNaN(f) || f < 0 || isNaN(i) || i < 0) {
      setError("Please enter valid feet and inches.");
      setResult(null);
      return;
    }

    const totalInches = f * 12 + i;
    const cmValue = (totalInches * 2.54).toFixed(2);

    setError("");
    setResult(`${cmValue} cm`);
  };

  const convertToFeet = () => {
    const cmValue = parseFloat(cm);

    if (isNaN(cmValue) || cmValue <= 0) {
      setError("Please enter a valid height in centimeters.");
      setResult(null);
      return;
    }

    const totalInches = cmValue / 2.54;
    const f = Math.floor(totalInches / 12);
    const i = (totalInches % 12).toFixed(1);

    setError("");
    setResult(`${f} ft ${i} in`);
  };

  const resetCalculator = () => {
    setFeet("");
    setInches("");
    setCm("");
    setResult(null);
    setError("");
  };

  return (
   

    <>

      {/* Feet to CM */}
      <div className="border rounded p-3 mb-3">
        <h2 className="h6 mb-2">Feet & Inches to Centimeters</h2>

        <div className="row g-2 mb-2">
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder="Feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder="Inches"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={convertToCm}>
          Convert to CM
        </button>
      </div>

      {/* CM to Feet */}
      <div className="border rounded p-3 mb-3">
        <h2 className="h6 mb-2">Centimeters to Feet & Inches</h2>

        <div className="mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Centimeters"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={convertToFeet}>
          Convert to Feet
        </button>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {result && (
        <div className="alert alert-success mt-3">
          <strong>Result:</strong> {result}
        </div>
      )}
     
  </>
  );
}

export default HeightCalculator;
