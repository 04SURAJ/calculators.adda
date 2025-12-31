import { useState } from "react";


const gradePointsMap = {

  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  D: 1.0,
  F: 0.0,
};

function GpaCalculator() {

  const [courses, setCourses] = useState([
    { name: "", credits: "", grade: "" },
  ]);
  const [gpa, setGpa] = useState(null);
  const [error, setError] = useState("");

  const addCourse = () => {
    setCourses([...courses, { name: "", credits: "", grade: "" }]);
  };

  const removeCourse = (index) => {
    const updated = courses.filter((_, i) => i !== index);
    setCourses(updated.length ? updated : [{ name: "", credits: "", grade: "" }]);
  };

  const updateCourse = (index, field, value) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    for (const course of courses) {
      const credits = parseFloat(course.credits);
      const gradePoint = gradePointsMap[course.grade];

      if (!credits || credits <= 0 || gradePoint === undefined) {
        setError("Please enter valid credits and select grades for all courses.");
        setGpa(null);
        return;
      }

      totalCredits += credits;
      totalPoints += credits * gradePoint;
    }

    setError("");

    const calculatedGpa = (totalPoints / totalCredits).toFixed(2);
    setGpa(calculatedGpa);
  };

  const resetCalculator = () => {
    setCourses([{ name: "", credits: "", grade: "" }]);
    setGpa(null);
    setError("");
  };

  return (
 

     
<>
 {/* Course Rows */}
      {courses.map((course, index) => (
        <div className="row g-2 mb-2" key={index}>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Course name"
              value={course.name}
              onChange={(e) =>
                updateCourse(index, "name", e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              min="0"
              step="0.5"
              className="form-control"
              placeholder="Credits"
              value={course.credits}
              onChange={(e) =>
                updateCourse(index, "credits", e.target.value)
              }
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={course.grade}
              onChange={(e) =>
                updateCourse(index, "grade", e.target.value)
              }
            >
              <option value="">Grade</option>
              {Object.keys(gradePointsMap).map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            {courses.length > 1 && (
              <button
                className="btn btn-outline-danger w-100"
                onClick={() => removeCourse(index)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Actions */}
      <div className="d-flex gap-2 my-3 flex-wrap">
        <button className="btn btn-outline-primary" onClick={addCourse}>
          + Add Course
        </button>
        <button className="btn btn-primary" onClick={calculateGpa}>
          Calculate GPA
        </button>
        <button className="btn btn-outline-secondary" onClick={resetCalculator}>
          Reset
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Result */}
      {gpa && (
        <div className="border-top pt-3">
          <h2 className="h6 mb-2">Your GPA</h2>
          <p className="fs-4 fw-bold">{gpa}</p>
        </div>
      )}     
</>    
      );
}

export default GpaCalculator;
