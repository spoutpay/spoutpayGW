const formatCardNumber = (inputValue) => {
  // Remove any non-numeric characters from the input value
  const cleanedCardNumber = inputValue.replace(/\D/g, "");

  // Divide the card number into groups of four digits separated by spaces
  let formattedCardNumber = cleanedCardNumber.replace(/(\d{4})/g, "$1 ");

  // Trim any leading/trailing spaces
  formattedCardNumber = formattedCardNumber.trim();

  return formattedCardNumber;
};

const isValidCardNumber = (cardNumber) => {
  // Perform the Luhn algorithm validation for credit card numbers
  const cleanedCardNumber = cardNumber.replace(/\D/g, "");
  let sum = 0;
  let shouldDouble = false;

  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

const getCardType = (cardNumber) => {
  // Identify card type based on the first few digits of the card number
  const cleanedCardNumber = cardNumber.replace(/\D/g, "");
  const cardTypes = [
    { type: "Visa", pattern: /^4/ },
    { type: "Mastercard", pattern: /^5[1-5]/ },
    { type: "Verve", pattern: /^506|507|6500/ },
    // Add more card types if needed
  ];

  for (const cardType of cardTypes) {
    if (cleanedCardNumber.match(cardType.pattern)) {
      return cardType.type;
    }
  }

  return "Unknown";
};

const formatCardExpiry = (inputValue) => {
  // Remove any non-numeric characters from the input value
  const cleanedExpiry = inputValue.replace(/\D/g, "");

  // Add a slash between month and year (assuming the user enters digits without a slash)
  const formattedExpiry = cleanedExpiry.replace(/^(\d{2})(\d{0,2})/, "$1 / $2");

  return formattedExpiry.trim(); // Trim any leading/trailing spaces
};

const isValidCardExpiry = (expiry) => {
  console.log("exp", expiry)
  const [expiryYear, expiryMonth] = expiry;

  // Check if the expiry month and year are valid numbers
  if (isNaN(expiryMonth) || isNaN(expiryYear)) {
    return false;
  }

  // Convert the expiry month and year to integers
  const month = parseInt(expiryMonth, 10);
  const year = parseInt(expiryYear, 10);

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Last two digits of the current year
  const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed in JavaScript

  // Check if the expiry year and month are in the future
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }

  // Validate the expiry month (should be between 1 and 12)
  if (month < 1 || month > 12) {
    return false;
  }

  return true;
};

export { formatCardNumber, isValidCardNumber, getCardType, formatCardExpiry, isValidCardExpiry };
