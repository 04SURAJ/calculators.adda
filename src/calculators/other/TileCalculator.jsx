import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function TileCalculator() {
  const seo = calculatorsSeo["tile-calculator"];

  const [floorLength, setFloorLength] = useState("");
  const [floorWidth, setFloorWidth] = useState("");
  const [tileLength, setTileLength] = useState("");
  const [tileWidth, setTileWidth] = useState("");
  const [unit, setUnit] = useState("m"); // meters or feet
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateTiles = () => {
    const fl = parseFloat(floorLength);
    const fw = parseFloat(floorWidth);
    const tl = parseFloat(tileLength);
    const tw = parseFloat(tileWidth);

    if ([fl, fw, tl, tw].some((v) => isNaN(v) || v <= 0)) {
      setError("Please enter valid positive numbers for all fields.");
      setResult(null);
      return;
    }

    setError("");

    const floorArea = fl * fw;
    const tileArea = tl * tw;
    const tilesNeeded = Math.ceil(floorArea / tileArea);

    setResult(`${tilesNeeded} tiles`);
  };

  const resetCalculator = () => {
    setFloorLength("");
    setFloorWidth("");
    setTileLength("");
    setTileWidth("");
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
            placeholder={`Floor Length (${unit})`}
            value={floorLength}
            onChange={(e) => setFloorLength(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder={`Floor Width (${unit})`}
            value={floorWidth}
            onChange={(e) => setFloorWidth(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder={`Tile Length (${unit})`}
            value={tileLength}
            onChange={(e) => setTileLength(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder={`Tile Width (${unit})`}
            value={tileWidth}
            onChange={(e) => setTileWidth(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Unit</label>
        <select
          className="form-select"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="m">Meters</option>
          <option value="ft">Feet</option>
        </select>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={calculateTiles}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Tiles Needed:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default TileCalculator;
