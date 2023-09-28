type Input = {
  day: string;
  month: string;
  year: string;
};
export const CalculateAge = (input: Input) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // January is 0
  const currentDay = currentDate.getDate();
  const { day, month, year } = input;

  const parsedDay = parseInt(day);
  const parsedMonth = parseInt(month);
  const parsedYear = parseInt(year);

  let AgeDay = currentDay - parsedDay;
  let AgeMonth = currentMonth - parsedMonth;
  let AgeYear = currentYear - parsedYear;

  if (AgeMonth < 0 || (AgeMonth === 0 && AgeDay < 0)) {
    AgeYear--;
    AgeMonth += 12;
  }

  if (parsedMonth === 12 && parsedDay === 29 && isLeapYear(parsedYear)) {
    AgeDay--;
  }

  console.log(AgeDay, AgeMonth, AgeYear);
  return {
    display: {
      day: AgeDay.toString(),
      month: AgeMonth.toString(),
      year: AgeYear.toString(),
    },
  };
  // console.log(parsedDay, parsedMonth, parsedYear);
  // console.log(currentDate, currentYear, currentMonth, currentDay);
};

const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
