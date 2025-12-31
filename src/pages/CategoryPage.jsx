import { Link } from "react-router-dom";
import { otherCalculators } from "../data/otherCalculators.config";

export default function CategoryPage() {
  return (
    <div className="container py-5">
      <h1>Calculators</h1>
      <div className="row">
        {otherCalculators.map(calc => (
          <div className="col-md-4 mb-3" key={calc.slug}>
            <div className="card p-3">
              <h5>{calc.name}</h5>
              <Link to={`/calculators/other/${calc.slug}`} className="btn btn-outline-primary mt-2">
                Open
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
