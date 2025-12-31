import { calculatorsSeo } from "../seo/calculatorsSeo.config";

export const searchIndex = Object.entries(calculatorsSeo).map(
  ([slug, data]) => ({
    slug,
    name: slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase()),
    ...data
  })
);
