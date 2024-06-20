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
    <div className="w-4/5 mx-auto mb-11">
      <div className="mb-1">
        <h2 className="text-lg">目標金額</h2>
        <p className="text-xs">目標貯金額(半角数字)</p>
      </div>
      <div>
        <p>JPY￥</p>
        <input
          className="w-44 border border-gray-500  mr-2 rounded py-2 px-3.5"
          type="number"
          value={targetJPY}
          placeholder="10000"
          onChange={handleOnChangeTarget}
        />
      </div>
      <div>
        <p>AUD$</p>
        <p className="w-44  border border-gray-500 mr-2 rounded py-2 px-3.5 h-[38px]">
          {targetAUD}
        </p>
      </div>
      <div className="items-end mb-2">
        <h2 className="text-lg">現在の貯金額</h2>
        <p className="text-xs">日本円とAUDドル所持金 (半角数字)</p>
      </div>
      <div>
        <p>JPY￥</p>
        <input
          className="w-44 border border-gray-500 mr-2 rounded py-2 px-3.5"
          type="number"
          value={currentValueJPY}
          onChange={handleOnChangeCurrentValueJPY}
        />
      </div>
      <p>↓</p>
      <div>
        <p>AUD$</p>
        <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 h-[38px]">
          {exchangeJPYtoAUD}
        </p>
      </div>
      <div className="items-end">
        <div>
          <p>AUD$</p>
          <input
            className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5"
            type="number"
            value={currentValueAUD}
            onChange={handleOnChangeCurrentValueAUD}
          />
        </div>
        <p>↓</p>
        <div>
          <p>JPY￥</p>
          <p className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5 h-[38px]">
            {exchangeAUDtoJPY}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-lg mb-2">目標期日</h2>
        <input
          className="w-44 border  border-gray-500 mr-2 rounded py-2 px-3.5"
          type="date"
          value={targetData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default InputArea;
