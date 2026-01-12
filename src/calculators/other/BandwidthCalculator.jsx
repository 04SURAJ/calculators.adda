import { useState } from "react";

function BandwidthCalculator() {

  const [fileSize, setFileSize] = useState(""); // in MB
  const [time, setTime] = useState(""); // in seconds
  const [unit, setUnit] = useState("Mbps"); // Mbps or MB/s
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateBandwidth = () => {
    const size = parseFloat(fileSize);
    const t = parseFloat(time);

    if (isNaN(size) || size <= 0 || isNaN(t) || t <= 0) {
      setError("Please enter valid positive numbers for file size and time.");
      setResult(null);
      return;
    }

    setError("");

    let bandwidth;
    if (unit === "Mbps") {
      // Convert MB to Megabits: 1 byte = 8 bits
      bandwidth = (size * 8) / t; // Mbps
      bandwidth = bandwidth.toFixed(2) + " Mbps";
    } else {
      // MB/s
      bandwidth = (size / t).toFixed(2) + " MB/s";
    }

    setResult(bandwidth);
  };

  const resetCalculator = () => {
    setFileSize("");
    setTime("");
    setResult(null);
    setError("");
  };

  return (
   

      
       <>
<div className="row g-2 mb-3">
  <div className="col-md-6">
    <label htmlFor="fileSizeInput" className="form-label fw-semibold">
      File Size (MB)
    </label>
    <input
      id="fileSizeInput"
      type="number"
      className="form-control"
      placeholder="File Size (MB)"
      value={fileSize}
      onChange={(e) => setFileSize(e.target.value)}
    />
  </div>

  <div className="col-md-6">
    <label htmlFor="timeInput" className="form-label fw-semibold">
      Transfer Time (seconds)
    </label>
    <input
      id="timeInput"
      type="number"
      className="form-control"
      placeholder="Transfer Time (seconds)"
      value={time}
      onChange={(e) => setTime(e.target.value)}
    />
  </div>
</div>

<div className="mb-3">
  <label htmlFor="unitSelect" className="form-label fw-semibold">
    Output Unit
  </label>
  <select
    id="unitSelect"
    className="form-select"
    value={unit}
    onChange={(e) => setUnit(e.target.value)}
  >
    <option value="Mbps">Mbps</option>
    <option value="MBps">MB/s</option>
  </select>
</div>


      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateBandwidth}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <strong>Bandwidth:</strong> {result}
        </div>

        
      )}     
      </>
    
  );
}

export default BandwidthCalculator;
