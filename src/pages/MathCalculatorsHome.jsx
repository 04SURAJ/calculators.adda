import { Link } from "react-router-dom";
import { mathCalculatorsMap } from "../data/mathCalculators.config";

const mathCategories = [
  {
    title: "Basic Arithmetic Calculators",
    calculators: [
      "Basic Calculator",
      "Percentage Calculator",
      "Percentage Increase / Decrease Calculator",
      "Ratio Calculator",
      "Average Calculator",
      "Mean Calculator",
      "Median Calculator",
      "Mode Calculator",
      "Rounding Calculator",
      "Absolute Value Calculator"
    ]
  },
  /*
  {
    title: "Algebra Calculators",
    calculators: [
      "Linear Equation Solver",
      "Quadratic Equation Calculator",
      "Polynomial Calculator",
      "Factoring Calculator",
      "Simplifying Expressions Calculator",
      "Inequality Calculator",
      "System of Equations Calculator",
      "FOIL Calculator",
      "Algebraic Fraction Calculator"
    ]
  },
  {
    title: "Statistics & Probability Calculators",
    calculators: [
      "Standard Deviation Calculator",
      "Variance Calculator",
      "Probability Calculator",
      "Permutation Calculator",
      "Combination Calculator",
      "Z-Score Calculator",
      "Mean Deviation Calculator",
      "Confidence Interval Calculator",
      "Frequency Distribution Calculator"
    ]
  },
  {
    title: "Number Theory Calculators",
    calculators: [
      "Prime Number Checker",
      "Prime Factorization Calculator",
      "HCF (GCD) Calculator",
      "LCM Calculator",
      "Even or Odd Number Checker",
      "Divisibility Calculator",
      "Fibonacci Sequence Generator",
      "Factorial Calculator",
      "Perfect Number Checker"
    ]
  },
  {
    title: "Geometry Calculators",
    calculators: [
      "Area Calculator",
      "Perimeter Calculator",
      "Volume Calculator",
      "Surface Area Calculator",
      "Triangle Area Calculator",
      "Circle Calculator",
      "Rectangle Calculator",
      "Square Calculator",
      "Trapezium Calculator",
      "Polygon Area Calculator"
    ]
  },
  {
    title: "Trigonometry Calculators",
    calculators: [
      "Trigonometric Values Calculator",
      "Sine Calculator",
      "Cosine Calculator",
      "Tangent Calculator",
      "Right Triangle Calculator",
      "Pythagorean Theorem Calculator",
      "Law of Sines Calculator",
      "Law of Cosines Calculator",
      "Angle Converter"
    ]
  },
  {
    title: "Conversion Calculators",
    calculators: [
      "Length Converter",
      "Weight Converter",
      "Area Converter",
      "Volume Converter",
      "Speed Converter",
      "Time Converter",
      "Temperature Converter",
      "Number Base Converter",
      "Fraction to Decimal Converter"
    ]
  },
  {
    title: "Exponents & Logarithms",
    calculators: [
      "Power Calculator",
      "Exponent Calculator",
      "Logarithm Calculator",
      "Natural Log Calculator",
      "Scientific Notation Calculator",
      "Square Root Calculator",
      "Cube Root Calculator",
      "Nth Root Calculator"
    ]
  },
  {
    title: "Advanced & Special Math Calculators",
    calculators: [
      "Matrix Calculator",
      "Determinant Calculator",
      "Inverse Matrix Calculator",
      "Eigenvalue Calculator",
      "Vector Calculator",
      "Dot Product Calculator",
      "Cross Product Calculator",
      "Complex Number Calculator"
    ]
  },
  {
    title: "Series & Sequences",
    calculators: [
      "Arithmetic Progression Calculator",
      "Geometric Progression Calculator",
      "Harmonic Series Calculator",
      "Number Series Completion Calculator",
      "Sum of Series Calculator"
    ]
  },
  {
    title: "Exam & Academic Support",
    calculators: [
      "Percentage to Grade Converter",
      "Marks Calculator",
      "Score Calculator",
      "Weighted Average Calculator",
      "Exam Result Calculator"
    ]
  }
    */
];

export default function MathCalculatorsHome() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">Math & General Calculators</h1>
      <h6 className="mb-4">
        Explore a complete collection of free online math calculators covering
        arithmetic, algebra, statistics, geometry, trigonometry, and more.
      </h6>

      {mathCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h3 className="mb-3">{category.title}</h3>

          <div className="row g-3">
            {category.calculators.map((calc, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{calc}</h6>

                  <Link
  to={`/${mathCalculatorsMap[calc]}`}
  className="btn btn-outline-primary btn-sm mt-auto"
>
  Open
</Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
