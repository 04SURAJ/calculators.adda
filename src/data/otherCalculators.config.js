import AgeCalculator from "../calculators/other/AgeCalculator";
import DateCalculator from "../calculators/other/DateCalculator";
import TimeCalculator from "../calculators/other/TimeCalculator";
import HoursCalculator from "../calculators/other/HoursCalculator";
import GpaCalculator from "../calculators/other/GpaCalculator";
import GradeCalculator from "../calculators/other/GradeCalculator";
import HeightCalculator from "../calculators/other/HeightCalculator";
import ConcreteCalculator from "../calculators/other/ConcreteCalculator";
import IpSubnetCalculator from "../calculators/other/IpSubnetCalculator";
import PasswordGenerator from "../calculators/other/PasswordGenerator";
import DiceRoller from "../calculators/other/DiceRoller";
import FuelCostCalculator from "../calculators/other/FuelCostCalculator";
import VoltageDropCalculator from "../calculators/other/VoltageDropCalculator";
import SquareFootageCalculator from "../calculators/other/SquareFootageCalculator";
import TimeCardCalculator from "../calculators/other/TimeCardCalculator";
import TimeZoneCalculator from "../calculators/other/TimeZoneCalculator";
import LoveCalculator from "../calculators/other/LoveCalculator";
import GasMileageCalculator from "../calculators/other/GasMileageCalculator";
import TipCalculator from "../calculators/other/TipCalculator";
import DensityCalculator from "../calculators/other/DensityCalculator";
import WeightCalculator from "../calculators/other/WeightCalculator";
import SpeedCalculator from "../calculators/other/SpeedCalculator";
import RomanNumeralConverter from "../calculators/other/RomanNumeralConverter";
import SleepCalculator from "../calculators/other/SleepCalculator";
import TireSizeCalculator from "../calculators/other/TireSizeCalculator";
import RoofingCalculator from "../calculators/other/RoofingCalculator";
import TileCalculator from "../calculators/other/TileCalculator";
import MulchCalculator from "../calculators/other/MulchCalculator";
import WindChillCalculator from "../calculators/other/WindChillCalculator";
import GravelCalculator from "../calculators/other/GravelCalculator";
import HeatIndexCalculator from "../calculators/other/HeatIndexCalculator";
import DewPointCalculator from "../calculators/other/DewPointCalculator";
import BandwidthCalculator from "../calculators/other/BandwidthCalculator";
import TimeDurationCalculator from "../calculators/other/TimeDurationCalculator";
import DayCounter from "../calculators/other/DayCounter";
import DayOfWeekCalculator from "../calculators/other/DayOfWeekCalculator";

