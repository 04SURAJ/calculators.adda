import { Link } from "react-router-dom";
import { otherCalculators } from "../data/otherCalculators.config";

export default function OtherCalculatorsHome() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Calculators</h1>
      <div className="row g-3">
        {otherCalculators.map(calc => (
          <div key={calc.slug} className="col-6 col-md-4 col-lg-3">
            <Link to={`/calculators/other/${calc.slug}`} className="text-decoration-none">
              <div className="card shadow-sm h-100 text-center p-3 hover-shadow">
                <div className="mb-2 fs-1">{calc.icon}</div>
                <h6 className="card-title">{calc.name}</h6>
                <button className="btn btn-outline-primary mt-2">Open</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
