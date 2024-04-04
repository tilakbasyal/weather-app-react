const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonthAndDay(unixTimeStamp: number) {
  const date = new Date(unixTimeStamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  const month = date.getMonth();
  const day = date.getDate();
  return `${day} ${monthNames[month]}`;
}

export function getTime(unixTimeStamp: number) {
  const date = new Date(unixTimeStamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

  // Get hours, minutes, and seconds
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const amPM = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, then display 12 instead

  return `${hours}:${minutes} ${amPM}`;
}
