import { useParams } from "react-router-dom";
import {
  AgeCalculator,
  DateCalculator,
  TimeCalculator,
  HoursCalculator,
  GpaCalculator,
  GradeCalculator,
  HeightCalculator,
  ConcreteCalculator,
  IpSubnetCalculator,
  PasswordGenerator,
  DiceRoller,
  FuelCostCalculator,
  VoltageDropCalculator,
  SquareFootageCalculator,
  TimeCardCalculator,
  TimeZoneCalculator,
  LoveCalculator,
  GasMileageCalculator,
  TipCalculator,
  DensityCalculator,
  WeightCalculator,
  SpeedCalculator,
  RomanNumeralConverter,
  SleepCalculator,
  TireSizeCalculator,
  RoofingCalculator,
  TileCalculator,
  MulchCalculator,
  GravelCalculator,
  HeatIndexCalculator,
  DewPointCalculator,
  BandwidthCalculator,
  TimeDurationCalculator,
  DayCounter,
  DayOfWeekCalculator,
  WindChillCalculator,
} from "../calculators/other";

const calculatorsMap = {
  "age-calculator": AgeCalculator,
  "date-calculator": DateCalculator,
  "time-calculator": TimeCalculator,
  "hours-calculator": HoursCalculator,
  "gpa-calculator": GpaCalculator,
  "grade-calculator": GradeCalculator,
  "height-calculator": HeightCalculator,
  "concrete-calculator": ConcreteCalculator,
  "ip-subnet-calculator": IpSubnetCalculator,
  "password-generator": PasswordGenerator,
  "dice-roller": DiceRoller,
  "fuel-cost-calculator": FuelCostCalculator,
  "voltage-drop-calculator": VoltageDropCalculator,
  "square-footage-calculator": SquareFootageCalculator,
  "time-card-calculator": TimeCardCalculator,
  "time-zone-calculator": TimeZoneCalculator,
  "love-calculator": LoveCalculator,
  "gas-mileage-calculator": GasMileageCalculator,
  "tip-calculator": TipCalculator,
  "density-calculator": DensityCalculator,
  "weight-calculator": WeightCalculator,
  "speed-calculator": SpeedCalculator,
  "roman-numeral-converter": RomanNumeralConverter,
  "sleep-calculator": SleepCalculator,
  "tire-size-calculator": TireSizeCalculator,
  "roofing-calculator": RoofingCalculator,
  "tile-calculator": TileCalculator,
  "mulch-calculator": MulchCalculator,
  "gravel-calculator": GravelCalculator,
  "heat-index-calculator": HeatIndexCalculator,
  "dew-point-calculator": DewPointCalculator,
  "bandwidth-calculator": BandwidthCalculator,
  "time-duration-calculator": TimeDurationCalculator,
  "day-counter": DayCounter,
  "day-of-week-calculator": DayOfWeekCalculator,
  "wind-chill-calculator": WindChillCalculator,
};

export default function CalculatorPage() {
  const { slug } = useParams();
  const CalculatorComponent = calculatorsMap[slug];

  if (!CalculatorComponent) {
    return (
      <div className="container py-4">
        <h2>Calculator not found</h2>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <CalculatorComponent />
    </div>
  );
}
