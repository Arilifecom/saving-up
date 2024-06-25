import {
  AmountIcon,
  ExchangeIcon,
  Icon,
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
    <div className="grid gap-7 py-14 px-4 md:max-w-xl mx-auto">
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center">
          <AmountIcon className={"w-10 h-10"} />
          <h2 className="text-lg font-semibold ml-2">資産総額</h2>
        </div>
        <div class="flex items-center justify-end">
          <div class="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            あなたが持っているJPYとAUDの
            <br />
            貯金を全部合わせた金額だよ
          </div>
          <div class="w-3 overflow-hidden ">
            <div class="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <div className="mb-5 flex justify-center items-end my-4">
          <p className="font-bold text-4xl text-primary">¥</p>
          <p className="w-full border-b-[3px] py-3 text-center text-2xl bg-light text-headline">
            {formatNumber(savingAmountJPY)}
          </p>
          <p className="text-2xl">円</p>
        </div>
        <div className="flex justify-center items-center pt-3 pb-6">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <div className="mb-14 flex justify-center items-end">
          <p className="font-bold text-4xl text-primary">$</p>
          <p className="w-full h-[60px] bg-bg_pink rounded py-3 text-center text-2xl  text-headline">
            {formatNumber(savingAmountAUD)}
          </p>
          <p className="text-2xl">AUD</p>
        </div>
      </div>
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center">
          <ProgressIcon className={"w-10 h-10"} />
          <h2 className="text-lg font-semibold ml-2">目標まで残り</h2>
        </div>
        <div class="flex items-center justify-end">
          <div class="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            目標達成までの残りをJPYとAUDで見てみよう
          </div>
          <div class="w-3 overflow-hidden ">
            <div class="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <div className="mb-5 flex justify-center items-end my-4">
          <p className="font-bold text-4xl text-primary">¥</p>
          <p className="w-full border-b-[3px] py-3 text-center text-2xl bg-light text-headline">
            {formatNumber(remainingJPY)}
          </p>
          <p className="text-2xl">円</p>
        </div>
        <div className="flex justify-center items-center pt-3 pb-6">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <div className="mb-14 flex justify-center items-end">
          <p className="font-bold text-4xl text-primary">$</p>
          <p className="w-full h-[60px] bg-bg_pink rounded py-3 text-center text-2xl text-headline">
            {formatNumber(remainingAUD)}
          </p>
          <p className="text-2xl">AUD</p>
        </div>
      </div>

      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center">
          <WeeklyTagetIcon className={"w-10 h-10"} />
          <h2 className="text-lg font-semibold ml-2">週ごとの必要貯金額</h2>
        </div>
        <div class="flex items-center justify-end">
          <div class="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            1週間ごとに下の金額を貯め続ければ、
            <br />
            目標金額に到達するよ
          </div>
          <div class="w-3 overflow-hidden ">
            <div class="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <div className="mb-5 flex justify-center items-end my-4">
          <p className="font-bold text-4xl text-primary">¥</p>
          <p className="w-full border-b-[3px] py-3 text-center text-2xl bg-light text-headline">
            {formatNumber(weeklyTargetJPY)}
          </p>
          <p className="text-2xl">円</p>
        </div>
        <div className="flex justify-center items-center pt-3 pb-6">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>

        <div className="mb-14 flex justify-center items-end">
          <p className="font-bold text-4xl text-primary">$</p>
          <p className="w-full h-[60px] bg-bg_pink rounded py-3 text-center text-2xl text-headline">
            {formatNumber(weeklyTargetAUD)}
          </p>
          <p className="text-2xl">AUD</p>
        </div>
        <p className="text-2xl">目標期日まで残り</p>
        <div className="flex items-center mb-14">
          <p className="w-[80%] border-[3px] bg-light rounded py-3 text-center text-2xl text-headline">
            {formatNumber(remainingWeeks)}
          </p>
          <p className="ml-2 text-2xl">/ 週間</p>
        </div>
      </div>
    </div>
  );
};

export default ResultArea;
