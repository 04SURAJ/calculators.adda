import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

const PrivacyPolicy = () => {
 

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h2 className="mb-3">Privacy Policy — <Link to="/" className="footer-home-link">
          CalculatorsAdda
        </Link></h2>
      <p><strong>Last Updated:</strong> 11 january 2026</p>

      {/* Accordion Sections */}
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>1. Information We Do Not Collect</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>We do NOT collect:</p>
            <ul>
              <li>Personal identity information</li>
              <li>Account login details</li>
              <li>Uploaded files</li>
              <li>Calculator inputs or results</li>
            </ul>
            <p>All calculations run locally in the browser or securely on our server environment without user tracking. We do not require user registration.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>2. Information We May Collect</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>We may collect limited non-personal usage data such as:</p>
            <ul>
              <li>Pages visited</li>
              <li>Device type</li>
              <li>Browser type</li>
              <li>Anonymous traffic statistics</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>3. Cookies and Third-Party Services</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>We may use third-party services including:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Google AdSense</li>
              <li>Advertising & performance analytics tools</li>
            </ul>
            <p>These services may use cookies to deliver relevant content and measure usage metrics.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3>4. Advertising Partners</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Third-party advertisers may display ads on our website. They may use cookies to:</p>
            <ul>
              <li>Show relevant advertisements</li>
              <li>Measure ad effectiveness</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3>5. External Links</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h3>6. Children’s Privacy</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>This website is not intended for children under 13. We do not knowingly collect data from minors.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h3>7. Changes to This Policy</h3>
          </Accordion.Header>
          <Accordion.Body>
            <p>Updates will be posted on this page with the revised date.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <h3>8. Contact Us</h3>
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

export default PrivacyPolicy;
