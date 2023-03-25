export const formatDecimals = (number) => {
  const formattedNumber = number < 10 ? `0${number}` : `${number}`;
  return number === 0 ? "00" : formattedNumber;
};
