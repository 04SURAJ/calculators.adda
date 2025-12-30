import React from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaFileContract, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light mt-auto py-4">
      <div className="container text-center">
        <p className="mb-3 fw-semibold">
          CalculatorsAdda — All-in-One Utility Calculators
        </p>

        <div className="mb-3 d-flex flex-wrap justify-content-center gap-3">
          <Link to="/privacy-policy" className="text-light text-decoration-none footer-link d-flex align-items-center">
            <FaUserShield className="me-1" /> Privacy Policy
          </Link>

          <Link to="/terms" className="text-light text-decoration-none footer-link d-flex align-items-center">
            <FaFileContract className="me-1" /> Terms & Conditions
          </Link>

          <Link to="/about" className="text-light text-decoration-none footer-link d-flex align-items-center">
            <FaInfoCircle className="me-1" /> About
          </Link>

          <Link to="/contact" className="text-light text-decoration-none footer-link d-flex align-items-center">
            <FaEnvelope className="me-1" /> Contact
          </Link>
        </div>

        <small className="text-secondary">
          © {year} CalculatorsAdda. All Rights Reserved.
        </small>
      </div>

      <style>
        {`
          .footer-link:hover {
            color: #ffc107; /* hover highlight */
            text-decoration: underline;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
