import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function RomanNumeralConverter() {
  const seo = calculatorsSeo["roman-numeral-converter"];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  const toRoman = (num) => {
    let res = "";
    for (let i = 0; i < romanMap.length; i++) {
      while (num >= romanMap[i].value) {
        res += romanMap[i].numeral;
        num -= romanMap[i].value;
      }
    }
    return res;
  };

  const fromRoman = (str) => {
    let s = str.toUpperCase();
    let num = 0;

    for (let i = 0; i < romanMap.length; i++) {
      while (s.indexOf(romanMap[i].numeral) === 0) {
        num += romanMap[i].value;
        s = s.slice(romanMap[i].numeral.length);
      }
    }

    if (s.length > 0) throw new Error("Invalid Roman numeral");
    return num;
  };

  const convert = () => {
    if (!input.trim()) {
      setError("Please enter a number or Roman numeral.");
      setResult("");
      return;
    }

    setError("");

    const numInput = parseInt(input);
    try {
      if (!isNaN(numInput)) {
        if (numInput <= 0 || numInput > 3999) {
          setError("Number must be between 1 and 3999.");
          setResult("");
          return;
        }
        setResult(toRoman(numInput));
      } else {
        setResult(fromRoman(input));
      }
    } catch (e) {
      setError(e.message);
      setResult("");
    }
  };

  const resetCalculator = () => {
    setInput("");
    setResult("");
    setError("");
  };

  return (
 

     

    <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
 <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter number or Roman numeral"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={convert}>
          Convert
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result !== "" && (
        <div className="alert alert-success">
          <strong>Result:</strong> {result}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default RomanNumeralConverter;
