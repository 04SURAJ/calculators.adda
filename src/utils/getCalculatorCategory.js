import { mathCalculatorsMap } from "../data/mathCalculators.config";

const mathSlugs = new Set(Object.values(mathCalculatorsMap));

export function getCalculatorCategory(slug) {
  return mathSlugs.has(slug) ? "math" : "other";
}
