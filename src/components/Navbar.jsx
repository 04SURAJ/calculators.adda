import { Link, NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

function Navbar() {
  const collapseRef = useRef(null);
  const containerRef = useRef(null);

  // Close menu when any link inside the navbar is clicked
  const handleLinkClick = (e) => {
    const target = e.target.closest("a");
    if (target && collapseRef.current.classList.contains("show")) {
      collapseRef.current.classList.remove("show");
    }
  };

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (
      collapseRef.current &&
      collapseRef.current.classList.contains("show") &&
      !containerRef.current.contains(e.target)
    ) {
      collapseRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top custom-navbar">
      <div
        className="container-fluid"
        ref={containerRef}
        onClick={handleLinkClick}
      >
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
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/math-calculators">
                Math Calculators
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/calculators">
                All Calculators
              </NavLink>
            </li>

           
          </ul>
        </div>
      </div>

      {/* Styling only */}
      <style>
        {`
        .custom-navbar {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364) !important;
          border-bottom: 1px solid rgba(255, 193, 7, 0.35);
        }

        .custom-navbar .nav-link,
        .custom-navbar .navbar-brand {
          transition: color 0.3s ease;
        }

       
        `}
      </style>
    </nav>
  );
}

export default Navbar;
