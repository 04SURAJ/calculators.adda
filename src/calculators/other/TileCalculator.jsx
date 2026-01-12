import { useState } from "react";


function TileCalculator() {
  

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
    

 <>
<div className="row g-2 mb-3">
  <div className="col-md-3">
    <label htmlFor="floorLengthInput" className="form-label fw-semibold">
      Floor Length ({unit})
    </label>
    <input
      id="floorLengthInput"
      type="number"
      className="form-control"
      placeholder={`Floor Length (${unit})`}
      value={floorLength}
      onChange={(e) => setFloorLength(e.target.value)}
    />
  </div>

  <div className="col-md-3">
    <label htmlFor="floorWidthInput" className="form-label fw-semibold">
      Floor Width ({unit})
    </label>
    <input
      id="floorWidthInput"
      type="number"
      className="form-control"
      placeholder={`Floor Width (${unit})`}
      value={floorWidth}
      onChange={(e) => setFloorWidth(e.target.value)}
    />
  </div>

  <div className="col-md-3">
    <label htmlFor="tileLengthInput" className="form-label fw-semibold">
      Tile Length ({unit})
    </label>
    <input
      id="tileLengthInput"
      type="number"
      className="form-control"
      placeholder={`Tile Length (${unit})`}
      value={tileLength}
      onChange={(e) => setTileLength(e.target.value)}
    />
  </div>

  <div className="col-md-3">
    <label htmlFor="tileWidthInput" className="form-label fw-semibold">
      Tile Width ({unit})
    </label>
    <input
      id="tileWidthInput"
      type="number"
      className="form-control"
      placeholder={`Tile Width (${unit})`}
      value={tileWidth}
      onChange={(e) => setTileWidth(e.target.value)}
    />
  </div>
</div>

<div className="mb-3">
  <label htmlFor="unitSelect" className="form-label fw-semibold">
    Measurement Unit
  </label>
  <select
    id="unitSelect"
    className="form-select"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="m">Meters</option>
    <option value="ft">Feet</option>
  </select>
</div>


      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateTiles}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Tiles Needed:</strong> {result}
        </div>
      )}     
   </>
     );
}

export default TileCalculator;
