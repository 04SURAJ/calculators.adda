import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          CalculatorsAdda
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Calculators
              </span>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/calculators/other"
                  >
                    All Calculators
                  </NavLink>
                </li>
                {/* Future categories */}
                {/* <li><NavLink className="dropdown-item" to="/calculators/financial">Financial</NavLink></li> */}
              </ul>
            </li>

           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
