import SeoMeta from "../seo/SeoMeta";

export default function CalculatorLayout({ title, subtitle, description, children }) {
  return (
    <div className="container py-4">
      <SeoMeta title={title} description={description} />

      <h1 className="mb-2">{title}</h1>
      {subtitle && <h5 className="text-primary fw-semibold mb-3">{subtitle}</h5>}

      <h6>{description}</h6>

      <div className="card p-4 my-4 shadow-sm">
  {children}
</div>

<h4>How to Use This Calculator</h4>
<ol>
  <li>Enter the required input values in the fields provided.</li>
  <li>Review your inputs to ensure accuracy before calculating.</li>
  <li>Click the calculate button to generate the result instantly.</li>
  <li>Modify the values anytime to recalculate or refine the output.</li>
</ol>

<h4>Features of This Online Calculator</h4>
<ul>
  <li>Fast and accurate calculations in real time</li>
  <li>Simple and user-friendly interface</li>
  <li>No downloads, logins, or subscriptions required</li>
  <li>Works seamlessly on mobile, tablet, and desktop devices</li>
  <li>Completely free to use, unlimited calculations</li>
</ul>

<h4>Why Use This Calculator?</h4>
<p>
  This calculator is designed to save time and eliminate manual calculation
  errors. Whether you are a student, professional, or casual user, it helps
  you generate reliable results quickly with minimal effort.
</p>

<h4>Important Notes</h4>
<ul>
  <li>Results are based on the data entered by the user.</li>
  <li>Values may vary depending on rounding rules and calculation methods.</li>
  <li>Use the results for reference or educational purposes only.</li>
</ul>

<h4>Disclaimer</h4>
<p>
  This tool is intended for informational and educational purposes. While we
  strive to ensure accuracy, the results are not guaranteed and should not be
  considered as professional, financial, legal, or technical advice. Please
  verify critical calculations independently before making decisions.
</p>

    </div>
  );
}
