import { Helmet } from "react-helmet-async";

export default function SeoMeta({
  title,
  description,
  canonical,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | Calculators Adda`
    : "Calculators Adda";

  const metaDescription =
    description ||
    "Free online calculators for math, finance, health, and everyday use.";

  return (
    <Helmet>
      <title>{fullTitle}</title>

      {/* Description */}
      <meta name="description" content={metaDescription} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="Calculators Adda" />
      <meta property="og:image" content="https://www.calculatorsadda.com/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://www.calculatorsadda.com/og-image.jpg" />
    </Helmet>
  );
}
