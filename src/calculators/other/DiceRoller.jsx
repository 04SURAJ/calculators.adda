import { useState } from "react";


function DiceRoller() {

  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumSides] = useState(6);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const rollDice = () => {
    const nDice = parseInt(numDice);
    const nSides = parseInt(numSides);

    if (isNaN(nDice) || nDice <= 0 || isNaN(nSides) || nSides <= 0) {
      setError("Enter valid numbers for dice and sides.");
      setResults([]);
      return;
    }

    setError("");
    const rolls = [];

    for (let i = 0; i < nDice; i++) {
      rolls.push(Math.floor(Math.random() * nSides) + 1);
    }

    setResults(rolls);
  };

  const resetRoller = () => {
    setNumDice(1);
    setNumSides(6);
    setResults([]);
    setError("");
  };

  return (
   

  <>

      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <label className="form-label">Number of Dice</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={numDice}
            onChange={(e) => setNumDice(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Number of Sides per Die</label>
          <input
            type="number"
            className="form-control"
            min="2"
            value={numSides}
            onChange={(e) => setNumSides(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={rollDice}>
          Roll Dice
        </button>
        <button className="btn btn-outline-secondary" onClick={resetRoller}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {results.length > 0 && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Results</h2>
          <p>
            <strong>Individual Rolls:</strong> {results.join(", ")}
          </p>
          <p>
            <strong>Total Sum:</strong> {results.reduce((a, b) => a + b, 0)}
          </p>
        </div>
      )}     
</>
  );
}

export default DiceRoller;
