import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function TipCalculator() {
  const seo = calculatorsSeo["tip-calculator"];

  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState(15);
  const [numPeople, setNumPeople] = useState(1);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);
    const people = parseInt(numPeople);

    if (isNaN(bill) || bill <= 0 || isNaN(tip) || tip < 0 || isNaN(people) || people <= 0) {
      setError("Please enter valid positive numbers.");
      setResult(null);
      return;
    }

    setError("");

    const tipAmount = (bill * tip) / 100;
    const total = bill + tipAmount;
    const perPerson = total / people;

    setResult({
      tipAmount: tipAmount.toFixed(2),
      total: total.toFixed(2),
      perPerson: perPerson.toFixed(2),
    });
  };

  const resetCalculator = () => {
    setBillAmount("");
    setTipPercent(15);
    setNumPeople(1);
    setResult(null);
    setError("");
  };

  return (
    
     
 <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
 <div className="mb-3">
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Bill Amount ($)"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Tip Percentage (%)"
          value={tipPercent}
          onChange={(e) => setTipPercent(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Number of People"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={calculateTip}>
          Calculate
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="alert alert-success">
          <p><strong>Tip Amount:</strong> ${result.tipAmount}</p>
          <p><strong>Total Bill:</strong> ${result.total}</p>
          {numPeople > 1 && <p><strong>Per Person:</strong> ${result.perPerson}</p>}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default TipCalculator;
