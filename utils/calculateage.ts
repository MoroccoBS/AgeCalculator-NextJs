type Input = {
  day: string;
  month: string;
  year: string;
};

export const CalculateAge = (input: Input) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const { day, month, year } = input;

  const parsedDay = parseInt(day);
  const parsedMonth = parseInt(month);
  const parsedYear = parseInt(year);

  let AgeDay = currentDay - parsedDay;
  let AgeMonth = currentMonth - parsedMonth;
  let AgeYear = currentYear - parsedYear;

  if (AgeDay < 0 && AgeMonth <= 0 && AgeYear <= 0) {
    return {
      display: {
        day: "0",
        month: "0",
        year: "0",
      },
    };
  }

  if (AgeMonth < 0 || (AgeMonth === 0 && AgeDay < 0)) {
    AgeYear--;
    AgeMonth += 12;
  }

  if (AgeDay < 0) {
    const daysInPreviousMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    AgeMonth--;
    AgeDay += daysInPreviousMonth;
  }

  if (parsedMonth === 2 && parsedDay === 29 && isLeapYear(parsedYear)) {
    AgeDay--;
  }

  return {
    display: {
      day: AgeDay.toString(),
      month: AgeMonth.toString(),
      year: AgeYear.toString(),
    },
  };
};

const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
