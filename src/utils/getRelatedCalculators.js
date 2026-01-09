import { otherCalculators } from "../data/otherCalculators.config";
import { getCalculatorCategory } from "./getCalculatorCategory";

export function getRelatedCalculators(currentSlug, limit = 6) {
  const currentCategory = getCalculatorCategory(currentSlug);

  const grouped = {
    math: [],
    other: []
  };

  otherCalculators.forEach(calc => {
    if (!calc.slug || calc.slug === currentSlug) return;

    const category = getCalculatorCategory(calc.slug);

    grouped[category].push({
      name: calc.name,
      slug: calc.slug
    });
  });

  return {
    [currentCategory]: grouped[currentCategory].slice(0, limit),
    [currentCategory === "math" ? "other" : "math"]:
      grouped[currentCategory === "math" ? "other" : "math"].slice(0, 4)
  };
}
