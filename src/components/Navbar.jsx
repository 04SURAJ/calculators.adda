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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container" ref={containerRef} onClick={handleLinkClick}>
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
        <div className="collapse navbar-collapse" id="mainNavbar" ref={collapseRef}>
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
                  <NavLink className="dropdown-item" to="/calculators">
                    All Calculators
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/math-calculators">
                    Math Calculators
                  </NavLink>
                </li>
                {/* Future categories */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
