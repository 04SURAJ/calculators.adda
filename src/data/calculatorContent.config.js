export const calculatorContent = {
  "age-calculator": {

    formula: `
<p>
The age is calculated by finding the difference between the <strong>date of birth</strong>
and the <strong>current date</strong>.
</p>

<p>
The formula used is:
</p>

<ul>
  <li><strong>Years</strong> = Current Year − Birth Year</li>
  <li><strong>Months</strong> = Current Month − Birth Month</li>
  <li><strong>Days</strong> = Current Day − Birth Day</li>
</ul>

<p>
If the day or month difference becomes negative, adjustments are made by borrowing days
from the previous month or months from the previous year.
</p>
    `,

  howToUse: [
    "Enter your date of birth in the input fields provided.",
    "Optionally, select a reference date to calculate age as of that date.",
    "Click the 'Calculate' button to see your exact age in years, months, and days.",
    "The result will be displayed instantly above the input fields."
  ],

  features: [
    "Calculates age accurately considering leap years and month lengths",
    "Shows exact years, months, and days elapsed",
    "Option to calculate age for a future reference date",
    "Mobile-friendly and responsive design",
    "Instant and accurate results with a clean interface"
  ],

  whyUse:
    "This Age Calculator helps you determine your exact age quickly and accurately without manual calculations. It is perfect for legal, educational, financial, or personal purposes, and works on both mobile and desktop devices.",

  notes: [
    "The calculation is based on the Gregorian calendar.",
    "Time zones are not considered in the calculation.",
    "Results are for general reference and educational purposes only.",
    "For official age verification, refer to legal documents."
  ]
}

,


 "date-calculator": {
  formula: `
<p>
This calculator performs two main types of date calculations: <strong>date difference</strong> and <strong>date addition/subtraction</strong>.
</p>

<p>
For <strong>Date Difference</strong>:
</p>
<ul>
  <li>The difference between the <strong>start date</strong> and <strong>end date</strong> is calculated in days.</li>
  <li>Weeks are calculated by dividing the total days by 7.</li>
</ul>

<p>
For <strong>Add/Subtract Time</strong>:
</p>
<ul>
  <li>A user-selected number of <strong>days, weeks, months, or years</strong> is added to or subtracted from the <strong>start date</strong>.</li>
  <li>The resulting date is computed by adjusting for month lengths and leap years as needed.</li>
</ul>

<p>
This ensures accurate calculations for all date ranges and operations.
</p>
`
,

  howToUse: [
    "Select the operation you want to perform: Date Difference or Add Time to Date.",
    "Choose the start date using the date picker.",
    "If calculating date difference, select the end date as well.",
    "If adding time, enter a numeric value and select the unit (days, weeks, months, or years).",
    "Click the Calculate button to view the result instantly.",
    "Use the Reset button to clear all inputs and start a new calculation."
  ],

  features: [
    "Calculate the exact number of days and weeks between two dates.",
    "Add days, weeks, months, or years to a specific date.",
    "Mobile-friendly date picker with clean input fields.",
    "Instant results with no page reload.",
    "Simple and user-friendly interface for all users."
  ],

  whyUse:
    "This Date Calculator helps you quickly find date differences or calculate future and past dates without manual counting. It is ideal for planning events, tracking deadlines, calculating durations, and managing schedules accurately.",

  notes: [
    "Both start date and end date are required for date difference calculations.",
    "Only positive numeric values are allowed when adding time to a date.",
    "Results are calculated based on standard calendar rules, including leap years.",
    "The calculator uses your device’s local time zone for accurate results."
  ]
}
,
"time-calculator": {
  formula: `
<p>
This calculator allows you to <strong>add or subtract hours and minutes</strong> from a given base time.
</p>

<p>
The calculation works as follows:
</p>
<ul>
  <li>The <strong>base time</strong> is converted into total minutes: <em>totalMinutes = hours × 60 + minutes</em>.</li>
  <li>The input <strong>hours and minutes</strong> to add or subtract are also converted to minutes and applied to the base time.</li>
  <li>If subtracting results in negative minutes or adding exceeds 24 hours, the calculation wraps around within a 24-hour clock.</li>
  <li>The final result is converted back into <strong>hours and minutes</strong> for display.</li>
</ul>

<p>
This ensures accurate time arithmetic while accounting for 24-hour time constraints.
</p>
`
,

  howToUse: [
    "Select a base time using the time picker.",
    "Choose whether you want to add or subtract time.",
    "Enter the number of hours and minutes you want to apply.",
    "Click the Calculate button to get the new time.",
    "Use the Reset button to clear all fields and start again."
  ],

  features: [
    "Add or subtract hours and minutes from a given time.",
    "Automatic 24-hour time wrap handling.",
    "Mobile-friendly time picker and input fields.",
    "Instant calculation with no page reload.",
    "Clean and easy-to-use interface for all users."
  ],

  whyUse:
    "This Time Calculator helps you quickly determine a new time without manual calculations. It is useful for shift planning, travel schedules, alarms, reminders, and time management tasks where accuracy matters.",

  notes: [
    "Base time must be selected before performing calculations.",
    "Only positive values are allowed for hours and minutes.",
    "The calculator uses a 24-hour clock format.",
    "Results automatically adjust when time crosses midnight.",
    "Calculated time is based on standard minute conversion logic."
  ]
}
,
  "hours-calculator": {
  formula: `
<p>
This calculator is designed to find the <strong>total hours and minutes</strong> from multiple time entries in HH:MM format.
</p>

<p>
The calculation works as follows:
</p>
<ul>
  <li>Each time entry is split into hours and minutes.</li>
  <li>Hours are converted to minutes and added to the minutes value of the entry: <em>totalMinutes += hours × 60 + minutes</em>.</li>
  <li>This process is repeated for all entered times to get the <strong>sum of minutes</strong>.</li>
  <li>The total minutes are then converted back into hours and minutes for the final result:
    <em>hours = Math.floor(totalMinutes / 60), minutes = totalMinutes % 60</em>.
  </li>
</ul>

<p>
This allows users to accurately calculate the cumulative time across multiple entries, handling any overflow of minutes into hours automatically.
</p>
`
,

  howToUse: [
    "Enter time values in HH:MM format using the time picker.",
    "Click Add Entry to include multiple time values.",
    "Remove any entry if it was added by mistake.",
    "Click the Calculate button to get the total time.",
    "Use the Reset button to clear all entries and results."
  ],

  features: [
    "Supports multiple time entries.",
    "Automatic validation for incorrect time values.",
    "Instant calculation without page reload.",
    "Mobile-friendly time input fields.",
    "Displays total hours, minutes, and total minutes."
  ],

  whyUse:
    "This Hours Calculator is useful when you need to total multiple time durations accurately. It is ideal for tracking work hours, study time, project effort, or any situation where several time entries must be added together.",

  notes: [
    "Time must be entered in valid HH:MM format.",
    "Minutes must be less than 60 for each entry.",
    "Empty entries are ignored during calculation.",
    "The calculator adds time values; it does not track dates.",
    "Results are calculated using standard minute-based conversion."
  ]
}
,

 "gpa-calculator": {
 formula: `
<p>
This calculator computes the <strong>Grade Point Average (GPA)</strong> based on the grades and credit hours of multiple courses.
</p>

<p>
The calculation works as follows:
</p>
<ul>
  <li>Each course has a <strong>grade</strong> and <strong>credit hours</strong>.</li>
  <li>Grades are converted into grade points using a standard scale (e.g., A = 4.0, B+ = 3.3, etc.).</li>
  <li>The grade points for each course are multiplied by the corresponding credit hours: <em>points = gradePoint × credits</em>.</li>
  <li>All course points are summed: <em>totalPoints = Σ(points)</em>.</li>
  <li>All credit hours are summed: <em>totalCredits = Σ(credits)</em>.</li>
  <li>The GPA is calculated as:
    <strong>GPA = totalPoints ÷ totalCredits</strong>.
  </li>
</ul>

<p>
This ensures that courses with more credits have a proportionally larger impact on the overall GPA.
</p>
`
,

  howToUse: [
    "Enter the name of each course (optional, for reference only).",
    "Enter the number of credits for each course.",
    "Select the grade received for each course.",
    "Click Add Course to include more subjects.",
    "Click Calculate GPA to see your final GPA.",
    "Use Reset to clear all inputs and start over."
  ],

  features: [
    "Supports multiple courses in one calculation.",
    "Uses standard grade-to-point mapping.",
    "Automatically validates credits and grades.",
    "Instant GPA calculation with no page reload.",
    "Mobile-friendly and easy to use interface."
  ],

  whyUse:
    "This GPA Calculator helps students accurately calculate their Grade Point Average based on course credits and grades. It is useful for semester planning, academic tracking, scholarship eligibility checks, and understanding academic performance quickly and reliably.",

  notes: [
    "Credits must be positive numbers.",
    "A grade must be selected for every course.",
    "Courses with missing or invalid data are not calculated.",
    "The GPA is calculated using a weighted average method.",
    "Different institutions may use different grading scales."
  ]
}
,
  "grade-calculator": {
  formula: `
<p>
This calculator determines the <strong>final grade</strong> based on individual scores, maximum possible points, and weight of each item or assignment.
</p>

<p>
The calculation works as follows:
</p>
<ul>
  <li>For each item, calculate the <strong>percentage score</strong>:
    <em>percentage = (score ÷ max) × 100</em>.
  </li>
  <li>Multiply the percentage score by the item's weight to get the <strong>weighted score</strong>:
    <em>weightedScore = percentage × (weight ÷ 100)</em>.
  </li>
  <li>Sum all weighted scores to get the <strong>total weighted percentage</strong>:
    <em>totalPercentage = Σ(weightedScore)</em>.
  </li>
  <li>Convert the total percentage to a <strong>letter grade</strong> using the standard grading scale:
    <ul>
      <li>A: 90–100%</li>
      <li>B: 80–89%</li>
      <li>C: 70–79%</li>
      <li>D: 60–69%</li>
      <li>F: below 60%</li>
    </ul>
  </li>
</ul>

<p>
This ensures each item contributes proportionally to the final grade according to its weight.
</p>
`
,

  howToUse: [
    "Enter the name of each item (assignment, exam, quiz, etc.).",
    "Enter the score you received for that item.",
    "Enter the maximum possible score for the item.",
    "Enter the weight percentage of the item.",
    "Click Add Item to include more graded components.",
    "Click Calculate Grade to view your final percentage and letter grade.",
    "Use Reset to clear all values and start again."
  ],

  features: [
    "Supports multiple assignments, exams, or grading items.",
    "Weighted grade calculation for accurate results.",
    "Automatically validates scores, maximum values, and weights.",
    "Instant calculation of percentage and letter grade.",
    "Mobile-friendly and easy-to-use interface."
  ],

  whyUse:
    "This Grade Calculator helps students quickly determine their final grade based on weighted assessments. It is ideal for tracking academic performance, planning study efforts, and understanding how individual scores impact the final result.",

  notes: [
    "Scores cannot be greater than the maximum score.",
    "All weights must be positive numbers.",
    "Every item must include score, maximum value, and weight.",
    "The total grade is calculated using a weighted average method.",
    "Letter grade thresholds may vary by institution."
  ]
}
,

  "height-calculator": {
  formula: `
<p>
This calculator converts height between <strong>feet & inches</strong> and
<strong>centimeters</strong> using standard measurement formulas.
</p>

<p>
<strong>Feet & Inches to Centimeters:</strong>
</p>

<ul>
  <li>Total Inches = (Feet × 12) + Inches</li>
  <li>Centimeters = Total Inches × 2.54</li>
</ul>

<p>
<strong>Centimeters to Feet & Inches:</strong>
</p>

<ul>
  <li>Total Inches = Centimeters ÷ 2.54</li>
  <li>Feet = Floor(Total Inches ÷ 12)</li>
  <li>Inches = Remaining Inches</li>
</ul>

<p>
All results are rounded to provide clear and readable output.
</p>
  `,

  howToUse: [
    "Enter your height in feet and inches, then click Convert to CM.",
    "Or enter your height in centimeters and click Convert to Feet.",
    "Only one conversion section needs to be used at a time.",
    "Click Reset to clear all values and start a new conversion."
  ],

  features: [
    "Converts feet & inches to centimeters instantly.",
    "Converts centimeters to feet & inches accurately.",
    "Uses standard international conversion values.",
    "Validates inputs to prevent incorrect results.",
    "Clean, simple, and mobile-friendly design."
  ],

  whyUse:
    "This Height Calculator is useful for students, fitness tracking, medical forms, travel documents, and international measurements. It provides fast and accurate conversions without manual calculations.",

  notes: [
    "Feet and inches must be non-negative numbers.",
    "Centimeter values must be greater than zero.",
    "Results are rounded for better readability.",
    "This calculator is for general measurement purposes.",
    "Always use official measurements when required by institutions."
  ]
}
,
"concrete-calculator": {
  formula: `
<p>
This calculator determines the <strong>volume of concrete</strong> required for a
rectangular structure based on its length, width, and height.
</p>

<p>
The basic volume formula used is:
</p>

<ul>
  <li><strong>Volume</strong> = Length × Width × Height</li>
</ul>

<p>
The default result is calculated in <strong>cubic meters (m³)</strong>.
If cubic feet are selected, the result is converted using:
</p>

<ul>
  <li><strong>1 cubic meter</strong> = 35.3147 cubic feet</li>
</ul>

<p>
The final volume is rounded for clear and practical output.
</p>
  `,

  howToUse: [
    "Enter the length, width, and height of the concrete area.",
    "Ensure all dimension values are positive numbers.",
    "Select the desired output unit: cubic meters or cubic feet.",
    "Click the Calculate button to get the concrete volume.",
    "Use the Reset button to clear all inputs and results."
  ],

  features: [
    "Accurate volume calculation for rectangular concrete structures.",
    "Supports both cubic meters (m³) and cubic feet (ft³).",
    "Instant results with clear unit labeling.",
    "Input validation to prevent incorrect calculations.",
    "Simple, responsive, and mobile-friendly interface."
  ],

  whyUse:
    "This Concrete Calculator helps estimate material requirements for construction projects such as slabs, foundations, columns, and flooring. It saves time, reduces calculation errors, and assists in planning concrete quantities efficiently.",

  notes: [
    "All dimensions must be greater than zero.",
    "Measurements should be entered in meters.",
    "The calculator assumes a rectangular shape.",
    "Results are approximate and rounded for usability.",
    "Always consult a professional for critical structural projects."
  ]
}
,
 "password-generator": {
  formula: `
<p>
This calculator generates a <strong>random, secure password</strong> based on user-selected criteria.
</p>

<p>
The password is created using the following logic:
</p>

<ul>
  <li>A character set is built depending on which types are selected: <strong>uppercase letters</strong>, <strong>lowercase letters</strong>, <strong>numbers</strong>, and <strong>symbols</strong>.</li>
  <li>For the desired password length, random characters are picked from the chosen set.</li>
  <li>The resulting string is the generated password, ensuring randomness and inclusion of selected character types.</li>
</ul>
  `,

  howToUse: [
    "Enter the desired password length (between 4 and 128 characters).",
    "Select which character types to include: uppercase letters, lowercase letters, numbers, and symbols.",
    "Click the 'Generate' button to create a password.",
    "Optionally, click 'Copy' to copy the password to your clipboard.",
    "Click 'Reset' to clear all fields and selections."
  ],

  features: [
    "Generates completely random and secure passwords.",
    "Supports uppercase, lowercase, numbers, and special symbols.",
    "Customizable password length.",
    "Easy copy-to-clipboard functionality.",
    "User-friendly interface with instant generation."
  ],

  whyUse:
    "Using strong, randomly generated passwords is critical for online security. This generator helps create passwords that are difficult to guess or crack, protecting your accounts and personal data.",

  notes: [
    "Ensure at least one character type is selected; otherwise, a password cannot be generated.",
    "Passwords shorter than 4 characters are not recommended for security reasons.",
    "Do not share generated passwords with untrusted parties.",
    "For maximum security, use unique passwords for each account."
  ]
}
,

  "love-calculator": {

  "formula": `
<p>
The love compatibility between two people is calculated by converting each character of their names into its corresponding ASCII code,
summing these values, and then reducing the total to a percentage between 0 and 100.
</p>

<p>
The formula used is:
</p>

<ul>
  <li>Convert each character of <strong>First Name</strong> to its ASCII code and sum them → <strong>Sum1</strong></li>
  <li>Convert each character of <strong>Second Name</strong> to its ASCII code and sum them → <strong>Sum2</strong></li>
  <li>Add the two sums: <strong>Total = Sum1 + Sum2</strong></li>
  <li>Find the compatibility percentage: <strong>Percentage = Total % 101</strong> (gives value between 0–100%)</li>
</ul>

<p>
This method gives a simple, fun deterministic "love score" based purely on the letters in the names.
</p>
  `,

  "howToUse": [
    "Enter the first person's name in the 'First Name' field.",
    "Enter the second person's name in the 'Second Name' field.",
    "Click the 'Calculate' button to see the love compatibility percentage.",
    "Use the 'Reset' button to clear the fields and enter new names."
  ],

  "features": [
    "Instant calculation of love compatibility based on names.",
    "Fun and interactive way to check name compatibility.",
    "Works for any combination of names, regardless of length or characters.",
    "Displays results clearly with a percentage score."
  ],

  "whyUse": "This calculator is a fun and engaging way to see a playful compatibility score between two names. It's perfect for entertainment, social sharing, or just lighthearted curiosity.",

  "notes": [
    "This calculation is purely for entertainment and has no scientific basis.",
    "Results are deterministic; the same names will always yield the same percentage.",
    "Special characters, spaces, and case of letters are normalized for calculation."
  ]
}
,

  "tip-calculator": {

  "formula": `
<p>
The tip is calculated based on the <strong>bill amount</strong> and the <strong>tip percentage</strong>. 
If the bill is split among multiple people, the total is divided equally.
</p>

<p>
The formula used is:
</p>

<ul>
  <li><strong>Tip Amount</strong> = Bill Amount × (Tip Percentage / 100)</li>
  <li><strong>Total Bill</strong> = Bill Amount + Tip Amount</li>
  <li><strong>Per Person</strong> = Total Bill ÷ Number of People</li>
</ul>

<p>
If the number of people is 1, the total bill equals the amount to be paid by a single person.
</p>
  `,

  "howToUse": [
    "Enter the total bill amount in dollars.",
    "Enter the desired tip percentage (for example, 15 for 15%).",
    "Enter the number of people splitting the bill.",
    "Click on 'Calculate' to see the tip amount, total bill, and per person amount if applicable.",
    "Click 'Reset' to clear all inputs and start over."
  ],

  "features": [
    "Calculates tip amount automatically based on the entered bill and tip percentage.",
    "Displays the total bill including tip.",
    "Shows per person amount if the bill is split among multiple people.",
    "Supports resetting all inputs for quick recalculation.",
    "User-friendly interface with clear labels for each input field."
  ],

  "whyUse": `
<p>
Use this Tip Calculator to quickly and accurately calculate the tip amount, total bill, and per person share when dining out. 
It helps avoid manual errors and saves time, ensuring fairness when splitting the bill.
</p>
  `,

  "notes": [
    "Ensure all input fields have positive numbers.",
    "Tip percentage can be zero if no tip is to be added.",
    "Number of people must be at least 1.",
    "The calculator rounds results to two decimal places for convenience."
  ]
}
,

  
  

  "ip-subnet-calculator": {
  formula: `
<p>
This calculator determines key subnet information based on a given <strong>IPv4 address</strong>
and its <strong>CIDR (Classless Inter-Domain Routing)</strong> notation.
</p>

<p>
The calculations include:
</p>

<ul>
  <li><strong>Network Address</strong>: The first address in the subnet, representing the subnet itself.</li>
  <li><strong>Broadcast Address</strong>: The last address in the subnet, used to send packets to all hosts.</li>
  <li><strong>Subnet Mask</strong>: Converts the CIDR prefix into standard dot-decimal format.</li>
  <li><strong>Total Hosts</strong>: The number of usable IP addresses in the subnet, calculated as 2^(32 − CIDR) − 2 (except for /32).</li>
</ul>

<p>
Binary conversion is used internally to derive network and broadcast addresses, ensuring precise results.
</p>
  `,

  howToUse: [
    "Enter a valid IPv4 address (e.g., 192.168.1.1).",
    "Enter a CIDR value between 0 and 32 (e.g., 24).",
    "Click the Calculate button to view subnet details.",
    "Use the Reset button to clear all fields and start over."
  ],

  features: [
    "Instant calculation of Network Address, Broadcast Address, Subnet Mask, and Total Hosts.",
    "Validates IP addresses and CIDR values to prevent errors.",
    "Clear and organized output for easy interpretation.",
    "Mobile-friendly and responsive design.",
    "Supports any valid IPv4 subnet."
  ],

  whyUse:
    "This IP Subnet Calculator helps network administrators, engineers, and students quickly determine subnet information without manual calculation, saving time and reducing errors in network planning.",

  notes: [
    "Ensure the IP address is a valid IPv4 address.",
    "CIDR must be between 0 and 32.",
    "Total hosts calculation excludes network and broadcast addresses except for /32 subnets.",
    "Results are intended for planning and educational purposes.",
    "Double-check critical network configurations using proper networking tools."
  ]
}
,

 "dice-roller": {

  formula: `
<p>
The dice roll result is generated using a <strong>random number algorithm</strong>
that simulates the outcome of rolling physical dice.
</p>

<p>
For each die, a random integer is produced between <strong>1</strong> and the
<strong>number of sides</strong> on the die.
</p>

<p>
The formula used for each roll is:
</p>

<ul>
  <li>
    <strong>Single Die Roll</strong> = Random number between 1 and Number of Sides
  </li>
</ul>

<p>
When multiple dice are rolled, the calculator generates individual results for
each die and then computes the <strong>total sum</strong> by adding all outcomes.
</p>
  `,

  howToUse: [
    "Enter the number of dice you want to roll.",
    "Enter the number of sides for each die (for example, 6 for a standard die).",
    "Click the Roll Dice button to generate random results.",
    "View individual dice values and the total sum instantly.",
    "Use the Reset button to clear all values and roll again."
  ],

  features: [
    "Supports rolling multiple dice at the same time.",
    "Works with any number of sides (D6, D10, D20, and more).",
    "Instant random results with accurate total calculation.",
    "Simple, clean, and mobile-friendly interface.",
    "No page reload required for repeated rolls."
  ],

  whyUse:
    "This dice roller is ideal for board games, tabletop RPGs, probability experiments, and quick simulations. It provides fast, fair, and repeatable dice rolls without the need for physical dice.",

  notes: [
    "The number of dice must be greater than zero.",
    "The number of sides per die should be at least 2.",
    "Each roll is generated independently using randomness.",
    "Results may vary every time the dice are rolled."
  ]
}
,

  "fuel-cost-calculator": {

  formula: `
<p>
The fuel cost is calculated based on the <strong>total distance traveled</strong>,
the vehicle’s <strong>fuel efficiency</strong>, and the <strong>current fuel price</strong>.
</p>

<p>
Depending on the selected unit system, the following formulas are used:
</p>

<ul>
  <li>
    <strong>Miles + MPG:</strong><br />
    Fuel Used = Distance (miles) ÷ Fuel Efficiency (MPG)
  </li>
  <li>
    <strong>Kilometers + L/100km:</strong><br />
    Fuel Used = (Distance (km) × Fuel Efficiency) ÷ 100
  </li>
</ul>

<p>
Once the fuel used is calculated, the total cost is determined using:
</p>

<ul>
  <li>
    <strong>Total Fuel Cost</strong> = Fuel Used × Fuel Price
  </li>
</ul>

<p>
The final amount represents the estimated fuel expense for the entered journey.
</p>
  `,

  howToUse: [
    "Select the unit system (Miles + MPG or Kilometers + L/100km).",
    "Enter the total distance you plan to travel.",
    "Provide your vehicle’s fuel efficiency value.",
    "Enter the current fuel price per gallon or per liter.",
    "Click the Calculate button to get the estimated fuel cost.",
    "Use the Reset button to clear all inputs and start again."
  ],

  features: [
    "Supports both US and metric unit systems.",
    "Instant fuel cost calculation with accurate formulas.",
    "Mobile-friendly and easy-to-use input fields.",
    "Clear validation to prevent invalid or negative values.",
    "Clean and simple result display for quick understanding."
  ],

  whyUse:
    "This fuel cost calculator helps you estimate travel expenses in advance, making it easier to plan road trips, daily commutes, or long-distance journeys. It allows better budgeting, fuel planning, and cost comparison between different vehicles or routes.",

  notes: [
    "Fuel efficiency values should be greater than zero for accurate results.",
    "Ensure the selected unit system matches the entered values.",
    "The calculated fuel cost is an estimate and may vary based on driving conditions.",
    "Fuel prices can fluctuate, so always use the most recent rate."
  ]
}
,

 "voltage-drop-calculator": {

  formula: `
<p>
Voltage drop is calculated based on the <strong>current</strong>, 
<strong>wire resistance</strong>, <strong>wire length</strong>, 
and the <strong>electrical phase</strong> (single-phase or three-phase).
</p>

<p>
The general formulas used are:
</p>

<ul>
  <li>
    <strong>Total Wire Resistance</strong> =
    (Resistance per 1000 ft × Wire Length / 1000) × 2
  </li>
  <li>
    <strong>Single-phase Voltage Drop</strong> =
    Current × Total Resistance
  </li>
  <li>
    <strong>Three-phase Voltage Drop</strong> =
    √3 × Current × Total Resistance
  </li>
  <li>
    <strong>Percentage Voltage Drop</strong> =
    (Voltage Drop ÷ Source Voltage) × 100
  </li>
</ul>

<p>
The factor of <strong>2</strong> is used to account for the round-trip length
of the conductor in single circuits.
</p>
  `,

  howToUse: [
    "Enter the system voltage in volts (V).",
    "Enter the current load in amperes (A).",
    "Provide the one-way wire length in feet.",
    "Select the appropriate wire gauge (AWG).",
    "Choose whether the circuit is single-phase or three-phase.",
    "Click the Calculate button to view voltage drop results."
  ],

  features: [
    "Supports both single-phase and three-phase systems",
    "Uses standard AWG copper wire resistance values",
    "Instant voltage drop and percentage calculation",
    "Clear input validation with error messages",
    "Mobile-friendly and easy-to-use interface"
  ],

  whyUse:
    "This calculator helps electricians, engineers, and installers ensure that voltage drop stays within recommended limits. Proper voltage drop calculation improves system efficiency, prevents equipment damage, and complies with electrical standards.",

  notes: [
    "Resistance values are based on copper conductors at approximately 75°C.",
    "Wire length should be entered as one-way distance, not round-trip.",
    "Excessive voltage drop can lead to overheating and reduced equipment performance.",
    "Always follow local electrical codes and safety guidelines."
  ]
}
,

  "square-footage-calculator": {

  formula: `
<p>
Square footage (area) is calculated by multiplying the <strong>length</strong> and
<strong>width</strong> of a space.
</p>

<p>
The basic formula used is:
</p>

<ul>
  <li><strong>Area</strong> = Length × Width</li>
</ul>

<p>
If measurements are entered in <strong>feet</strong>, the result is shown in square feet (sq ft).
</p>

<p>
If measurements are entered in <strong>meters</strong>, the area is calculated in square meters (m²)
and also converted to square feet using the conversion:
</p>

<ul>
  <li><strong>1 square meter</strong> = 10.7639 square feet</li>
</ul>
`,

  howToUse: [
    "Select the measurement unit (Feet or Meters).",
    "Enter the length of the area.",
    "Enter the width of the area.",
    "Click the Calculate button to get the total area.",
    "Use the Reset button to clear all inputs and start again."
  ],

  features: [
    "Supports both feet and meter units",
    "Automatically converts square meters to square feet",
    "Accurate area calculation with decimal precision",
    "Clean and mobile-friendly input layout",
    "Instant results without page reload"
  ],

  whyUse:
    "This Square Footage Calculator helps you quickly determine the area of rooms, plots, or spaces for construction, flooring, painting, real estate, and interior planning. It removes manual calculation errors and saves time.",

  notes: [
    "Only positive numeric values are accepted for length and width.",
    "Results are approximate due to rounding.",
    "For irregular shapes, divide the area into rectangles and calculate separately.",
    "Ensure both measurements are in the same unit before calculating."
  ]
}
,

  "time-card-calculator": {

  formula: `
<p>
Total working time is calculated by finding the difference between the
<strong>start time</strong> and <strong>end time</strong>, and then subtracting the
<strong>break duration</strong>.
</p>

<p>
The calculation follows these steps:
</p>

<ul>
  <li><strong>Total Minutes Worked</strong> = End Time − Start Time</li>
  <li>If the shift crosses midnight, 24 hours are added automatically</li>
  <li><strong>Net Work Time</strong> = Total Minutes − Break Minutes</li>
</ul>

<p>
The final result is converted into <strong>hours and minutes</strong> for easy reading.
</p>
`,

  howToUse: [
    "Enter your work start time.",
    "Enter your work end time.",
    "Add break duration in minutes (if any).",
    "Click the Calculate button to get total hours worked.",
    "Use Reset to clear all inputs and start over."
  ],

  features: [
    "Supports overnight shifts automatically",
    "Break time subtraction for accurate results",
    "Instant calculation in hours and minutes",
    "Simple and user-friendly time input",
    "Works on desktop and mobile devices"
  ],

  whyUse:
    "This Time Card Calculator helps employees, freelancers, and employers quickly calculate total working hours without manual time tracking. It is ideal for payroll preparation, attendance tracking, and daily work summaries.",

  notes: [
    "Break time should be entered in minutes only.",
    "If the end time is earlier than the start time, the calculator assumes an overnight shift.",
    "Negative work duration is not allowed.",
    "Results are rounded to the nearest minute."
  ]
}
,

  "time-zone-calculator": {

  formula: `
<p>
The time zone conversion is performed by taking the selected <strong>input time</strong>
in the <strong>source time zone</strong> and converting it to the corresponding
<strong>target time zone</strong>.
</p>

<p>
The calculation process works as follows:
</p>

<ul>
  <li>The entered time is first interpreted in the <strong>From Time Zone</strong>.</li>
  <li>The system adjusts the time based on the UTC offset of the source zone.</li>
  <li>The adjusted time is then converted to the <strong>To Time Zone</strong>.</li>
</ul>

<p>
This method automatically accounts for standard time differences between regions.
</p>
`,

  howToUse: [
    "Enter the time you want to convert.",
    "Select the source (From) time zone.",
    "Select the destination (To) time zone.",
    "Click the Convert button to see the converted time.",
    "Use Reset to clear inputs and start a new conversion."
  ],

  features: [
    "Supports multiple international time zones",
    "Instant and accurate time conversion",
    "Handles UTC offsets automatically",
    "Simple and clean user interface",
    "Works on all modern browsers and devices"
  ],

  whyUse:
    "This Time Zone Calculator is ideal for remote workers, international teams, travelers, and businesses that operate across different regions. It helps avoid confusion caused by time differences and ensures accurate scheduling.",

  notes: [
    "The calculator uses standard time zone offsets for conversion.",
    "Daylight Saving Time behavior depends on the selected time zone.",
    "Input time must be in 24-hour format.",
    "The result shows the converted time only, not the date."
  ]
}
,

  "gas-mileage-calculator": {

  formula: `
<p>
Fuel efficiency or gas mileage measures how far a vehicle can travel per unit of fuel. This calculator determines the efficiency by dividing the distance traveled by the amount of fuel used.
</p>

<p>
The formula used is:
</p>

<ul>
  <li><strong>Miles per Gallon (MPG)</strong> = Distance (miles) ÷ Fuel Used (gallons)</li>
  <li><strong>Kilometers per Liter (km/L)</strong> = Distance (kilometers) ÷ Fuel Used (liters)</li>
</ul>

<p>
Make sure to enter positive numeric values for both distance and fuel used. The unit selected determines the calculation format.
</p>
  `,

  howToUse: [
    "Select the unit system: Miles per Gallon (MPG) or Kilometers per Liter (km/L).",
    "Enter the total distance traveled in miles or kilometers, depending on the unit selected.",
    "Enter the amount of fuel consumed in gallons or liters.",
    "Click the 'Calculate' button to see the fuel efficiency.",
    "Click 'Reset' to clear all input fields and start over."
  ],

  features: [
    "Supports both MPG and km/L units.",
    "Provides quick calculation of fuel efficiency based on user input.",
    "Easy-to-use interface with labeled inputs and unit selection.",
    "Instant results with error handling for invalid input values."
  ],

  whyUse:
    "Knowing your vehicle's fuel efficiency helps in budgeting fuel costs, reducing environmental impact, and comparing vehicle performance.",

  notes: [
    "Ensure all input values are positive numbers.",
    "Select the correct unit system before entering values to get accurate results.",
    "The calculator does not account for variations in driving conditions or fuel quality."
  ]
}
,

  "density-calculator": {
  "formula": `
<p>
Density is a measure of how much mass is contained in a given volume. It is calculated by dividing the <strong>mass</strong> of an object by its <strong>volume</strong>.
</p>

<p>
The formula used is:
</p>

<ul>
  <li><strong>Density</strong> = Mass ÷ Volume</li>
</ul>

<p>
The units depend on the system selected:
<ul>
  <li><strong>Metric:</strong> Mass in kilograms (kg), Volume in cubic meters (m³), Density in kg/m³</li>
  <li><strong>Imperial:</strong> Mass in pounds (lbs), Volume in cubic feet (ft³), Density in lbs/ft³</li>
</ul>
</p>
  `,
  
  "howToUse": [
    "Enter the mass of the object in the appropriate unit (kg or lbs) based on the selected unit system.",
    "Enter the volume of the object in the corresponding unit (m³ or ft³).",
    "Select the unit system: Metric (kg/m³) or Imperial (lbs/ft³).",
    "Click the 'Calculate' button to see the density of the object.",
    "Use the 'Reset' button to clear all inputs and start a new calculation."
  ],

  "features": [
    "Supports both Metric and Imperial unit systems.",
    "Instantly calculates density with proper formatting.",
    "Displays error messages for invalid or missing inputs.",
    "Simple and intuitive interface for quick calculations."
  ],

  "whyUse": 
    "This calculator is useful for students, engineers, scientists, and anyone needing to determine the density of materials quickly without manual calculations.",

  "notes": [
    "Ensure that both mass and volume are positive numbers.",
    "Mixing units (e.g., kg with ft³) will result in incorrect density values.",
    "For Metric calculations, density is expressed in kg/m³; for Imperial, in lbs/ft³."
  ]
}
,

  "weight-calculator": {

  "formula": `
<p>
The weight conversion is calculated by using the standard conversion factor between kilograms and pounds.
</p>

<p>
The formulas used are:
</p>

<ul>
  <li><strong>Kg to Lbs</strong> = Weight in kg × 2.20462</li>
  <li><strong>Lbs to Kg</strong> = Weight in lbs ÷ 2.20462</li>
</ul>

<p>
This allows for quick and accurate conversion between the two commonly used units of mass.
</p>
  `,

  "howToUse": [
    "Enter the weight value you want to convert in the input field.",
    "Select the unit of the weight you have entered (Kilograms or Pounds).",
    "Click the 'Convert' button to see the converted result.",
    "The result will display both the original weight and the converted weight."
  ],

  "features": [
    "Instant conversion between kilograms and pounds.",
    "Supports both metric and imperial units.",
    "Clear and easy-to-use interface.",
    "Handles invalid or negative inputs with proper error messages."
  ],

  "whyUse": 
    "This calculator is useful for anyone needing to quickly convert weight measurements for cooking, fitness, travel, or scientific purposes without manually calculating the conversion.",

  "notes": [
    "Ensure the weight value entered is a positive number.",
    "The result is rounded to two decimal places for clarity.",
    "Switching the unit will automatically update the input placeholder to match the selected unit."
  ]
}
,

  "speed-calculator": {
    "whyUse": "This Speed Calculator calculates speed based on distance and time values.",
    "howToUse": [
      "Enter distance.",
      "Enter time.",
      "Click Calculate.",
      "View speed."
    ],
    "features": [
      "Accurate speed calculation",
      "Supports multiple units",
      "Instant output",
      "Educational tool",
      "Free calculator"
    ],
    "notes": [
      "Time must be greater than zero.",
      "Units affect result."
    ]
  },

  "roman-numeral-converter": {
    "whyUse": "This Roman Numeral Converter converts numbers to Roman numerals and vice versa.",
    "howToUse": [
      "Enter number or Roman numeral.",
      "Select conversion type.",
      "Click Convert.",
      "View result."
    ],
    "features": [
      "Two-way conversion",
      "Accurate results",
      "Educational use",
      "Simple interface",
      "Free tool"
    ],
    "notes": [
      "Valid Roman numerals only.",
      "Range limits apply."
    ]
  },

  "sleep-calculator": {
    "whyUse": "This Sleep Calculator helps determine ideal sleep and wake-up times based on sleep cycles.",
    "howToUse": [
      "Enter wake-up or sleep time.",
      "Click Calculate.",
      "View recommended sleep times."
    ],
    "features": [
      "Based on sleep cycles",
      "Health-focused",
      "Easy to use",
      "Instant results",
      "Free calculator"
    ],
    "notes": [
      "Results are suggestions.",
      "Individual needs may vary."
    ]
  },

  "day-counter": {
    "whyUse": "This Day Counter calculates the number of days between two dates accurately.",
    "howToUse": [
      "Select start date.",
      "Select end date.",
      "Click Calculate.",
      "View total days."
    ],
    "features": [
      "Accurate day counting",
      "Leap year support",
      "Instant results",
      "Simple UI",
      "Free tool"
    ],
    "notes": [
      "Dates must be valid.",
      "End date can be earlier."
    ]
  },

  "day-of-week-calculator": {
    "whyUse": "This Day of Week Calculator finds the day of the week for any given date.",
    "howToUse": [
      "Enter a date.",
      "Click Calculate.",
      "View the day of the week."
    ],
    "features": [
      "Accurate weekday detection",
      "Works for past and future dates",
      "Instant result",
      "Easy to use",
      "Free calculator"
    ],
    "notes": [
      "Date format must be correct.",
      "Gregorian calendar used."
    ]
  },


  "roofing-calculator": {
    "whyUse": "This Roofing Calculator helps estimate roofing materials required based on roof dimensions and slope.",
    "howToUse": [
      "Enter roof length and width.",
      "Select roof pitch or slope.",
      "Choose roofing unit.",
      "Click Calculate to view material estimate."
    ],
    "features": [
      "Accurate roofing material estimation",
      "Supports different roof slopes",
      "Ideal for contractors and homeowners",
      "Instant results",
      "Free to use"
    ],
    "notes": [
      "Measurements should be accurate.",
      "Results are estimates only."
    ]
  },

  "tile-calculator": {
    "whyUse": "This Tile Calculator helps calculate the number of tiles required for flooring or wall tiling projects.",
    "howToUse": [
      "Enter area length and width.",
      "Enter tile size.",
      "Include wastage percentage if needed.",
      "Click Calculate to get tile count."
    ],
    "features": [
      "Precise tile quantity calculation",
      "Supports wastage adjustment",
      "Useful for flooring and walls",
      "Fast results",
      "Free calculator"
    ],
    "notes": [
      "Always consider extra tiles.",
      "Tile size must be correct."
    ]
  },

  "mulch-calculator": {
    "whyUse": "This Mulch Calculator helps estimate how much mulch is needed for landscaping and gardening projects.",
    "howToUse": [
      "Enter area dimensions.",
      "Enter mulch depth.",
      "Select unit of measurement.",
      "Click Calculate to view required mulch."
    ],
    "features": [
      "Accurate mulch volume calculation",
      "Perfect for gardens and landscapes",
      "Easy to use",
      "Instant output",
      "Free tool"
    ],
    "notes": [
      "Depth should be realistic.",
      "Results are approximate."
    ]
  },

  "gravel-calculator": {
    "whyUse": "This Gravel Calculator estimates the amount of gravel required for driveways, paths, and construction work.",
    "howToUse": [
      "Enter area length and width.",
      "Enter gravel depth.",
      "Select material density if available.",
      "Click Calculate."
    ],
    "features": [
      "Accurate gravel estimation",
      "Supports construction planning",
      "Simple interface",
      "Fast calculation",
      "Free to use"
    ],
    "notes": [
      "Density may vary by material.",
      "Results are estimates."
    ]
  },

  "heat-index-calculator": {
    "whyUse": "This Heat Index Calculator calculates how hot it feels by combining air temperature and humidity.",
    "howToUse": [
      "Enter air temperature.",
      "Enter relative humidity.",
      "Click Calculate.",
      "View heat index value."
    ],
    "features": [
      "Accurate heat index calculation",
      "Weather and safety focused",
      "Easy to understand output",
      "Instant results",
      "Free calculator"
    ],
    "notes": [
      "Applicable for warm conditions.",
      "Not valid for extreme cold."
    ]
  },

  "dew-point-calculator": {
    "whyUse": "This Dew Point Calculator determines the dew point temperature based on air temperature and humidity.",
    "howToUse": [
      "Enter air temperature.",
      "Enter relative humidity.",
      "Click Calculate.",
      "View dew point value."
    ],
    "features": [
      "Accurate atmospheric calculation",
      "Useful for weather analysis",
      "Instant results",
      "Simple UI",
      "Free tool"
    ],
    "notes": [
      "Humidity must be between 0 and 100.",
      "Values are approximations."
    ]
  },

  "bandwidth-calculator": {
    "whyUse": "This Bandwidth Calculator estimates data transfer time and bandwidth usage for files and networks.",
    "howToUse": [
      "Enter file size.",
      "Enter bandwidth speed.",
      "Select units.",
      "Click Calculate."
    ],
    "features": [
      "Accurate data transfer estimation",
      "Supports multiple units",
      "Useful for IT and networking",
      "Fast calculation",
      "Free calculator"
    ],
    "notes": [
      "Actual speed may vary.",
      "Network conditions affect results."
    ]
  },

  "time-duration-calculator": {
    "whyUse": "This Time Duration Calculator calculates the total duration between two times or dates.",
    "howToUse": [
      "Enter start time or date.",
      "Enter end time or date.",
      "Click Calculate.",
      "View total duration."
    ],
    "features": [
      "Accurate time difference calculation",
      "Supports date and time inputs",
      "Instant output",
      "Simple to use",
      "Free tool"
    ],
    "notes": [
      "Ensure correct format.",
      "Time zone not considered."
    ]
  },

  "tire-size-calculator": {
    "whyUse": "This Tire Size Calculator compares tire dimensions and helps understand size differences accurately.",
    "howToUse": [
      "Enter original tire size.",
      "Enter new tire size.",
      "Click Calculate.",
      "View size comparison."
    ],
    "features": [
      "Accurate tire dimension comparison",
      "Useful for vehicle upgrades",
      "Easy input format",
      "Instant results",
      "Free calculator"
    ],
    "notes": [
      "Follow manufacturer guidelines.",
      "Incorrect sizes may affect performance."
    ]
  }
,


"basic-calculator": {
  howToUse: [
    "Enter numbers using the input fields or number buttons.",
    "Tap the operation (+, −, ×, ÷) you want to perform.",
    "The result will appear instantly above the buttons.",
    "Use the clear (C) button to reset and start over."
  ],

  features: [
    "Supports addition, subtraction, multiplication, and division",
    "Instant calculation as you input numbers",
    "Mobile-friendly and responsive design",
    "Clean, minimal interface for quick calculations"
  ],

  whyUse:
    "Perform fast and accurate arithmetic calculations directly in your browser without any extra apps. Perfect for mobile or desktop use.",

  notes: [
    "Division by zero is not allowed.",
    "All results are for general reference and educational purposes.",
    "For precise financial or scientific calculations, verify independently."
  ]
}
,
"percentage-calculator": {
  howToUse: [
    "Enter the base value (the number you want to find percentage of).",
    "Enter the percentage value in the second field.",
    "Click the Calculate button to get the percentage result.",
    "Use the Reset button to clear fields and start a new calculation."
  ],

  features: [
    "Calculates percentage value instantly",
    "Supports decimal and large number inputs",
    "Ideal for discount, profit, marks, and tax percentage calculations",
    "Lightweight and mobile-friendly calculator interface"
  ],

  whyUse:
    "This percentage calculator helps you quickly find percentage values for discounts, exam scores, salary hikes, business profit margins, GST, and more — without manual calculations.",

  notes: [
    "Rounding may apply in some percentage calculations.",
    "Ensure values are entered correctly before calculating.",
    "This tool is intended for general and educational use."
  ]
}
,
"percentage-increase-decrease-calculator": {
  howToUse: [
    "Enter the original value in the first input field.",
    "Enter the new value in the second input field.",
    "Click the 'Calculate' button to see the percentage increase or decrease.",
    "Use the 'Reset' button to clear the inputs and start over."
  ],

  features: [
    "Calculates both percentage increase and decrease",
    "Displays the exact amount of change along with percentage",
    "Validates inputs to prevent errors (e.g., division by zero)",
    "Mobile-friendly and responsive design with clear interface"
  ],

  whyUse:
    "Quickly determine the percentage change between two values for financial, statistical, or general purposes, directly in your browser.",

  notes: [
    "Original value cannot be zero.",
    "Results are approximate and for reference purposes only.",
    "For critical calculations, verify results independently."
  ]
}
,

"ratio-calculator": {
  howToUse: [
    "Enter the first value in the Value A field.",
    "Enter the second value in the Value B field.",
    "If you want to compare more than two values, click the Add Value button to add another field.",
    "Enter the additional value(s) to extend the ratio sequence.",
    "Click the Calculate button to generate the simplified ratio for all values.",
    "Use the Reset button to clear inputs and start again."
  ],

  features: [
    "Supports 2-value, 3-value, and 4-value ratio comparison",
    "Automatically simplifies ratios using GCD method",
    "Works with integers and decimal values",
    "Displays clean A : B : C : D formatted results",
    "Responsive and mobile-friendly calculator interface"
  ],

  whyUse:
    "Quickly simplify and compare proportional values across two or more quantities. Useful for mathematics, ingredient scaling, construction measurements, financial ratios, and statistical comparisons.",

  notes: [
    "All values must be greater than zero.",
    "Results are simplified to the lowest possible ratio.",
    "Extremely small decimals may be rounded during simplification.",
    "For critical technical or financial calculations, verify independently."
  ]
}
,

"average-calculator": {
  howToUse: [
    "Enter the first two values in the input fields.",
    "Click the Add Value button if you want to include more numbers.",
    "Enter additional values as needed.",
    "Click the Calculate Average button to generate the result.",
    "Use the Reset button to clear all values and start again."
  ],

  features: [
    "Supports multiple number inputs",
    "Dynamically add or remove fields",
    "Displays total count, sum, and calculated average",
    "Works with integers and decimal values",
    "Responsive and mobile-friendly calculator design"
  ],

  whyUse:
    "Quickly calculate the mean of two or more numbers for mathematics, statistics, academic work, budgeting, or data comparison tasks.",

  notes: [
    "At least two valid values are required to calculate the average.",
    "Invalid or empty fields are ignored automatically.",
    "Very large or highly precise decimals may be rounded.",
    "For scientific or financial computations, verify independently."
  ]
}
,

"mean-calculator": {
  howToUse: [
    "Enter the first two values in the input fields.",
    "Click the Add Value button to include more numbers if needed.",
    "Enter additional values to extend the list.",
    "Click the Calculate Mean button to generate the result.",
    "Use the Reset button to clear values and start again."
  ],

  features: [
    "Supports multiple number inputs",
    "Dynamically add or remove fields",
    "Displays total count, sum, and calculated mean",
    "Works with integers and decimal values",
    "Mobile-friendly responsive calculator layout"
  ],

  whyUse:
    "Quickly calculate the mean (average) of datasets for mathematics, statistics, academics, budgeting, finance, and analytics tasks.",

  notes: [
    "At least two valid values are required to calculate mean.",
    "Invalid or empty fields are ignored automatically.",
    "Extremely precise decimal values may be rounded.",
    "For scientific or financial analysis, verify independently."
  ]
}
,

"median-calculator": {
  howToUse: [
    "Enter at least two numeric values in the input fields.",
    "Click the Add Value button to include more values if required.",
    "Click the Calculate Median button to generate the result.",
    "Use the Reset button to clear all inputs and start again."
  ],

  features: [
    "Supports multiple numeric inputs",
    "Automatically sorts values before calculation",
    "Calculates median for both even and odd datasets",
    "Mobile-friendly responsive calculator layout"
  ],

  whyUse:
    "Find the median of datasets for mathematics, statistics, academic projects, and data analysis tasks.",

  notes: [
    "At least two valid numeric values are required.",
    "Empty or invalid fields are ignored automatically.",
    "Large decimal values may be rounded.",
    "For research or financial analysis, verify independently."
  ]
}
,
"mode-calculator": {
  howToUse: [
    "Enter at least two numeric values in the input fields.",
    "Click Add Value to include more numbers if needed.",
    "Click Calculate Mode to find the mode(s) of the dataset.",
    "Use Reset to clear all inputs and start again."
  ],

  features: [
    "Supports multiple numeric inputs",
    "Dynamically add or remove fields",
    "Finds one or multiple modes",
    "Displays mode frequency",
    "Responsive and mobile-friendly design"
  ],

  whyUse:
    "Quickly find the mode of a dataset for statistics, academics, math homework, or data analysis tasks.",

  notes: [
    "At least two valid numbers are required.",
    "Multiple modes are supported when values repeat equally.",
    "Empty or invalid inputs are ignored automatically.",
    "For professional analysis, verify independently."
  ]
}
,
"rounding-calculator": {
  howToUse: [
    "Enter the number you want to round.",
    "Select a rounding method: Nearest, Floor, Ceil, or Fixed Decimals.",
    "If using Fixed Decimals, enter the number of decimal places.",
    "Click Calculate to get the rounded value.",
    "Use Reset to clear the input and start over."
  ],

  features: [
    "Supports multiple rounding methods",
    "Instant calculation",
    "Works with integers and decimals",
    "Mobile-friendly responsive design"
  ],

  whyUse:
    "Quickly round numbers for math, statistics, finance, or general calculations with precise control over decimal places.",

  notes: [
    "Decimal places must be a non-negative number when using Fixed Decimals.",
    "All results are for general use and reference purposes.",
    "For precise financial or scientific calculations, verify independently."
  ]
}
,
"absolute-value-calculator": {
  howToUse: [
    "Enter the number in the input field.",
    "Click Calculate Absolute Value to find its absolute value.",
    "Use Reset to clear the input and start again."
  ],

  features: [
    "Works for integers and decimal numbers",
    "Instant calculation",
    "Simple, responsive, and mobile-friendly UI"
  ],

  whyUse:
    "Quickly find the absolute value of any number for math, algebra, or data analysis tasks.",

  notes: [
    "Negative numbers will return their positive equivalent.",
    "Zero remains unchanged.",
    "Results are for reference; verify for critical calculations."
  ]
}
,

};
