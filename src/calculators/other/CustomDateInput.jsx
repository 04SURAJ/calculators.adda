import { useState, useEffect, useRef } from "react";

function CustomDateInput({ value, onChange, className = "" }) {
  const hiddenDateRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const years = [];
  for (let y = 1900; y <= currentYear + 1; y++) {
    years.push(y);
  }

  const parseInitial = () => {
    if (!value) {
      const today = new Date();
      return {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate()
      };
    }
    const [y, m, d] = value.split("-").map(Number);
    return { year: y, month: m - 1, day: d };
  };

  const initial = parseInitial();

  const [year, setYear] = useState(initial.year);
  const [month, setMonth] = useState(initial.month);
  const [day, setDay] = useState(initial.day);

  const getDaysInMonth = (m, y) => {
    return new Date(y, m + 1, 0).getDate();
  };

const maxDays = getDaysInMonth(month, year);
const safeDay = day > maxDays ? maxDays : day;



  useEffect(() => {
    const formatted =
      `${year}-${String(month + 1).padStart(2, "0")}-${String(safeDay)
.padStart(2, "0")}`;

    if (onChange) onChange(formatted);

    if (hiddenDateRef.current) {
      hiddenDateRef.current.value = formatted;
    }
  }, [year, month, day, safeDay]);

  const handleHiddenChange = (e) => {
    const val = e.target.value;
    if (!val) return;
    const [y, m, d] = val.split("-").map(Number);
    setYear(y);
    setMonth(m - 1);
    setDay(d);
  };

  const handleCalendarClick = () => {
    hiddenDateRef.current?.showPicker?.();
    hiddenDateRef.current?.click();
  };

  const days = [];
  for (let d = 1; d <= getDaysInMonth(month, year); d++) {
    days.push(d);
  }

  /* ===== Styles matching screenshot ===== */

 

  const selectStyle = {
    border: "1px solid #2c5d8f",
    background: "#fff",
    height: "38px",
    width: "70px",
    padding: "4px 8px",
    fontSize: "14px",
    borderRadius: "4px",
    marginRight: "4px",
    outline: "none"
  };

  const calendarStyle = {
    height: "36px",
    width: "40px",
    border: "1px solid #2c5d8f",
    borderRadius: "4px",
    background: "#fff",
    cursor: "pointer"
  };

  return (
    <div className={className} >
      <select
        value={month}
        onChange={(e) => setMonth(Number(e.target.value))}
        style={selectStyle}
      >
        {months.map((m, i) => (
          <option key={i} value={i}>{m}</option>
        ))}
      </select>

      <select
        value={safeDay}

        onChange={(e) => setDay(Number(e.target.value))}
        style={selectStyle}
      >
        {days.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        style={{ ...selectStyle, marginRight: "6px" }}
      >
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      <button
        type="button"
        onClick={handleCalendarClick}
        style={calendarStyle}
      >
        📅
      </button>

      <input
        type="date"
        ref={hiddenDateRef}
        onChange={handleHiddenChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default CustomDateInput;
