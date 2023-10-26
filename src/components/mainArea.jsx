import { useState } from "react";

const MainArea = () => {
  const [todaysRate, setInputTodaysRate] = useState(93.44);
  const [targetJPY, setInputTargetJPY] = useState("");
  const [targetAUD, setTargetAUD] = useState("");
  const [currentValueJPY, setInputcurrentValueJPY] = useState("");
  const [exchangeJPYtoAUD, setexchangeValueAUD] = useState("");
  const [currentValueAUD, setcurrentValueAUD] = useState("");
  const [exchangeAUDtoJPY, setexchangeValueJPY] = useState("");
  const [targetData, setInputData] = useState("");

  //target
  const handleOnChangeTarget = (e) => {
    const new_TargetValue = e.target.value;
    setInputTargetJPY(new_TargetValue);
    setTargetAUD((new_TargetValue / todaysRate).toFixed(2));
  };

  //carrentValue-JPYtoAUD
  const handleOnChangeCurrentValueJPY = (e) => {
    const new_TargetValue = e.target.value;
    setInputcurrentValueJPY(new_TargetValue);
    setexchangeValueAUD((new_TargetValue / todaysRate).toFixed(2));
  };

  //carrentValue-AUDtoJPY
  const handleOnChangeCurrentValueAUD = (e) => {
    const new_TargetValue = e.target.value;
    setcurrentValueAUD(new_TargetValue);
    setexchangeValueJPY((new_TargetValue * todaysRate).toFixed(0));
  };

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
  const savingAmountJPY =
    parseInt(currentValueJPY) + parseInt(exchangeAUDtoJPY);
  const savingAmountAUD =
    parseInt(currentValueAUD) + parseInt(exchangeJPYtoAUD);
  const remainingJPY = parseInt(targetJPY) - savingAmountJPY;
  const remainingAUD = (parseInt(targetAUD) - savingAmountAUD).toFixed(2);

  //weekly calculate
  const targetDate = targetData;
  const remainingWeeks = calculateRemainingWeeks(targetDate);
  const weeklyTargetJPY = (remainingJPY / remainingWeeks).toFixed(0);
  const weeklyTargetAUD = (remainingAUD / remainingWeeks).toFixed(2);

  return (
    <div className="flex justify-between h-full">
      <div className="min-h-fits bg-pink w-6/12 p-8 rounded-2xl rounded-r-none mx-auto">
        <div className="bg-white rounded-2xl h-full pt-11">
          <div className="w-4/5 mx-auto">
            <div className="mb-6">
              <h2>現在のレート</h2>
              <input
                className="w-44 border mr-2 rounded py-2 px-3.5"
                type="number"
                value={todaysRate}
                onChange={(e) => setInputTodaysRate(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <div className="flex items-end mb-2">
                <h2 className="text-xl">目標金額</h2>
                <p className="ml-2 ">いくら貯めたい？(半角数字)</p>
              </div>

              <div className="flex items-end">
                <div>
                  <p>JPY￥</p>
                  <input
                    className="w-44 border mr-2 rounded py-2 px-3.5"
                    type="number"
                    value={targetJPY}
                    placeholder="10000"
                    onChange={handleOnChangeTarget}
                  />
                </div>
                <svg
                  className="pb-1.5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
                <div>
                  <p>AUD$</p>
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 h-[38px]">
                    {targetAUD}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-end mb-2">
                <h2 className="text-xl">現在の貯金額</h2>
                <p className="ml-2">
                  日本円とAUDドルいくら持ってる？(半角数字)
                </p>
              </div>

              <div className="flex items-end mb-4">
                <div>
                  <p>JPY￥</p>
                  <input
                    className="w-44 border mr-2 rounded py-2 px-3.5"
                    type="number"
                    value={currentValueJPY}
                    onChange={handleOnChangeCurrentValueJPY}
                  />
                </div>
                <svg
                  className="pb-1.5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
                <div>
                  <p>AUD$</p>
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 h-[38px]">
                    {exchangeJPYtoAUD}
                  </p>
                </div>
              </div>

              <div className="flex items-end">
                <div>
                  <p>AUD$</p>
                  <input
                    className="w-44 border mr-2 rounded py-2 px-3.5"
                    type="number"
                    value={currentValueAUD}
                    onChange={handleOnChangeCurrentValueAUD}
                  />
                </div>
                <svg
                  className="pb-1.5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
                <div>
                  <p>JPY￥</p>
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 h-[38px]">
                    {exchangeAUDtoJPY}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-xl mb-2">目標期日</h2>
              <input
                className="w-44 border mr-2 rounded py-2 px-3.5"
                type="date"
                value={targetData}
                onChange={(e) => setInputData(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-6/12 p-8 rounded-2xl">
        <div className="bg-pink w-full rounded-2xl h-full pt-11">
          <div className="w-4/5 mx-auto">
            <div className="mb-6">
              <h2 className="text-xl mb-2">資産総額（JPY = AUD）</h2>

              <div className="flex items-end">
                <div>
                  <p>JPY</p>
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 bg-white">
                    {savingAmountJPY}
                  </p>
                </div>
                <svg
                  className="pb-1.5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
                <div>
                  <p>AUD</p>
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 bg-white">
                    {savingAmountAUD}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl mb-2">目標まで残り</h2>
              <div className="flex items-end">
                <div>
                  <p>JPY</p>
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 bg-white">
                    {remainingJPY}
                  </p>
                </div>
                <svg
                  className="pb-1.5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
                <div>
                  <p>AUD</p>
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 bg-white">
                    {remainingAUD}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl mb-2">週ごとの必要貯金額</h2>
              <div className="mb-2">
                <p>JPY</p>
                <div className="flex items-end">
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 bg-white">
                    {weeklyTargetJPY}
                  </p>
                  <p>/ 週</p>
                </div>
              </div>

              <div className="mb-2">
                <p>AUD</p>
                <div className="flex items-end">
                  <p className="w-44 border mr-2 rounded py-2 px-3.5 bg-white">
                    {weeklyTargetAUD}
                  </p>
                  <p>/ weeks</p>
                </div>
              </div>

              <p className="mr-2">残り</p>
              <div className="flex items-end">
                <p className="w-44 border mr-2 rounded py-2 px-3.5 bg-white">
                  {remainingWeeks}
                </p>
                <p>/ 週間</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
