import { Link } from "react-router-dom";
import { otherCalculators } from "../data/otherCalculators.config";

/**
 * UI-only categorization
 * (config ko touch nahi karte)
 */
const utilityCategories = [
  {
    title: "Date & Time",
    calculators: [
      "Age Calculator",                
"Date Calculator",
"Time Calculator",
"Hours Calculator",
"Time Card Calculator",
"Time Zone Calculator",
"Time Duration Calculator",
"Day Counter",
"Day of the Week Calculator",

    ]

  },
  {
    title: "Transportation",
    calculators: [
      "Fuel Cost Calculator",
     "Gas Mileage Calculator",
      "Tire Size Calculator",
    ]
  },
  {
    title: "Everyday Utility",
    calculators: [
      "GPA Calculator",
     "Grade Calculator",
     "Tip Calculator",
     "Sleep Calculator",
    ]
  },
  {
    title: "Measurements",
    calculators: [
      "Height Calculator",
      "Density Calculator",
      "Weight Calculator",
      "Speed Calculator",
      "Roman Numeral Converter",
      "Voltage Drop Calculator",

    ]
  },
  {
    title: "Internet",
    calculators: [
      "IP Subnet Calculator",
"Password Generator",
"Bandwidth Calculator",

    ]
  },
  {
    title: "Weather",
    calculators: [
     " Wind Chill Calculator",
"Heat Index Calculator",
"Dew Point Calculator",

    ]
  },
  {
    title: "Housing and Building",
    calculators: [
     "Concrete Calculator",
"Square Footage Calculator",
"Roofing Calculator",
"Tile Calculator",
"Mulch Calculator",
"Gravel Calculator",

    ]
  },
  {
    title: "Entertainment",
    calculators: [
    "Dice Roller",
    "Love Calculator",

    ]
  },

];

/**
 * name → slug map (runtime)
 * sitemap / config safe
 */
const otherCalculatorsMap = otherCalculators.reduce((acc, calc) => {
  acc[calc.name] = calc.slug;
  return acc;
}, {});

export default function Utility() {
  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/calculators">All Calculators</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Utility
          </li>
        </ol>
      </nav>

      <h1 className="mb-3">Utility Calculators</h1>
      <h6 className="mb-4 text-muted">
        Everyday useful calculators for date, time, finance, health, and general
        purposes.
      </h6>

      {utilityCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h3 className="mb-3">{category.title}</h3>

          <div className="row g-3">
            {category.calculators.map((calc, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{calc}</h6>

                    <Link
                      to={`/${otherCalculatorsMap[calc]}`}
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
