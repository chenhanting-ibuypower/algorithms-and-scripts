export function splitTimeFrames(options: {
  totalDays?: number;
  hours?: number;
  specificDay?: Date;
  startDay?: Date;
  endDay?: Date;
}): {
  overallStart: Date;
  overallEnd: Date;
  overallFormattedStart: string;
  overallFormattedEnd: string;
  timeFrames: Array<{
    start: Date;
    end: Date;
    formatted_start: string;
    formatted_end: string;
  }>;
} {
  // Initialize variables
  let { totalDays, specificDay, startDay, endDay, hours } = options;
  let timeFrames: Array<{
    start: Date;
    end: Date;
    formatted_start: string;
    formatted_end: string;
  }> = [];
  let overallStart: Date | undefined, overallEnd: Date | undefined;

  if (hours) {
    // Handle hours scenario
    let endDate = new Date();
    let startDate = new Date(endDate.getTime() - hours * 60 * 60 * 1000); // Subtract hours
    overallStart = startDate;
    overallEnd = endDate;
    timeFrames.push({
      start: startDate,
      end: endDate,
      formatted_start: formatDate(startDate),
      formatted_end: formatDate(endDate),
    });
  } else if (totalDays) {
    // Handle totalDays scenario
    let currentDate = new Date();
    while (totalDays > 0) {
      let endDate = new Date(currentDate);
      let daysToSubtract = totalDays > 30 ? 30 : totalDays;
      currentDate.setDate(currentDate.getDate() - daysToSubtract);
      let startDate = new Date(currentDate);
      startDate.setDate(startDate.getDate() - 1); // Adjusting for inclusive dates
      timeFrames.push({
        start: startDate,
        end: endDate,
        formatted_start: formatDate(startDate),
        formatted_end: formatDate(endDate),
      });
      totalDays -= daysToSubtract;
    }
    overallStart = timeFrames[timeFrames.length - 1]?.start;
    overallEnd = timeFrames[0]?.end;
  } else if (specificDay) {
    // Handle specificDay scenario covering the entire day
    let startOfTheDay = new Date(specificDay);
    startOfTheDay.setHours(0, 0, 0, 0); // Set to the beginning of the specific day

    let endOfTheDay = new Date(specificDay);
    endOfTheDay.setHours(23, 59, 59, 999); // Set to the end of the specific day

    overallStart = startOfTheDay;
    overallEnd = endOfTheDay;

    timeFrames.push({
      start: startOfTheDay,
      end: endOfTheDay,
      formatted_start: formatDate(startOfTheDay),
      formatted_end: formatDate(endOfTheDay),
    });
  } else if (startDay && endDay) {
    // Handle datetime scenario with splitting into chunks
    overallStart = new Date(startDay);
    overallEnd = new Date(endDay);
    let currentDate = new Date(endDay);

    while (currentDate > startDay) {
      let startDate = new Date(currentDate);
      startDate.setDate(startDate.getDate() - 30);
      if (startDate < startDay) {
        startDate = new Date(startDay);
      }

      timeFrames.unshift({
        // unshift to maintain chronological order
        start: startDate,
        end: new Date(currentDate),
        formatted_start: formatDate(startDate),
        formatted_end: formatDate(currentDate),
      });

      currentDate.setDate(currentDate.getDate() - 30);
    }
  } else {
    throw new Error(
      "Invalid input: Please provide totalDays, specificDay, or both startDay and endDay."
    );
  }

  let overallFormattedStart = formatDate(overallStart || new Date());
  let overallFormattedEnd = formatDate(overallEnd || new Date());

  return {
    overallStart,
    overallEnd,
    overallFormattedStart,
    overallFormattedEnd,
    timeFrames,
  };
}

function formatDate(date: Date): string {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

// Example Usage
console.log(splitTimeFrames({ totalDays: 201 }));
console.log(splitTimeFrames({ specificDay: new Date("2020-01-01") }));
console.log(
  splitTimeFrames({
    startDay: new Date("2020-01-01"),
    endDay: new Date("2020-01-31"),
  })
);
