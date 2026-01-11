import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const About = () => {

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h2 className="mb-3">
        About Us — <Link to="/" className="footer-home-link">CalculatorsAdda</Link>
      </h2>
      <p><strong>Last Updated:</strong> 11 January 2026</p>

      {/* Accordion Sections */}
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>1. Our Mission</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              CalculatorsAdda aims to provide fast, reliable, and free utility calculators for everyday tasks,
              helping users save time and make informed decisions.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>2. What We Offer</h3>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Math calculators (algebra, statistics, finance, etc.)</li>
              <li>Unit converters and utility tools</li>
              <li>User-friendly and mobile-first interface</li>
              <li>Completely free to use without registration</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>3. Privacy & Security</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We respect user privacy. All calculations are performed locally or securely on our servers.
              No personal information is collected unless voluntarily provided.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3>4. Our Team</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              CalculatorsAdda is built and maintained by a small, passionate team dedicated to making
              useful tools accessible to everyone.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3>5. Contact Us</h3>
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

export default About;
