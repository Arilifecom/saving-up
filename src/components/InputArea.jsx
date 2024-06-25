import {
  CurrentMoneyIcon,
  ExchangeIcon,
  Icon,
  TargetDayIcon,
  TargetIcon,
} from "./Icons";

const InputArea = ({
  targetJPY,
  targetAUD,
  currentValueJPY,
  currentValueAUD,
  exchangeJPYtoAUD,
  exchangeAUDtoJPY,
  targetData,
  setInputData,
  handleOnChangeTarget,
  handleOnChangeCurrentValueJPY,
  handleOnChangeCurrentValueAUD,
}) => {
  return (
    <div className="grid gap-7 md:grid-cols-2 px-4 md:max-w-3xl mx-auto">
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center">
          <TargetIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">1.目標金額</h2>
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
        <div className="mb-5">
          <p>
            JPY<span className="font-bold text-base text-primary">¥</span>
          </p>
          <input
            className="w-full border-[3px] rounded py-3 text-center text-2xl"
            type="number"
            value={targetJPY}
            placeholder="10000"
            onChange={handleOnChangeTarget}
          />
        </div>
        <div className="flex justify-center items-center py-3">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <div className="mb-14">
          <p>
            AUD<span className="font-bold text-base text-primary">$</span>
          </p>
          <p className="w-full h-[60px] bg-primary rounded py-3 text-center text-2xl">
            {targetAUD}
          </p>
        </div>
      </div>

      <div className="w-ful bg-light rounded-lg p-4 shadow-md md:col-span-1 row-span-2">
        <div className="flex place-items-center md:mb-5">
          <CurrentMoneyIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">2.現在の貯金額</h2>
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
        <div className="mb-5">
          <p>
            JPY<span className="font-bold text-base text-primary">￥</span>
          </p>
          <input
            className="w-full border-[3px] rounded py-3 text-center text-2xl"
            type="number"
            value={currentValueJPY}
            placeholder="10000"
            onChange={handleOnChangeCurrentValueJPY}
          />
        </div>
        <div className="flex justify-center items-center py-3">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <div className="mb-10">
          <p>
            AUD<span className="font-bold text-base text-primary">$</span>
          </p>
          <p className="w-full h-[60px] bg-primary rounded py-3 text-center text-2xl">
            {exchangeJPYtoAUD}
          </p>
        </div>

        <div className="mb-14">
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
          <div className="mb-5">
            <p>
              AUD<span className="font-bold text-base text-primary">$</span>
            </p>
            <input
              className="w-full border-[3px] rounded py-3 text-center text-2xl"
              type="number"
              value={currentValueAUD}
              placeholder="10000"
              onChange={handleOnChangeCurrentValueAUD}
            />
          </div>
          <div className="flex justify-center items-center py-3">
            <p>JPYにすると</p>
            <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
          </div>
          <div>
            <p>
              JPY<span className="font-bold text-base text-primary">¥</span>
            </p>
            <p className="w-full h-[60px] bg-primary rounded py-3 text-center text-2xl">
              {exchangeAUDtoJPY}
            </p>
          </div>
        </div>
      </div>

      <div className="w-ful bg-light rounded-lg p-4 shadow-md md:col-span-1">
        <div className="flex place-items-center">
          <TargetDayIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">3.目標期日</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            いつまでに貯めたい？
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <input
          className="w-full border-[3px] rounded py-3 text-center text-2xl pr-3 mb-14"
          type="date"
          value={targetData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputArea;
