import SeoMeta from "../seo/SeoMeta";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CalculatorLayout({ title, description, children,  content,  relatedCalculators
 }) {
  return (
    <div className="container py-4">
      <SeoMeta title={title} description={description} />


       <div className="mb-3">
        <Link
          to="/"
          className="d-inline-flex align-items-center text-decoration-none text-secondary"
        >
          <FaHome className="me-2" />
          <span>Home</span>
        </Link>
      </div>

      <h1 className="mb-2">{title}</h1>
      

      <p>{description}</p>

      <div className="card p-4 my-4 shadow-sm calculator-box">
  {children}
</div>
{/* Related Calculators */}
{relatedCalculators?.length > 0 && (
  <div className="related-calculators mb-5">
    <h2 className="related-title">Related Calculators</h2>

    <div className="related-list">
      {relatedCalculators.map((calc, i) => (
        <Link
          key={i}
          to={`/${calc.slug}`}
          className="related-item"
        >
          {calc.name}
        </Link>
      ))}
    </div>
  </div>
)}




{content?.sections?.map((section, index) => (
  <section
    className="content-section"
    key={`${section.type}-${index}`}
  >
    {section.title && (
      <h3 className="section-title">
        {section.title}
      </h3>
    )}

    {section.type === "html" && section.body && (
      <div className="section-html">
        <div dangerouslySetInnerHTML={{ __html: section.body }} />
      </div>
    )}

    {section.type === "text" && section.body && (
      <p className="section-text">{section.body}</p>
    )}

    {section.type === "list" && section.items?.length > 0 && (
      <ul className="section-list">
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
  </section>
))}




    </div>
  );
}
