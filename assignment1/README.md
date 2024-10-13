Target Calulation Excluding specific Days (Excluding Fridays)

This JavaScript project provides a function calculateTotalTarget() that calculates the proportional distribution of an annual target across multiple months. The function ensures that only working days (excluding Fridays) are considered in the calculation, distributing the target based on the actual number of valid working days between the start and end dates.

Project Description

The project handles date ranges dynamically, ensuring that the distribution of the annual target takes into account:

Total non-Friday working days per month.

The number of worked days within a specified date range (excluding Fridays).

Accurate handling of various month lengths, including leap years and mid-month start or end dates.

This is a useful tool for businesses that need to allocate resources or budgets based on working days while excluding specific days of the week (Fridays in this case).

How to Run the Code

Prerequisites

Node.js installed on your machine.

Basic understanding of JavaScript and how to run scripts.

Running the Code

1. Clone the repository:

git clone https://github.com/Mudalib-Mohamed/Target-Calculation-Excluding-Specific-Days

2. Navigate to the project directory:

cd Target-Calculation-Excluding-Specific-Days

3. Run the JavaScript file:

Open a terminal and run:

node assignment1.js

Example Usage in Node.js

You can copy the code into a .js file, and then call the function with desired parameters:

const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);

Function Explanation

calculateTotalTarget(startDate, endDate, totalAnnualTarget)

This function takes three parameters:

startDate: A string representing the start date in the format YYYY-MM-DD.

endDate: A string representing the end date in the format YYYY-MM-DD.

totalAnnualTarget: A number representing the total target amount to be distributed.

The function calculates:

1. Total working days for each month (excluding Fridays).

2. Actual worked days within the start and end date range.

3. Proportional distribution of the total target based on the worked days in each month.

The function returns an object with the following structure:

daysExcludingFridays: An array representing the total number of non-Friday working days in each month.

daysWorkedExcludingFridays: An array showing the actual number of non-Friday working days worked between the startDate and endDate.

monthlyTargets: An array representing the monthly target allocated to each month, proportional to the valid working days.

totalTarget: The total calculated target based on the actual worked days within the range.

Code Example

const result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);

/_ Expected Output:
{
daysExcludingFridays: [27, 25, 26],
daysWorkedExcludingFridays: [27, 25, 26],
monthlyTargets: [435, 434.99999999999994, 435],
totalTarget: 1305
}
_/

Assumptions and Limitations

Assumptions:

Fridays are the only excluded day from the working week.

The total annual target is evenly distributed across 12 months but recalculated based on actual working days per month.

Limitations:

Currently, the function only excludes Fridays. However, it could be extended to exclude other days (e.g., Sundays) by modifying the isFriday() helper function.

The function does not take into account holidays or other non-working days unless explicitly defined as excluded weekdays.

The function assumes the date range is valid (i.e., startDate <= endDate), and does not handle scenarios where the dates are inverted.
