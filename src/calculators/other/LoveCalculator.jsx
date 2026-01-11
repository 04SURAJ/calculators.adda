import { useState } from "react";


function LoveCalculator() {
  

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) {
      setError("Please enter both names.");
      setResult(null);
      return;
    }

    setError("");

    // Simple deterministic "love score" based on character codes
    const sumCharCodes = (name) =>
      name
        .toLowerCase()
        .split("")
        .reduce((acc, c) => acc + c.charCodeAt(0), 0);

    const total = sumCharCodes(name1) + sumCharCodes(name2);
    const percentage = (total % 101); // 0 to 100%

    setResult(percentage);
  };

  const resetCalculator = () => {
    setName1("");
    setName2("");
    setResult(null);
    setError("");
  };

  return (
 

<>
    <div className="mb-3">
  <div className="mb-2">
    <label className="form-label fw-semibold">First Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter first name"
      value={name1}
      onChange={(e) => setName1(e.target.value)}
    />
  </div>

  <div>
    <label className="form-label fw-semibold">Second Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter second name"
      value={name2}
      onChange={(e) => setName2(e.target.value)}
    />
  </div>
</div>


      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-primary btn-lg w-100" onClick={calculateLove}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result !== null && (
        <div className="alert alert-success">
          <strong>Love Compatibility:</strong> {result}%
        </div>
      )}     
   </>
    );
}

export default LoveCalculator;
