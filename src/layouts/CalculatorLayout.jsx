import SeoMeta from "../seo/SeoMeta";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CalculatorLayout({ title,
  description,
  breadcrumbs,
  content,
  relatedCalculators,
  children,
 }) {
  const location = useLocation();
const canonicalUrl = `https://www.calculatorsadda.com${location.pathname}`;

  return (
    <div className="container py-4">
      <SeoMeta
  title={title}
  description={description}
  canonical={canonicalUrl}
/>


  {/* ✅ BREADCRUMB */}
      <nav className="mb-3 small text-muted">
        <Link to="/" className="text-decoration-none me-2">
          <FaHome /> Home
        </Link>

        {breadcrumbs?.map((item, index) => (
          <span key={index}>
            {" > "}
            {item.path ? (
              <Link to={item.path} className="text-decoration-none">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
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
