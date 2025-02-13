import {
  CurrentMoneyIcon,
  ExchangeIcon,
  Icon,
  TargetDayIcon,
  TargetIcon,
} from "./Icons";

const InputArea = ({ inputData, handleInputChange, exchangeRate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const cursorPos = e.target.selectionStart; // 現在のカーソル位置を取得


    if (name === "targetDate") {
      handleInputChange(name, value);
      return;
    }

    handleInputChange(name, value,cursorPos);
  };

  const parseCurrency = (value) => {
  return Number(value.replace(/,/g, ""));
};

const targetAUD = inputData.targetJPY
? new Intl.NumberFormat().format((parseCurrency(inputData.targetJPY) / exchangeRate).toFixed(2))
: "";

  const exchangedJPYtoAUD = inputData.currentValueJPY
    ? new Intl.NumberFormat().format((parseCurrency(inputData.currentValueJPY)/ exchangeRate).toFixed(2))
    : "";

  const exchangedAUDtoJPY = inputData.currentValueAUD
    ?new Intl.NumberFormat().format((parseCurrency(inputData.currentValueAUD) * exchangeRate).toFixed(0))
    : "";

  return (
    <div className="grid gap-7 px-4 md:max-w-xl mx-auto">
      <div className="w-ful bg-light rounded-lg px-4 py-12 shadow-md">
        <div className="flex place-items-center">
          <TargetIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">目標金額</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            あなたは日本円で、いくら貯めたい？
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>
        <p>
          JPY<span className="font-bold text-base text-primary">¥</span>
        </p>
        <input
          className="w-full border-[3px] rounded py-3 text-center text-2xl mb-5"
          type="text"
          inputMode="numeic"
          name="targetJPY"
          value={inputData.targetJPY}
          onChange={handleChange}
          placeholder="1,000,000"
        />
        <div className="flex justify-center items-center py-3">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <p>
          AUD<span className="font-bold text-base text-primary">$</span>
        </p>
        <p className="w-full h-[60px] bg-primary rounded py-3 text-center text-2xl">
        {targetAUD}
        </p>
      </div>

      <div className="w-ful bg-light rounded-lg px-4 py-12 shadow-md md:col-span-1">
        <div className="flex place-items-center">
          <TargetDayIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">目標期日</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            いつまでに目標金額を貯めたい？ <br/>
            期日を入力してね。
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <input
          className="w-full min-w-[300px] my-auto border-[3px] rounded py-3 text-center text-2xl pr-3 mb-14"
          type="date"
          name="targetDate"
          value={inputData.targetDate}
          onChange={handleChange}
        />
      </div>


      <div className="w-ful bg-light rounded-lg px-4 py-12 shadow-md md:col-span-1 md:row-span-2">
        <div className="flex place-items-center md:mb-5">
          <CurrentMoneyIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">現在の貯金額</h2>
        </div>

        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            日本円の貯金額を入れよう
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <p>
          JPY<span className="font-bold text-base text-primary">￥</span>
        </p>
        <input
          className="w-full border-[3px] rounded py-3 text-center text-2xl mb-5"
          type="text"
          name="currentValueJPY"
          value={inputData.currentValueJPY}
          onChange={handleChange}
          placeholder="10000"
        />
        <div className="flex justify-center items-center py-3">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <p>
          AUD<span className="font-bold text-base text-primary">$</span>
        </p>

        <p className="w-full h-[60px] bg-primary rounded py-3 text-center text-2xl mb-16">
          {exchangedJPYtoAUD}
        </p>

        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            オーストラリアの貯金額を入れよう
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>
        <p>
          AUD<span className="font-bold text-base text-primary">$</span>
        </p>
        <input
          className="w-full border-[3px] rounded py-3 text-center text-2xl mb-5"
          type="text"
          inputMode="numeric"
          name="currentValueAUD"
          value={inputData.currentValueAUD}
          onChange={handleChange}
          placeholder="10000"
        />

        <div className="flex justify-center items-center py-3">
          <p>JPYにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <p>
          JPY<span className="font-bold text-base text-primary">¥</span>
        </p>
        <p className="w-full h-[60px] bg-primary rounded py-3 text-center text-2xl">
          {exchangedAUDtoJPY}
        </p>
      </div>

    </div>
  );
};

export default InputArea;
