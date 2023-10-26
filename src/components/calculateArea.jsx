const CalculateArea = ({ inputDateTocalculateArea }) => {
  const Data = inputDateTocalculateArea;

  //remainingWeeks
  function calculateRemainingWeeks(targetDate) {
    const currentDate = new Date();
    targetDate = new Date(targetDate);
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const remainingTime = targetDate - currentDate;
    const remainingWeeks = Math.floor(remainingTime / oneWeek);

    return remainingWeeks;
  }

  //calculate
  const savingAmountJPY = parseInt(Data[2]) + parseInt(Data[5]);
  const savingAmountAUD = parseInt(Data[4]) + parseInt(Data[3]);
  const remainingJPY = parseInt(Data[0]) - savingAmountJPY;
  const remainingAUD = (parseInt(Data[1]) - savingAmountAUD).toFixed(2);

  //weekly calculate
  const targetDate = Data[6];
  const remainingWeeks = calculateRemainingWeeks(targetDate);
  const weeklyTargetJPY = (remainingJPY / remainingWeeks).toFixed(0);
  const weeklyTargetAUD = (remainingAUD / remainingWeeks).toFixed(2);

  // //format
  // const farmatedSavingAmountJPY = new Intl.NumberFormat().format(
  //   savingAmountJPY
  // );
  // const farmatedsavingAmountAUD = new Intl.NumberFormat().format(
  //   savingAmountAUD
  // );
  // const farmatedremainingJPY = new Intl.NumberFormat().format(remainingJPY);
  // const farmatedremainingAUD = new Intl.NumberFormat().format(remainingAUD);
  // const farmatedweeklyTargetJPY = new Intl.NumberFormat().format(
  //   weeklyTargetJPY
  // );
  // const farmatedweeklyTargetAUD = new Intl.NumberFormat().format(
  //   weeklyTargetAUD
  // );

  return (
    <div>
      <h2>資産総額（JPY=AUD）</h2>
      <p>JPY{savingAmountJPY}</p>
      <p>AUD{savingAmountAUD}</p>
      <h2>目標まで残り</h2>
      <p>JPY{remainingJPY}</p>
      <p>AUD{remainingAUD}</p>
      <h2>週ごとの必要貯金額</h2>
      <p>JPY{weeklyTargetJPY}/週</p>
      <p>AUD{weeklyTargetAUD}/week</p>
      <p>残り{remainingWeeks}/週間</p>
    </div>
  );
};

export default CalculateArea;