export const otherCalculators = [
  {
    name: "Age Calculator",
    slug: "age-calculator",
    component: AgeCalculator,
    description: "Calculate your exact age in years, months, days, weeks, and hours."
  },

  {
  name: "Date Calculator",
  slug: "date-calculator",
  component: DateCalculator,
  description: "Calculate date differences or add/subtract days, weeks, months, or years."
},

{
  name: "Time Calculator",
  slug: "time-calculator",
  component: TimeCalculator,
  description: "Add or subtract hours and minutes from a given time."
},

{
  name: "Hours Calculator",
  slug: "hours-calculator",
  component: HoursCalculator,
  description: "Add multiple time entries to calculate total working hours."
},

{
  name: "GPA Calculator",
  slug: "gpa-calculator",
  component: GpaCalculator,
  description: "Calculate GPA using credits and letter grades."
},

{
  name: "Grade Calculator",
  slug: "grade-calculator",
  component: GradeCalculator,
  description: "Calculate final grade using weighted scores."
},

{
  name: "Height Calculator",
  slug: "height-calculator",
  component: HeightCalculator,
  description: "Convert height between feet, inches, and centimeters."
},

{
  name: "Concrete Calculator",
  slug: "concrete-calculator",
  component: ConcreteCalculator,
  description: "Calculate concrete volume for slabs, walls, or columns."
},

{
  name: "IP Subnet Calculator",
  slug: "ip-subnet-calculator",
  component: IpSubnetCalculator,
  description:
    "Calculate network, broadcast, subnet mask, and total hosts for an IP and CIDR."
},


{
  name: "Password Generator",
  slug: "password-generator",
  component: PasswordGenerator,
  description: "Generate strong random passwords with custom options."
},

{
  name: "Dice Roller",
  slug: "dice-roller",
  component: DiceRoller,
  description: "Roll one or more dice with a custom number of sides."
},

{
  name: "Fuel Cost Calculator",
  slug: "fuel-cost-calculator",
  component: FuelCostCalculator,
  description: "Estimate fuel cost for a trip based on distance, fuel efficiency, and fuel price."
},

{
  name: "Voltage Drop Calculator",
  slug: "voltage-drop-calculator",
  component: VoltageDropCalculator,
  description: "Estimate voltage drop in single-phase or three-phase circuits."
},


{
  name: "Square Footage Calculator",
  slug: "square-footage-calculator",
  component: SquareFootageCalculator,
  description: "Calculate area in square feet or square meters based on length and width."
},

{
  name: "Time Card Calculator",
  slug: "time-card-calculator",
  component: TimeCardCalculator,
  description: "Calculate total hours worked including break time."
},

{
  name: "Time Zone Calculator",
  slug: "time-zone-calculator",
  component: TimeZoneCalculator,
  description: "Convert time from one time zone to another."
},

{
  name: "Love Calculator",
  slug: "love-calculator",
  component: LoveCalculator,
  description: "Check love compatibility between two names."
},

{
  name: "Gas Mileage Calculator",
  slug: "gas-mileage-calculator",
  component: GasMileageCalculator,
  description: "Calculate your vehicle's fuel efficiency in MPG or km/L."
},


{
  name: "Tip Calculator",
  slug: "tip-calculator",
  component: TipCalculator,
  description: "Calculate tip amount and total bill, optionally split among people."
},

{
  name: "Density Calculator",
  slug: "density-calculator",
  component: DensityCalculator,
  description: "Calculate density using mass and volume in metric or imperial units."
},

{
  name: "Weight Converter",
  slug: "weight-calculator",
  component: WeightCalculator,
  description: "Convert weight between kilograms (kg) and pounds (lbs)."
},

{
  name: "Speed Calculator",
  slug: "speed-calculator",
  component: SpeedCalculator,
  description: "Calculate speed based on distance and time in km/h or mph."
},

{
  name: "Roman Numeral Converter",
  slug: "roman-numeral-converter",
  component: RomanNumeralConverter,
  description: "Convert integers to Roman numerals and vice versa."
},


{
  name: "Sleep Calculator",
  slug: "sleep-calculator",
  component: SleepCalculator,
  description: "Calculate optimal sleep or wake-up times based on sleep cycles."
},

{
  name: "Tire Size Calculator",
  slug: "tire-size-calculator",
  component: TireSizeCalculator,
  description: "Calculate overall tire diameter based on width, aspect ratio, and wheel diameter."
},

{
  name: "Roofing Calculator",
  slug: "roofing-calculator",
  component: RoofingCalculator,
  description: "Estimate roof area based on length, width, and pitch."
},


{
  name: "Tile Calculator",
  slug: "tile-calculator",
  component: TileCalculator,
  description: "Estimate the number of tiles needed for a floor or wall."
},

{
  name: "Mulch Calculator",
  slug: "mulch-calculator",
  component: MulchCalculator,
  description: "Estimate the amount of mulch needed for a garden area based on length, width, and depth."
},

{
  name: "Wind Chill Calculator",
  slug: "wind-chill-calculator",
  component: WindChillCalculator,
  description: "Calculate wind chill temperature based on air temperature and wind speed."
},

{
  name: "Gravel Calculator",
  slug: "gravel-calculator",
  component: GravelCalculator,
  description: "Estimate the amount of gravel needed based on area dimensions and depth."
},

{
  name: "Heat Index Calculator",
  slug: "heat-index-calculator",
  component: HeatIndexCalculator,
  description: "Calculate apparent temperature based on air temperature and relative humidity."
},

{
  name: "Dew Point Calculator",
  slug: "dew-point-calculator",
  component: DewPointCalculator,
  description: "Calculate the dew point temperature based on air temperature and relative humidity."
},

{
  name: "Bandwidth Calculator",
  slug: "bandwidth-calculator",
  component: BandwidthCalculator,
  description: "Estimate network bandwidth based on file size and transfer time."
},

{
  name: "Time Duration Calculator",
  slug: "time-duration-calculator",
  component: TimeDurationCalculator,
  description: "Calculate the duration between two times in hours, minutes, and seconds."
},

{
  name: "Day Counter",
  slug: "day-counter",
  component: DayCounter,
  description: "Calculate the number of days between two dates."
},

{
  name: "Day of the Week Calculator",
  slug: "day-of-week-calculator",
  component: DayOfWeekCalculator,
  description: "Determine the day of the week for a specific date."
}
,


  { name: "Basic Calculator", slug: "basic-calculator" },
  { name: "Percentage Calculator", slug: "percentage-calculator" },
  { name: "Percentage Increase / Decrease Calculator", slug: "percentage-increase-decrease-calculator" },
  { name: "Ratio Calculator", slug: "ratio-calculator" },
  { name: "Average Calculator", slug: "average-calculator" },
  { name: "Mean Calculator", slug: "mean-calculator" },
  { name: "Median Calculator", slug: "median-calculator" },
  { name: "Mode Calculator", slug: "mode-calculator" },
  { name: "Rounding Calculator", slug: "rounding-calculator" },
  { name: "Absolute Value Calculator", slug: "absolute-value-calculator" }




];
