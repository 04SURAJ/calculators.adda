import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function GradeCalculator() {
  const seo = calculatorsSeo["grade-calculator"];

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
   
   <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
 {/* Rows */}
      {items.map((item, index) => (
        <div className="row g-2 mb-2" key={index}>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Item name"
              value={item.name}
              onChange={(e) =>
                updateItem(index, "name", e.target.value)
              }
            />
          </div>

          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Score"
              value={item.score}
              onChange={(e) =>
                updateItem(index, "score", e.target.value)
              }
            />
          </div>

          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Max"
              value={item.max}
              onChange={(e) =>
                updateItem(index, "max", e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Weight (%)"
              value={item.weight}
              onChange={(e) =>
                updateItem(index, "weight", e.target.value)
              }
            />
          </div>

          <div className="col-md-2">
            {items.length > 1 && (
              <button
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
      <div className="d-flex gap-2 my-3 flex-wrap">
        <button className="btn btn-outline-primary" onClick={addItem}>
          + Add Item
        </button>
        <button className="btn btn-primary" onClick={calculateGrade}>
          Calculate Grade
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
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
    </CalculatorLayout>
    
      );
}

export default GradeCalculator;
