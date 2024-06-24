import {
  AmountIcon,
  ExchangeIcon,
  ProgressIcon,
  WeeklyTagetIcon,
} from "./Icons";

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
    <div className="grid gap-7 pb-14 md:max-w-3xl mx-auto">
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center mb-10">
          <AmountIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2">資産総額</h2>
        </div>
        <div className="mb-5">
          <p>
            JPY<span className="font-bold text-base text-primary">¥</span>
          </p>
          <p className="w-full border-[2px] rounded py-3 text-center text-2xl">
            {formatNumber(savingAmountJPY)}
          </p>
        </div>
        <ExchangeIcon className={"w-5 h-5 mx-auto"} />
        <div className="mb-14">
          <p>
            AUD<span className="font-bold text-base text-primary">$</span>
          </p>
          <p className="w-full h-[60px] bg-pink rounded py-3 text-center text-2xl">
            {formatNumber(savingAmountAUD)}
          </p>
        </div>
      </div>
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center mb-10">
          <ProgressIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2">目標まで残り</h2>
        </div>
        <div className="mb-5">
          <p>
            JPY<span className="font-bold text-base text-primary">¥</span>
          </p>
          <p className="w-full border-[2px] rounded py-3 text-center text-2xl">
            {formatNumber(remainingJPY)}
          </p>
        </div>
        <ExchangeIcon className={"w-5 h-5 mx-auto"} />
        <div className="mb-14">
          <p>
            AUD<span className="font-bold text-base text-primary">$</span>
          </p>
          <p className="w-full h-[60px] bg-pink rounded py-3 text-center text-2xl">
            {formatNumber(remainingAUD)}
          </p>
        </div>
      </div>

      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center mb-10">
          <WeeklyTagetIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2">週ごとの必要貯金額</h2>
        </div>
        <div className="mb-5">
          <p>
            JPY<span className="font-bold text-base text-primary">¥</span>
          </p>
          <div className="flex items-center">
            <p className="w-[80%] border-[2px] rounded py-3 text-center text-2xl">
              {formatNumber(weeklyTargetJPY)}
            </p>
            <p className="ml-2">/ 週</p>
          </div>
        </div>
        <div className="mb-2">
          <p>
            AUD<span className="font-bold text-base text-primary">$</span>
          </p>
          <div className="flex items-center">
            <p className="w-[80%] border-[2px] rounded py-3 text-center text-2xl">
              {formatNumber(weeklyTargetAUD)}
            </p>
            <p className="ml-2">/ weeks</p>
          </div>
        </div>
        <p className="mr-2">残り</p>
        <div className="flex items-center">
          <p className="w-[80%] border-[2px] rounded py-3 text-center text-2xl">
            {formatNumber(remainingWeeks)}
          </p>
          <p className="ml-2">/ 週間</p>
        </div>
      </div>
    </div>
  );
};

export default ResultArea;
