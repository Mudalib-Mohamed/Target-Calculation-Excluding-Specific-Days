function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  function isFriday(date) {
    return date.getDay() === 5;
  }

  function countWorkingDaysInMonth(year, month) {
    let workingDays = 0;
    const date = new Date(year, month, 1);

    while (date.getMonth() === month) {
      if (!isFriday(date)) {
        workingDays++;
      }
      date.setDate(date.getDate() + 1);
    }
    return workingDays;
  }

  function countWorkedDaysInRange(start, end) {
    let workedDays = 0;
    const date = new Date(start);

    while (date <= end) {
      if (!isFriday(date)) {
        workedDays++;
      }
      date.setDate(date.getDate() + 1);
    }
    return workedDays;
  }

  const daysExcludingFridays = [];
  const daysWorkedExcludingFridays = [];
  const monthlyTargets = [];
  let totalTarget = 0;

  let current = new Date(start);

  while (current <= end) {
    const year = current.getFullYear();
    const month = current.getMonth();
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);

    const totalWorkingDaysInMonth = countWorkingDaysInMonth(year, month);
    daysExcludingFridays.push(totalWorkingDaysInMonth);

    const actualStart = current > start ? current : start;
    const actualEnd = monthEnd < end ? monthEnd : end;
    const workedDays = countWorkedDaysInRange(actualStart, actualEnd);
    daysWorkedExcludingFridays.push(workedDays);

    const monthTarget =
      (workedDays / totalWorkingDaysInMonth) * (totalAnnualTarget / 12);
    monthlyTargets.push(monthTarget);
    totalTarget += monthTarget;

    current.setMonth(current.getMonth() + 1);
  }

  return {
    daysExcludingFridays,
    daysWorkedExcludingFridays,
    monthlyTargets,
    totalTarget,
  };
}

// Example usage
console.log(calculateTotalTarget("2024-01-01", "2024-12-31", 5220));
