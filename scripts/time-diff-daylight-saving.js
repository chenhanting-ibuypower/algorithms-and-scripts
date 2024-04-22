// Function to calculate the current time difference between two time zones, considering day of the month and hour
function calculateCurrentTimeDifference(timeZone1, timeZone2) {
  let now = new Date();

  let formatOptions = {
    day: "2-digit", // include the day of the month
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
    hour12: false,
  };

  // Format the current date and time for each timezone
  let dateTimeFormat1 = new Intl.DateTimeFormat("en-US", {
    ...formatOptions,
    timeZone: timeZone1,
  });
  let dateTimeFormat2 = new Intl.DateTimeFormat("en-US", {
    ...formatOptions,
    timeZone: timeZone2,
  });

  let parts1 = dateTimeFormat1.formatToParts(now);
  let parts2 = dateTimeFormat2.formatToParts(now);

  // Extract the day of the month and hour
  let day1 = parseInt(parts1.find((part) => part.type === "day").value, 10);
  let hour1 = parseInt(parts1.find((part) => part.type === "hour").value, 10);

  let day2 = parseInt(parts2.find((part) => part.type === "day").value, 10);
  let hour2 = parseInt(parts2.find((part) => part.type === "hour").value, 10);

  // Calculate the difference in days and hours
  let dayDifference = day2 - day1;
  let hourDifference = hour2 - hour1;

  // Total hours difference including days
  let totalHoursDifference = dayDifference * 24 + hourDifference;

  return totalHoursDifference;
}

// Example calculation between Taiwan and US Pacific Time
let currentTimeDifference = calculateCurrentTimeDifference(
  "Asia/Taipei",
  "America/Los_Angeles"
);
console.log(
  `Current Time Difference (in hours, including day difference) between Taiwan and US Pacific Time: ${currentTimeDifference}`
);
