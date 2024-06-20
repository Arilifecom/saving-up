const ResultArea = ({
  savingAmountJPY,
  savingAmountAUD,
  remainingJPY,
  remainingAUD,
  weeklyTargetJPY,
  weeklyTargetAUD,
  remainingWeeks,
}) => {
  const formatNumber = (number) => {
    if (isNaN(number) || number === "N/A") {
      return "N/A";
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-white w-full rounded-2xl rounded-t-none h-full py-11">
      <div className="w-4/5 mx-auto">
        <div>
          <h2 className="text-lg mb-2">資産総額（JPY = AUD）</h2>
          <div className="items-end">
            <div>
              <p>JPY</p>
              <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 bg-white">
                {formatNumber(savingAmountJPY)}
              </p>
            </div>
            <p>↓</p>
            <div>
              <p>AUD</p>
              <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 bg-white">
                {formatNumber(savingAmountAUD)}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg mb-2">目標まで残り</h2>
          <div className="items-end">
            <div>
              <p>JPY</p>
              <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 bg-white">
                {formatNumber(remainingJPY)}
              </p>
            </div>
            <p>↓</p>
            <div>
              <p>AUD</p>
              <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 bg-white">
                {formatNumber(remainingAUD)}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg mb-2">週ごとの必要貯金額</h2>
          <div className="mb-2">
            <p>JPY</p>
            <div className="items-end">
              <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 bg-white">
                {formatNumber(weeklyTargetJPY)}
              </p>
              <p>/ 週</p>
            </div>
          </div>
          <div className="mb-2">
            <p>AUD</p>
            <div className="items-end">
              <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 bg-white">
                {formatNumber(weeklyTargetAUD)}
              </p>
              <p>/ weeks</p>
            </div>
          </div>
          <p className="mr-2">残り</p>
          <div className="items-end">
            <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 bg-white">
              {formatNumber(remainingWeeks)}
            </p>
            <p>/ 週間</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultArea;
