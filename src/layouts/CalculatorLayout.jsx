import SeoMeta from "../seo/SeoMeta";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CalculatorLayout({
  title,
  description,
  breadcrumbs,
  content,
  relatedCalculators,
  faq = [], // ✅ receive faq properly
  children,
}) {
  const location = useLocation();
  const canonicalUrl = `https://www.calculatorsadda.com${location.pathname}`;

  // ✅ FAQ Schema (inside component)
  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="container py-4">
      {/* SEO Meta */}
      <SeoMeta
        title={title}
        description={description}
        canonical={canonicalUrl}
      />

      {/* FAQ Schema inside Helmet */}
      {faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}

      {/* Breadcrumb */}
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

      {/* Calculator UI */}
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

      {/* Content Sections */}
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
            <div
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
          )}

          {section.type === "text" && section.body && (
            <p>{section.body}</p>
          )}

          {section.type === "list" && section.items?.length > 0 && (
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* FAQ Section UI */}
      {/* FAQ Section (Accordion) */}
{faq.length > 0 && (
  <div className="faq-section mt-5">
    <h2 className="mb-4">Frequently Asked Questions</h2>

    <div className="accordion" id="faqAccordion">
      {faq.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              {item.question}
            </button>
          </h2>

          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
}
