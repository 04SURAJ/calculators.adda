import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CalculatorWheel from "../components/CalculatorWheel";
import '../index.css';

const Home = () => {
  return (
    <div className="container py-4">

      {/* Hero + Search */}
      <section className="text-center mb-5">
  <h2 className="fw-bold mb-2">Find the calculator you need</h2>

  <h6 className="text-secondary mb-3">
    Search from dozens of utility, math, finance, and daily life calculators
  </h6>

  <SearchBar />
</section>


     

      <section className="text-center mb-5">

          <CalculatorWheel />

      </section>
      {/* Calculator Explorer Wheel */}
    



       {/* Most Used Tools */}
      <section className="text-center mb-5" >
        <h2 className="fw-semibold mb-2">Most Used Tools</h2>

        <div className="d-flex flex-column gap-2 align-items-center">
          <Link to="/calculators/other/age-calculator" className="btn btn-outline-primary btn-sm w-100">
            Age Calculator
          </Link>

          <Link to="/calculators/other/gpa-calculator" className="btn btn-outline-primary btn-sm w-100">
            GPA Calculator
          </Link>

          <Link to="/calculators/other/fuel-cost-calculator" className="btn btn-outline-primary btn-sm w-100">
            Fuel Cost Calculator
          </Link>

          <Link to="/calculators/other/time-duration-calculator" className="btn btn-outline-primary btn-sm w-100">
            Time Duration Calculator
          </Link>

          <Link to="/calculators/other/ip-subnet-calculator" className="btn btn-outline-primary btn-sm w-100">
            IP Subnet Calculator
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
