const isValidExpiry = (expiry) => {
  // Split the expiry into month and year
  const [year, month] = expiry.split(" / ");

  // Get the current date to compare with the expiry
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Month is zero-indexed

  // Convert the input month and year to numbers
  const inputYear = parseInt(year, 10);
  const inputMonth = parseInt(month, 10);

  // Check if the expiry is in the future
  if (
    inputYear < currentYear ||
    (inputYear === currentYear && inputMonth < currentMonth)
  ) {
    return false;
  }

  // Check if the month is in the valid range (1 to 12)
  if (inputMonth < 1 || inputMonth > 12) {
    return false;
  }

  return true;
};

export default isValidExpiry;
