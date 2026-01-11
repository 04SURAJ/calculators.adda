import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const Contact = () => {
  

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h2 className="mb-3">
        Contact Us — <Link to="/" className="footer-home-link">CalculatorsAdda</Link>
      </h2>
      <p><strong>Last Updated:</strong> 11 January 2026</p>

      {/* Accordion Sections */}
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>1. How to Contact Us</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              You can reach us anytime via email for support, feedback, or inquiries regarding our calculators or website.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>2. Email Address</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Send us an email at: <a href="mailto:calculatorsadda.help@gmail.com">calculatorsadda.help@gmail.com</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>3. Response Time</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We typically respond to emails within 1–2 business days. For urgent issues, please include “URGENT” in the subject line.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3>4. Feedback & Suggestions</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We welcome your feedback! You can suggest new calculators, report issues, or give general feedback via email.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3>5. Back to Home</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Return to <Link to="/">Home</Link> to explore all our calculators.</p>
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

export default Contact;
