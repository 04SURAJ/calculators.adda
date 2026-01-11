import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserShield,
  FaFileContract,
  FaInfoCircle,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-5">
      <div className="container text-center">
     
<h5 className="footer-title mb-2">
  <Link to="/" className="footer-home-link">
    CalculatorsAdda
  </Link>
</h5>

        <p className="footer-tagline mb-4">
          All-in-One Utility Calculators for Everyday Use
        </p>

        <div className="footer-links d-flex flex-wrap justify-content-center gap-4 mb-4">
          <Link to="/privacy-policy" className="footer-link">
            <FaUserShield /> Privacy Policy
          </Link>

          <Link to="/terms" className="footer-link">
            <FaFileContract /> Terms & Conditions
          </Link>

          <Link to="/about" className="footer-link">
            <FaInfoCircle /> About
          </Link>

          <Link to="/contact" className="footer-link">
            <FaEnvelope /> Contact
          </Link>
        </div>

        {/* Optional Social Links */}
        {/* <div className="social-links mb-4">
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        </div> */}

        <small className="footer-copy">
          © {year} CalculatorsAdda. All Rights Reserved.
        </small>
      </div>

      <style>
        {`
        .footer {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #eaeaea;
          border-top: 1px solid rgba(255, 193, 7, 0.35);
        }

        .footer-title {
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: #cfd8dc;
        }

        .footer-links .footer-link {
          color: #eaeaea;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #ffc107;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #ffc107;
          transform: translateY(-2px);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .social-links a {
          color: #cfd8dc;
          font-size: 1.3rem;
          margin: 0 10px;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-links a:hover {
          color: #ffc107;
          transform: scale(1.2);
        }

        .footer-copy {
          color: #b0bec5;
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
