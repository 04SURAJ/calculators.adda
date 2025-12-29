import { useState } from "react";
import CalculatorLayout from "../../layouts/CalculatorLayout";
import { calculatorsSeo } from "../../data/calculatorsSeo.config";

function PasswordGenerator() {
  const seo = calculatorsSeo["password-generator"];

  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const generatePassword = () => {
    let charSet = "";
    if (includeUpper) charSet += upperChars;
    if (includeLower) charSet += lowerChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (!charSet) {
      setError("Select at least one character type.");
      setPassword("");
      return;
    }

    setError("");
    let pwd = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      pwd += charSet[randomIndex];
    }
    setPassword(pwd);
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  const resetGenerator = () => {
    setLength(12);
    setIncludeUpper(true);
    setIncludeLower(true);
    setIncludeNumbers(true);
    setIncludeSymbols(false);
    setPassword("");
    setError("");
  };

  return (
   

  

    <CalculatorLayout
      title={seo.title}
      description={seo.description}
    >
    {/* Length */}
      <div className="mb-3">
        <label className="form-label">Length</label>
        <input
          type="number"
          className="form-control"
          min="4"
          max="128"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      {/* Options */}
      <div className="form-check mb-1">
        <input
          className="form-check-input"
          type="checkbox"
          checked={includeUpper}
          onChange={(e) => setIncludeUpper(e.target.checked)}
          id="upperCheck"
        />
        <label className="form-check-label" htmlFor="upperCheck">
          Include Uppercase (A-Z)
        </label>
      </div>
      <div className="form-check mb-1">
        <input
          className="form-check-input"
          type="checkbox"
          checked={includeLower}
          onChange={(e) => setIncludeLower(e.target.checked)}
          id="lowerCheck"
        />
        <label className="form-check-label" htmlFor="lowerCheck">
          Include Lowercase (a-z)
        </label>
      </div>
      <div className="form-check mb-1">
        <input
          className="form-check-input"
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          id="numberCheck"
        />
        <label className="form-check-label" htmlFor="numberCheck">
          Include Numbers (0-9)
        </label>
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
          id="symbolCheck"
        />
        <label className="form-check-label" htmlFor="symbolCheck">
          Include Symbols (!@#$…)
        </label>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Buttons */}
      <div className="d-flex gap-2 mb-3 flex-wrap">
        <button className="btn btn-primary" onClick={generatePassword}>
          Generate
        </button>
        <button className="btn btn-outline-secondary" onClick={copyToClipboard}>
          Copy
        </button>
        <button className="btn btn-outline-warning" onClick={resetGenerator}>
          Reset
        </button>
      </div>

      {/* Password Result */}
      {password && (
        <div className="alert alert-success">
          <strong>Password:</strong> {password}
        </div>
      )}     
    </CalculatorLayout>  );
}

export default PasswordGenerator;
