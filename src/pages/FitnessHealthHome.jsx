import { Link } from "react-router-dom";
import { fitnessHealthCalculatorsMap } from "../data/fitnessHealthCalculators.config";

const fitnessCategories = [
  {
    title: "Fitness Calculators",
    calculators: [
      "BMI Calculator",
      "Calorie Calculator",
      "BMR Calculator",
      "Body Fat Calculator"
    ]
  },
  // {
  //   title: "Nutrition & Health Calculators",
  //   calculators: [
  //     "Protein Intake Calculator",
  //     "Water Intake Calculator",
  //     "Ideal Weight Calculator"
  //   ]
  // },
  // {
  //   title: "Advanced Health Metrics",
  //   calculators: [
  //     "Heart Rate Calculator",
  //     "Lean Body Mass Calculator",
  //     "Weight Loss Calculator"
  //   ]
  // }
  
  {
    title: "Pregnancy Calculators",
    calculators: [
      "Pregnancy Calculator",
      "Pregnancy Weight Gain Calculator",
      "Pregnancy Conception Calculator",
      "Due Date Calculator",
      "Ovulation Calculator",
      "Conception Calculator",
      "Period Calculator"   
    ]
  },
];

export default function FitnessHealthHome() {
  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-3">
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <Link to="/">Home</Link>
    </li>
    <li className="breadcrumb-item">
      <Link to="/calculators">All Calculators</Link>
    </li>
    <li className="breadcrumb-item">
      <Link to="/fitness-health"> Fitness & Health</Link>
    </li>
    
  </ol>
</nav>

      <h1 className="mb-3">Fitness & Health Calculators</h1>
      <p className="mb-4 text-muted">
        Track your fitness, nutrition, and health metrics using our free and
        accurate calculators.
      </p>

      {fitnessCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h2 className="mb-3">{category.title}</h2>

          <div className="row g-3">
            {category.calculators.map((calc, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{calc}</h6>

                    <Link
                      to={`/${fitnessHealthCalculatorsMap[calc]}`}
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
