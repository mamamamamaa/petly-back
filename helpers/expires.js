const calculateExpiresTime = (time) => {
  const amountOfTime = parseInt(time);
  const typeOfTime = time.replace(String(amountOfTime), "");

  switch (typeOfTime) {
    case "h":
      return amountOfTime * 3600000;
    case "m":
      return amountOfTime * 60000;
    case "s":
      return amountOfTime * 1000;
    default:
      return 1000000;
  }
};

module.exports = calculateExpiresTime;
