import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const TermsAndConditions = () => {
 

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h2 className="mb-3">
        Terms & Conditions — <Link to="/" className="footer-home-link">CalculatorsAdda</Link>
      </h2>
      <p><strong>Last Updated:</strong> 11 january 2026</p>

      {/* Accordion Sections */}
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>1. Use of Website</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Our calculators are provided for educational and informational purposes only.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>2. Accuracy of Results</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>We strive for accurate results, however minor discrepancies may occur and users must verify results before use.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>3. Intellectual Property</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>All design, content, tools, and branding are the property of CalculatorsAdda. Redistribution is prohibited.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3>4. Third-Party Links & Ads</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>We may display ads and external links. We are not responsible for third-party services or content.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3>5. Limitation of Liability</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>CalculatorsAdda is not liable for losses, damages, or business decisions based on calculator outputs.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h3>6. Modifications to Terms</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Updates may be applied at any time and posted on this page.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h3>7. Contact Information</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Email: <a href="mailto:calculatorsadda.help@gmail.com">calculatorsadda.help@gmail.com</a></p>
            <p>Back to <Link to="/">Home</Link></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    

      {/* Styling */}
      <style>
        {`
        /* Footer-style links */
        .footer-home-link {
          color: inherit;
          text-decoration: none;
        }
        .footer-home-link:hover {
          color: #ffc107;
          text-decoration: underline;
        }

        /* Accordion styling */
        .accordion-button {
          color: #eaeaea;
          background-color: #203a43;
        }
        .accordion-button:not(.collapsed) {
          background-color: #2c5364;
          color: #ffc107;
        }
        .accordion-body {
          background-color: #203a43;
          color: #eaeaea;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .accordion-button h3 {
            font-size: 1rem;
          }
          .accordion-body {
            font-size: 0.95rem;
          }
        }
        `}
      </style>
    </div>
  );
};

export default TermsAndConditions;
