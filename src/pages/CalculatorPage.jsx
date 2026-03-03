import { useParams, Navigate } from "react-router-dom";

// OTHER calculators
import * as OtherCalculators from "../calculators/other";

// MATH calculators
import * as MathCalculators from "../calculators/math";

// FITNESS & HEALTH calculators
import * as FitnessHealthCalculators from "../calculators/fitness-health";

// layout + data
import CalculatorLayout from "../layouts/CalculatorLayout";
import { calculatorsSeo } from "../seo/calculatorsSeo.config";
import { calculatorContent } from "../data/calculatorContent.config";

// category maps
import { mathCalculatorsMap } from "../data/mathCalculators.config";
import { fitnessHealthCalculatorsMap } from "../data/fitnessHealthCalculators.config";
import { calculatorFaq } from "../data/calculatorFaq.config";


/* -------------------------------------------------- */
/* ALL CALCULATORS MAP */
/* -------------------------------------------------- */
const calculatorsMap = {
   // OTHER CATEGORY CALCULATORS
  "age-calculator": OtherCalculators.AgeCalculator,
  "date-calculator": OtherCalculators.DateCalculator,
  "time-calculator": OtherCalculators.TimeCalculator,
  "hours-calculator": OtherCalculators.HoursCalculator,
  "gpa-calculator": OtherCalculators.GpaCalculator,
  "grade-calculator": OtherCalculators.GradeCalculator,
  "height-calculator": OtherCalculators.HeightCalculator,
  "concrete-calculator": OtherCalculators.ConcreteCalculator,
  "ip-subnet-calculator": OtherCalculators.IpSubnetCalculator,
  "password-generator": OtherCalculators.PasswordGenerator,
  "dice-roller": OtherCalculators.DiceRoller,
  "fuel-cost-calculator": OtherCalculators.FuelCostCalculator,
  "voltage-drop-calculator": OtherCalculators.VoltageDropCalculator,
  "square-footage-calculator": OtherCalculators.SquareFootageCalculator,
  "time-card-calculator": OtherCalculators.TimeCardCalculator,
  "time-zone-calculator": OtherCalculators.TimeZoneCalculator,
  "love-calculator": OtherCalculators.LoveCalculator,
  "gas-mileage-calculator": OtherCalculators.GasMileageCalculator,
  "tip-calculator": OtherCalculators.TipCalculator,
  "density-calculator": OtherCalculators.DensityCalculator,
  "weight-calculator": OtherCalculators.WeightCalculator,
  "speed-calculator": OtherCalculators.SpeedCalculator,
  "roman-numeral-converter": OtherCalculators.RomanNumeralConverter,
  "sleep-calculator": OtherCalculators.SleepCalculator,
  "tire-size-calculator": OtherCalculators.TireSizeCalculator,
  "roofing-calculator": OtherCalculators.RoofingCalculator,
  "tile-calculator": OtherCalculators.TileCalculator,
  "mulch-calculator": OtherCalculators.MulchCalculator,
  "gravel-calculator": OtherCalculators.GravelCalculator,
  "heat-index-calculator": OtherCalculators.HeatIndexCalculator,
  "dew-point-calculator": OtherCalculators.DewPointCalculator,
  "bandwidth-calculator": OtherCalculators.BandwidthCalculator,
  "time-duration-calculator": OtherCalculators.TimeDurationCalculator,
  "day-counter": OtherCalculators.DayCounter,
  "day-of-week-calculator": OtherCalculators.DayOfWeekCalculator,
  "wind-chill-calculator": OtherCalculators.WindChillCalculator,

  // MATH CATEGORY CALCULATORS
  "basic-calculator": MathCalculators.BasicCalculator,
  "percentage-calculator": MathCalculators.PercentageCalculator,
    "percentage-increase-decrease-calculator": MathCalculators.PercentageIncreaseDecreaseCalculator,
    "ratio-calculator": MathCalculators.RatioCalculator,
   "average-mean-median-mode-calculator": MathCalculators.AvgMeanMedianModeCalculator,
  
   "scientific-calculator": MathCalculators.ScientificCalculator,
   "lcm-hcf-calculator": MathCalculators.LCMHCFCalculator,
    "linear-equation-solver":MathCalculators.LinearEquationCalculator,
     "quadratic-equation-calculator":MathCalculators.QuadraticEquationCalculator,



     
"bmi-calculator": FitnessHealthCalculators.BmiCalculator,
"calorie-calculator": FitnessHealthCalculators.CalorieCalculator,
"bmr-calculator": FitnessHealthCalculators.BMRCalculator,
"body-fat-calculator": FitnessHealthCalculators.BodyFatCalculator,
"due-date-calculator": FitnessHealthCalculators.DueDateCalculator,
"pregnancy-calculator": FitnessHealthCalculators.PregnancyCalculator,
"pregnancy-conception-calculator": FitnessHealthCalculators.PregnancyConceptionCalculator,
"pregnancy-weight-gain-calculator": FitnessHealthCalculators.PregnancyWeightGainCalculator,
"ovulation-calculator": FitnessHealthCalculators.OvulationCalculator,
"conception-calculator": FitnessHealthCalculators.ConceptionCalculator,
"period-calculator": FitnessHealthCalculators.PeriodCalculator,

};

/* -------------------------------------------------- */
/* PAGE COMPONENT */
/* -------------------------------------------------- */
export default function CalculatorPage() {
  const { slug } = useParams();
const faqData = calculatorFaq[slug];

  const CalculatorComponent = calculatorsMap[slug];
  const seoData = calculatorsSeo[slug];
  const content = calculatorContent[slug];

  if (!CalculatorComponent) {
    return <Navigate to="*" replace />;
  }

  /* -------- CATEGORY DETECTION -------- */
  const isFitnessHealth = Object.values(
    fitnessHealthCalculatorsMap
  ).includes(slug);

  const isMath = Object.values(mathCalculatorsMap).includes(slug);

  const getCategory = () => {
    if (isFitnessHealth) {
      return {
        label: "Fitness & Health",
        path: "/fitness-health",
      };
    }

    if (isMath) {
      return {
        label: "Math Calculators",
        path: "/math-calculators",
      };
    }

    return {
      label: "Utility",
      path: "/utility",
    };
  };

  /* -------- BREADCRUMBS -------- */
 /* -------- BREADCRUMBS -------- */
const breadcrumbs = [
  getCategory(),
  {
    label: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    path: `/${slug}`,   // ← THIS makes it clickable
  },
];

  /* -------- RELATED CALCULATORS (same category only) -------- */
  const relatedCalculators = Object.keys(calculatorsMap)
    .filter((key) => key !== slug)
    .filter((key) =>
      isFitnessHealth
        ? Object.values(fitnessHealthCalculatorsMap).includes(key)
        : isMath
        ? Object.values(mathCalculatorsMap).includes(key)
        : !Object.values(mathCalculatorsMap).includes(key) &&
          !Object.values(fitnessHealthCalculatorsMap).includes(key)
    )
    .slice(0, 4)
    .map((key) => ({
      slug: key,
      name:
  calculatorsSeo[key]?.shortTitle ||
  key
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "),
    }));

  return (
    <CalculatorLayout
      title={seoData?.title}
      subtitle={seoData?.subtitle}
      description={seoData?.description}
      content={content}
      relatedCalculators={relatedCalculators}
      breadcrumbs={breadcrumbs}
        faq={faqData}

    >
      <CalculatorComponent />
    </CalculatorLayout>
  );
}
