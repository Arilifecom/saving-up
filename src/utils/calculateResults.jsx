export const calculateResults = (inputData, exchangeRate) => {
  const { targetJPY, currentValueJPY, currentValueAUD, targetDate } = inputData;

  const savingAmountJPY =
    parseInt(currentValueJPY) + parseInt(currentValueAUD) * exchangeRate;
  const savingAmountAUD =
    parseInt(currentValueAUD) + parseInt(currentValueJPY) / exchangeRate;
  const remainingJPY = parseInt(targetJPY) - savingAmountJPY;
  const remainingAUD = parseInt(targetJPY) / exchangeRate - savingAmountAUD;

  const targetDateObj = new Date(targetDate);
  const currentDate = new Date();
  const remainingWeeks = Math.floor(
    (targetDateObj - currentDate) / (1000 * 60 * 60 * 24 * 7)
  );

  const weeklyTargetJPY = remainingJPY / remainingWeeks;
  const weeklyTargetAUD = remainingAUD / remainingWeeks;

  return {
    savingAmountJPY: isNaN(savingAmountJPY)
      ? "N/A"
      : savingAmountJPY.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JPY",
          minimumFractionDigits: 0,
        }),
    savingAmountAUD: isNaN(savingAmountAUD)
      ? "N/A"
      : savingAmountAUD.toLocaleString("en-AU", {
          style: "currency",
          currency: "AUD",
          minimumFractionDigits: 2,
        }),
    remainingJPY: isNaN(remainingJPY)
      ? "N/A"
      : remainingJPY.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JPY",
          minimumFractionDigits: 0,
        }),
    remainingAUD: isNaN(remainingAUD)
      ? "N/A"
      : remainingAUD.toLocaleString("en-AU", {
          style: "currency",
          currency: "AUD",
          minimumFractionDigits: 2,
        }),
    weeklyTargetJPY: isNaN(weeklyTargetJPY)
      ? "N/A"
      : weeklyTargetJPY.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JPY",
          minimumFractionDigits: 0,
        }),
    weeklyTargetAUD: isNaN(weeklyTargetAUD)
      ? "N/A"
      : weeklyTargetAUD.toLocaleString("en-AU", {
          style: "currency",
          currency: "AUD",
          minimumFractionDigits: 2,
        }),
    remainingWeeks: isNaN(remainingWeeks) ? "N/A" : remainingWeeks,
  };
};
