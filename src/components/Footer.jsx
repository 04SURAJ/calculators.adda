import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light mt-auto py-3">
      <div className="container text-center">
        <p className="mb-1">
           CalculatorsAdda — All-in-One Utility Calculators
        </p>

        <small className="text-secondary">
          © {year}  CalculatorsAdda. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
