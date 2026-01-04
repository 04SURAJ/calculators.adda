import { useParams, Navigate } from "react-router-dom";

import * as OtherCalculators from "../calculators/other";
import * as MathCalculators from "../calculators/math";

import { calculatorsSeo } from "../seo/calculatorsSeo.config";
import CalculatorLayout from "../layouts/CalculatorLayout";
import { calculatorContent } from "../data/calculatorContent.config";



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
   "average-calculator": MathCalculators.AverageCalculator,
     "mean-calculator": MathCalculators.MeanCalculator,
   "median-calculator": MathCalculators.MedianCalculator,
   "mode-calculator": MathCalculators.ModeCalculator,
   "rounding-calculator": MathCalculators.RoundingCalculator,
   "absolute-value-calculator": MathCalculators.AbsoluteValueCalculator,


};



export default function CalculatorPage() {
  const { slug } = useParams();
  const CalculatorComponent = calculatorsMap[slug];
  const seoData = calculatorsSeo[slug];
    const content = calculatorContent[slug];

  if (!CalculatorComponent) {
    return <Navigate to="*" replace />;
  }

  return (
    <CalculatorLayout
      title={seoData?.title}
      subtitle={seoData?.subtitle}
      description={seoData?.description}
       content={content}
    >
      <CalculatorComponent />
    </CalculatorLayout>
  );
}

