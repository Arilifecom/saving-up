export const calculateResults = (inputData, exchangeRate) => {
  const { targetJPY, currentValueJPY, currentValueAUD, targetDate } = inputData;

  const parseCurrency = (value) => {
    return Number(value.replace(/,/g, ""));
  };

  const targetJPYNum = parseCurrency(targetJPY);
  const currentValueJPYNum = parseCurrency(currentValueJPY);
  const currentValueAUDNum = parseCurrency(currentValueAUD);

  const savingAmountJPY = currentValueJPYNum + currentValueAUDNum * exchangeRate;
  const savingAmountAUD = currentValueAUDNum + currentValueJPYNum / exchangeRate;
  const remainingJPY = targetJPYNum - savingAmountJPY;
  const remainingAUD = targetJPYNum / exchangeRate - savingAmountAUD;

  const targetDateObj = new Date(targetDate);
  const currentDate = new Date();
  const remainingWeeks = Math.floor(
    (targetDateObj - currentDate) / (1000 * 60 * 60 * 24 * 7)
  );

  const weeklyTargetJPY = remainingJPY / remainingWeeks;
  const weeklyTargetAUD = remainingAUD / remainingWeeks;

  return {
    savingAmountJPY: savingAmountJPY.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JPY",
          minimumFractionDigits: 0,
        }),
    savingAmountAUD: savingAmountAUD.toLocaleString("en-AU", {
          style: "currency",
          currency: "AUD",
          minimumFractionDigits: 2,
        }),
    remainingJPY: remainingJPY.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JPY",
          minimumFractionDigits: 0,
        }),
    remainingAUD: remainingAUD.toLocaleString("en-AU", {
          style: "currency",
          currency: "AUD",
          minimumFractionDigits: 2,
        }),
    weeklyTargetJPY: weeklyTargetJPY.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JPY",
          minimumFractionDigits: 0,
        }),
    weeklyTargetAUD: weeklyTargetAUD.toLocaleString("en-AU", {
          style: "currency",
          currency: "AUD",
          minimumFractionDigits: 2,
        }),
    remainingWeeks : remainingWeeks,
  };
};
