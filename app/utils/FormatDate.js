import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = () => {
  const dateObj = new Date();

  const day = dateObj.getDay() || "";
  const month = months[dateObj.getMonth()] || "";
  const date = dateObj.getDate() || "";
  const year = dateObj.getFullYear();

  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const time = hour >= 12 ? " PM" : " AM";
  const hour12 = hour % 12;

  // return { date, day, month, year };
  return `${day} ${month} ${year},${hour}:${minute} ${time}`;
};

export const formatTime = (timeStamp) => {
  const dateObj = new Date(timeStamp);
  const now = new Date();
  const todayDate = now.getDate();
  const todayMonth = months[now.getMonth()];

  const day = days[dateObj.getDay()] || "";
  const month = months[dateObj.getMonth()];
  const hour = dateObj.getHours() + ":";
  const time = hour >= "12" ? " PM" : " AM";
  const minute = dateObj.getMinutes();
  const date = dateObj.getDay();
  const newDateAndMonth = ` ${dateObj.getDay()} ${months[dateObj.getMonth()]} `;

  return `${
    date == todayDate && todayMonth == month ? "Today" : newDateAndMonth
  }  | ${hour}${minute} ${time}`;
};

// export const formatTime12 = (current: Date): string => {
//   const dateObj = new Date(+current);

//   console.log(dateObj);

//   const hour = dateObj.getHours();
//   const minute = dateObj.getMinutes();
//   const time = hour >= 12 ? " PM" : " AM";
//   const hour12 = hour % 12;

//   const zero = minute < 10 ? "0" : "";

//   return `${hour12}:${zero}${minute}${time}`;
// };
