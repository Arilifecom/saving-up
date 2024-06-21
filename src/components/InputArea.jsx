import {
  CurrentMoneyIcon,
  ExchangeIcon,
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
  setTargetJPY,
  setTargetAUD,
  setCurrentValueJPY,
  setCurrentValueAUD,
  setExchangeValueAUD,
  setExchangeValueJPY,
  setInputData,
  handleOnChangeTarget,
  handleOnChangeCurrentValueJPY,
  handleOnChangeCurrentValueAUD,
  handleSubmit,
}) => {
  return (
    <div className="grid gap-7">
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center mb-10">
          <TargetIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">目標金額</h2>
        </div>
        <div className="mb-5">
          <p>JPY</p>
          <input
            className="w-full border-[2px] rounded py-3 text-center text-2xl"
            type="number"
            value={targetJPY}
            placeholder="10000"
            onChange={handleOnChangeTarget}
          />
        </div>
        <ExchangeIcon className={"w-5 h-5 mx-auto"} />
        <div className="mb-14">
          <p>AUD</p>
          <p className="w-full h-[60px] bg-pink rounded py-3 text-center text-2xl">
            {targetAUD}
          </p>
        </div>
      </div>

      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center mb-9">
          <CurrentMoneyIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">現在の貯金額</h2>
        </div>
        <p className="mb-9 text-center">日本円の貯金</p>
        <div className="mb-5">
          <p>JPY￥</p>
          <input
            className="w-full border-[2px] rounded py-3 text-center text-2xl"
            type="number"
            value={currentValueJPY}
            placeholder="10000"
            onChange={handleOnChangeCurrentValueJPY}
          />
        </div>
        <ExchangeIcon className={"w-5 h-5 mx-auto"} />
        <div className="mb-10">
          <p>AUD$</p>
          <p className="w-full h-[60px] bg-pink rounded py-3 text-center text-2xl">
            {exchangeJPYtoAUD}
          </p>
        </div>

        <div className="mb-14">
          <p className="mb-9 text-center">オーストラリアドルの貯金</p>
          <div className="mb-5">
            <p>AUD$</p>
            <input
              className="w-full border-[2px] rounded py-3 text-center text-2xl"
              type="number"
              value={currentValueAUD}
              placeholder="10000"
              onChange={handleOnChangeCurrentValueAUD}
            />
          </div>
          <ExchangeIcon className={"w-5 h-5 mx-auto"} />
          <div>
            <p>JPY￥</p>
            <p className="w-full h-[60px] bg-pink rounded py-3 text-center text-2xl">
              {exchangeAUDtoJPY}
            </p>
          </div>
        </div>
      </div>

      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center mb-10">
          <TargetDayIcon className={"w-10 h-10"} />
          <h2 className="text-lg ml-2 font-semibold">目標期日</h2>
        </div>
        <input
          className="w-full border-[2px] rounded py-3 text-center text-2xl pr-3"
          type="date"
          value={targetData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="text-xl text-pink py-4 bg-blue rounded mb-14 mt-4 shadow-md w-48 mx-auto cursor-pointer"
      >
        計算する
      </button>
    </div>
  );
};

export default InputArea;
