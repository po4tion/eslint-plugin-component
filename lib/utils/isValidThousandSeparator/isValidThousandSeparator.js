const isValidThousandSeparator = (numberString) => {
  const regex = /^\d{1,3}(_\d{3})*$/;

  return regex.test(numberString);
};

module.exports = isValidThousandSeparator;
