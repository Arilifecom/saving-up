import {
  CurrentMoneyIcon,
  ExchangeIcon,
  Icon,
  TargetDayIcon,
  TargetIcon,
} from "./Icons";

const InputArea = ({ inputData, onInputChange, exchangeRate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const targetAUD = inputData.targetJPY
    ? (parseFloat(inputData.targetJPY) / exchangeRate).toFixed(2)
    : "";

  const exchangedJPYtoAUD = inputData.currentValueJPY
    ? (parseFloat(inputData.currentValueJPY) / exchangeRate).toFixed(2)
    : "";

  const exchangedAUDtoJPY = inputData.currentValueAUD
    ? (parseFloat(inputData.currentValueAUD) * exchangeRate).toFixed(0)
    : "";

  return (
    <div className="grid gap-7 md:grid-cols-2 px-4 md:max-w-3xl mx-auto">
      <div className="w-ful bg-light rounded-lg px-4 py-12 shadow-md">
        <div className="flex place-items-center">
          <TargetIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">目標金額</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            貯めたい金額を日本円で入力してみよう
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
          type="number"
          name="targetJPY"
          value={inputData.targetJPY}
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
        <p className="w-full h-[60px] bg-primary rounded py-3 text-center text-2xl">
          {targetAUD}
        </p>
      </div>

      <div className="w-ful bg-light rounded-lg px-4 py-12 shadow-md md:col-span-1 md:row-span-2">
        <div className="flex place-items-center md:mb-5">
          <CurrentMoneyIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">現在の貯金額</h2>
        </div>

        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            今持っている日本円はいくら？
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
          type="number"
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
            今持っているオーストラリアドルはいくら？
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
          type="number"
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

      <div className="w-ful bg-light rounded-lg px-4 py-12 shadow-md md:col-span-1">
        <div className="flex place-items-center">
          <TargetDayIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">目標期日</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            いつまでに貯めたい？ <br />
            目標の期日を入力してね。
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
    </div>
  );
};

export default InputArea;
