import SeoMeta from "../seo/SeoMeta";

export default function CalculatorLayout({
  title,
  description,
  children
}) {
  return (
    <div className="container py-4">
      <SeoMeta title={title} description={description} />

      <h1 className="mb-3">{title}</h1>

      <p className="text-muted">
        {description}
      </p>

      <div className="card p-4 my-4 shadow-sm">
        {children}
      </div>

      <h2>How to Use</h2>
      <ol>
        <li>Enter the required values.</li>
        <li>Click the calculate button.</li>
        <li>View the result instantly.</li>
      </ol>

      <h2>Why Use This Calculator?</h2>
      <ul>
        <li>Simple and fast</li>
        <li>No signup required</li>
        <li>Works on all devices</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        This calculator provides results for informational purposes only.
        Accuracy depends on the values entered.
      </p>
    </div>
  );
}
