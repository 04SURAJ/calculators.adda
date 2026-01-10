import { useState } from "react";


function GradeCalculator() {
 

  const [items, setItems] = useState([
    { name: "", score: "", max: "", weight: "" },
  ]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const addItem = () => {
    setItems([...items, { name: "", score: "", max: "", weight: "" }]);
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated.length ? updated : [{ name: "", score: "", max: "", weight: "" }]);
  };

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const getLetterGrade = (percentage) => {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
  };

  const calculateGrade = () => {
    let totalWeight = 0;
    let weightedScore = 0;

    for (const item of items) {
      const score = parseFloat(item.score);
      const max = parseFloat(item.max);
      const weight = parseFloat(item.weight);

      if (
        !score ||
        !max ||
        !weight ||
        score < 0 ||
        max <= 0 ||
        weight <= 0 ||
        score > max
      ) {
        setError("Please enter valid scores, maximum values, and weights.");
        setResult(null);
        return;
      }

      totalWeight += weight;
      weightedScore += (score / max) * weight;
    }

    setError("");

    const percentage = ((weightedScore / totalWeight) * 100).toFixed(2);
    const letter = getLetterGrade(percentage);

    setResult({ percentage, letter });
  };

  const resetCalculator = () => {
    setItems([{ name: "", score: "", max: "", weight: "" }]);
    setResult(null);
    setError("");
  };

  return (
   
 <>
 {/* Rows */}
    {items.map((item, index) => (
  <div className="row g-2 mb-3" key={index}>
    {/* Item Name */}
    <div className="col-md-3">
      <label
        htmlFor={`item-name-${index}`}
        className="form-label fw-semibold"
      >
        Item Name
      </label>
      <input
        id={`item-name-${index}`}
        type="text"
        className="form-control"
        value={item.name}
        onChange={(e) =>
          updateItem(index, "name", e.target.value)
        }
      />
    </div>

    {/* Score */}
    <div className="col-md-2">
      <label
        htmlFor={`item-score-${index}`}
        className="form-label fw-semibold"
      >
        Score
      </label>
      <input
        id={`item-score-${index}`}
        type="number"
        className="form-control"
        value={item.score}
        onChange={(e) =>
          updateItem(index, "score", e.target.value)
        }
      />
    </div>

    {/* Max */}
    <div className="col-md-2">
      <label
        htmlFor={`item-max-${index}`}
        className="form-label fw-semibold"
      >
        Max
      </label>
      <input
        id={`item-max-${index}`}
        type="number"
        className="form-control"
        value={item.max}
        onChange={(e) =>
          updateItem(index, "max", e.target.value)
        }
      />
    </div>

    {/* Weight */}
    <div className="col-md-3">
      <label
        htmlFor={`item-weight-${index}`}
        className="form-label fw-semibold"
      >
        Weight (%)
      </label>
      <input
        id={`item-weight-${index}`}
        type="number"
        className="form-control"
        value={item.weight}
        onChange={(e) =>
          updateItem(index, "weight", e.target.value)
        }
      />
    </div>

    {/* Remove */}
    <div className="col-md-2 d-flex align-items-end">
      {items.length > 1 && (
        <button
          type="button"
          className="btn btn-outline-danger w-100"
          onClick={() => removeItem(index)}
        >
          Remove
        </button>
      )}
    </div>
  </div>
))}


      {/* Actions */}
      <div className="d-grid d-sm-flex gap-2 mb-4">
        <button className="btn btn-outline-primary btn-lg w-100" onClick={addItem}>
          + Add Item
        </button>
        <button className="btn btn-primary btn-lg w-100" onClick={calculateGrade}>
          Calculate Grade
        </button>
        <button className="btn btn-outline-secondary btn-lg w-100" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Result */}
      {result && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Final Result</h2>
          <p className="mb-1">
            <strong>Percentage:</strong> {result.percentage}%
          </p>
          <p className="fs-5 fw-bold">
            Letter Grade: {result.letter}
          </p>
        </div>
      )}     
</>    
      );
}

export default GradeCalculator;
