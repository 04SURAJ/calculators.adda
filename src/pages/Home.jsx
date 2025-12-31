import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CalculatorWheel from "../components/CalculatorWheel";
import '../index.css';

export default function Home() {
  return (
    <div className="container py-4">

      {/* HERO SECTION */}
      <section className="text-center py-4">
        <h1 className="fw-bold">
          Free Online Calculator Tools 
        </h1>

        <h5 >
          A collection of smart, accurate, and easy-to-use calculators
          for daily life, education, finance, construction, and more.
        </h5>
        <br/>
      <SearchBar/>
      </section>


     
      


      {/* POPULAR CALCULATORS */}
     <section className="text-center py-3">
  <h3 className="fw-semibold">Popular Calculators</h3>

  <div className="row">
    {[
      {
        title: "Age Calculator",
        desc: "Calculate exact age in years, months & days",
        link: "/calculators/other/age-calculator"
      },
      {
        title: "GPA Calculator",
        desc: "Compute semester or cumulative GPA",
        link: "/calculators/other/gpa-calculator"
      },
      {
        title: "Time Duration Calculator",
        desc: "Find duration between two dates & times",
        link: "/calculators/other/time-duration-calculator"
      },
      {
        title: "Time Calculator",
        desc: "Add or subtract hours, minutes and seconds",
        link: "/calculators/other/time-calculator"
      },
      {
        title: "Date Calculator",
        desc: "Calculate date difference, add or subtract days",
        link: "/calculators/other/date-calculator"
      },
      {
        title: "Fuel Cost Calculator",
        desc: "Estimate trip fuel cost based on mileage",
        link: "/calculators/other/fuel-cost-calculator"
      },
        {
        title: "Tip Calculator",
        desc: "Quickly calculate restaurant tip & bill split",
        link: "/calculators/other/tip-calculator"
      },
      {
        title: "Speed Calculator",
        desc: "Calculate speed, distance or time instantly",
        link: "/calculators/other/speed-calculator"
      },
      {
        title: "BMI Calculator",
        desc: "Check body mass index using height & weight",
        link: "/calculators/other/weight-calculator"
      }
      
    ].map(tool => (
      <div className="col-md-4 mb-3" key={tool.link}>
        <div className="card p-3 shadow-sm h-100">
          <h6>{tool.title}</h6>
          <p className="text-muted small">{tool.desc}</p>

          <a
            href={tool.link}
            className="btn btn-sm btn-outline-primary"
          >
            Open
          </a>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* FEATURED COLLECTIONS */}
      <section className="text-center py-3">
        <h3 className="fw-semibold">Featured Collections</h3>

        <ul className="list-group">
          <li className="list-group-item">
            Student Utilities Pack — GPA, Grade, Time, Study Tools
          </li>
          <li className="list-group-item">
            Engineering Toolkit — Bandwidth, Voltage Drop, Conversions
          </li>
          <li className="list-group-item">
            Home & Construction — Roofing, Tile, Gravel, Concrete
          </li>
        </ul>
      </section>

  

  
      {/* RECENTLY ADDED */}
      <section className="text-center py-3">
        <h3 className="fw-semibold">Recently Added Tools</h3>

        <p>
          New calculators are added regularly to expand the collection.
        </p>
      </section>


     

     


      {/* FINAL CTA */}
      <section className="py-4 text-center">
        <h3 className="fw-semibold">
          More calculators coming soon
        </h3>

        <p className="text-muted">
          We are continuously expanding our collection of tools.
        </p>

        <a href="/calculators/other" className="btn btn-primary">
          View All Calculators
        </a>
      </section>

    </div>
  );
}

