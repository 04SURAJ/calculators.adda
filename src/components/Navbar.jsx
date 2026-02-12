import { Link, NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

function Navbar() {
  const collapseRef = useRef(null);
  const containerRef = useRef(null);

  const handleLinkClick = (e) => {
    const target = e.target.closest("a");
    if (target && collapseRef.current.classList.contains("show")) {
      collapseRef.current.classList.remove("show");
    }
  };

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
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top polished-navbar">
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
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/math-calculators"
              >
                Math 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/fitness-health"
              >
                Fitness & Health 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                to="/utility"
              >
               Utility
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Styling only */}
      <style>
        {`
        /* Navbar Gradient Same As Footer */
        .polished-navbar {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364) !important;
          border-bottom: 1px solid rgba(255, 193, 7, 0.35);
        }

        /* Footer-style link appearance */
        .polished-navbar .nav-link,
        .polished-navbar .navbar-brand {
          color: #eaeaea;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          position: relative;
          transition: all 0.3s ease;
        }

        /* Underline animation for links */
        .polished-navbar .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background: #ffc107;
          transition: width 0.3s ease;
        }

        /* Hover effect */
        .polished-navbar .nav-link:hover,
        .polished-navbar .navbar-brand:hover {
          color: #ffc107;
          transform: translateY(-1px);
        }

        .polished-navbar .nav-link:hover::after {
          width: 100%;
        }

        /* Active link */
        .polished-navbar .active-link {
          color: #ffc107;
        }

        .polished-navbar .active-link::after {
          width: 100%;
        }

        /* Center nav items on desktop */
        .polished-navbar .navbar-nav {
          margin-left: auto;
          margin-right: auto;
        }

        /* Mobile tweaks */
        @media (max-width: 768px) {
          .polished-navbar .navbar-nav {
            flex-direction: column; /* stacked links */
            gap: 8px;
          }

          .polished-navbar .nav-link {
            text-align: center;
            padding: 12px 0; /* bigger tap target */
            font-size: 1rem;
          }
        }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
