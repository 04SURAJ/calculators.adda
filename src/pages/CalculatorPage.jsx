import { useParams } from "react-router-dom";
import * as Calculators from "../calculators/other";
import { Navigate } from "react-router-dom";


import { calculatorsSeo } from "../seo/calculatorsSeo.config";
import CalculatorLayout from "../layouts/CalculatorLayout";   // <-- IMPORTANT


const calculatorsMap = {
  "age-calculator": Calculators.AgeCalculator,
  "date-calculator": Calculators.DateCalculator,
  "time-calculator": Calculators.TimeCalculator,
  "hours-calculator": Calculators.HoursCalculator,
  "gpa-calculator": Calculators.GpaCalculator,
  "grade-calculator": Calculators.GradeCalculator,
  "height-calculator": Calculators.HeightCalculator,
  "concrete-calculator": Calculators.ConcreteCalculator,
  "ip-subnet-calculator": Calculators.IpSubnetCalculator,
  "password-generator": Calculators.PasswordGenerator,
  "dice-roller": Calculators.DiceRoller,
  "fuel-cost-calculator": Calculators.FuelCostCalculator,
  "voltage-drop-calculator": Calculators.VoltageDropCalculator,
  "square-footage-calculator": Calculators.SquareFootageCalculator,
  "time-card-calculator": Calculators.TimeCardCalculator,
  "time-zone-calculator": Calculators.TimeZoneCalculator,
  "love-calculator": Calculators.LoveCalculator,
  "gas-mileage-calculator": Calculators.GasMileageCalculator,
  "tip-calculator": Calculators.TipCalculator,
  "density-calculator": Calculators.DensityCalculator,
  "weight-calculator": Calculators.WeightCalculator,
  "speed-calculator": Calculators.SpeedCalculator,
  "roman-numeral-converter": Calculators.RomanNumeralConverter,
  "sleep-calculator": Calculators.SleepCalculator,
  "tire-size-calculator": Calculators.TireSizeCalculator,
  "roofing-calculator": Calculators.RoofingCalculator,
  "tile-calculator": Calculators.TileCalculator,
  "mulch-calculator": Calculators.MulchCalculator,
  "gravel-calculator": Calculators.GravelCalculator,
  "heat-index-calculator": Calculators.HeatIndexCalculator,
  "dew-point-calculator": Calculators.DewPointCalculator,
  "bandwidth-calculator": Calculators.BandwidthCalculator,
  "time-duration-calculator": Calculators.TimeDurationCalculator,
  "day-counter": Calculators.DayCounter,
  "day-of-week-calculator": Calculators.DayOfWeekCalculator,
  "wind-chill-calculator": Calculators.WindChillCalculator,
};


export default function CalculatorPage() {
  const { slug } = useParams();
  const CalculatorComponent = calculatorsMap[slug];
  const seoData = calculatorsSeo[slug];

  if (!CalculatorComponent) {
    return <Navigate to="/404" replace />;
  }

  return (
    <CalculatorLayout
      title={seoData?.title}
      subtitle={seoData?.subtitle}
      description={seoData?.description}
    >
      <CalculatorComponent />
    </CalculatorLayout>
  );
}

