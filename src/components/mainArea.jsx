import { useState } from "react";
import InputArea from "./InputArea";
import ResultArea from "./ResultArea";

const MainArea = ({ exchangeRate }) => {
  const [targetJPY, setTargetJPY] = useState("");
  const [targetAUD, setTargetAUD] = useState("");
  const [currentValueJPY, setCurrentValueJPY] = useState("");
  const [exchangeJPYtoAUD, setExchangeValueAUD] = useState("");
  const [currentValueAUD, setCurrentValueAUD] = useState("");
  const [exchangeAUDtoJPY, setExchangeValueJPY] = useState("");
  const [targetData, setInputData] = useState("");

  const [results, setResults] = useState({
    savingAmountJPY: "N/A",
    savingAmountAUD: "N/A",
    remainingJPY: "N/A",
    remainingAUD: "N/A",
    weeklyTargetJPY: "N/A",
    weeklyTargetAUD: "N/A",
    remainingWeeks: "N/A",
  });

  //-------------inputEventArea---------------------

  //target
  const handleOnChangeTarget = (e) => {
    const new_TargetValue = e.target.value;
    setTargetJPY(new_TargetValue);
    setTargetAUD((new_TargetValue / exchangeRate).toFixed(2));
  };

  //carrentValue-JPYtoAUD
  const handleOnChangeCurrentValueJPY = (e) => {
    const new_TargetValue = e.target.value;
    setCurrentValueJPY(new_TargetValue);
    setExchangeValueAUD((new_TargetValue / exchangeRate).toFixed(2));
  };

  //carrentValue-AUDtoJPY
  const handleOnChangeCurrentValueAUD = (e) => {
    const new_TargetValue = e.target.value;
    setCurrentValueAUD(new_TargetValue);
    setExchangeValueJPY((new_TargetValue * exchangeRate).toFixed(0));
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

  //-------------calculateArea-----------------

  const handleSubmit = () => {
    //savingAmount
    const savingAmountJPY =
      parseInt(currentValueJPY) + parseInt(exchangeAUDtoJPY);
    const savingAmountAUD =
      parseInt(currentValueAUD) + parseInt(exchangeJPYtoAUD);

    //remaining(AUD/JPY)
    const remainingJPY = parseInt(targetJPY) - savingAmountJPY;
    const remainingAUD = (parseInt(targetAUD) - savingAmountAUD).toFixed(2);

    //weekly calculate
    const targetDate = targetData;
    const remainingWeeks = calculateRemainingWeeks(targetDate);
    const weeklyTargetJPY = (remainingJPY / remainingWeeks).toFixed(0);
    const weeklyTargetAUD = (remainingAUD / remainingWeeks).toFixed(2);

    setResults({
      savingAmountJPY: isNaN(savingAmountJPY) ? "N/A" : savingAmountJPY,
      savingAmountAUD: isNaN(savingAmountAUD) ? "N/A" : savingAmountAUD,
      remainingJPY: isNaN(remainingJPY) ? "N/A" : remainingJPY,
      remainingAUD: isNaN(remainingAUD) ? "N/A" : remainingAUD,
      weeklyTargetJPY: isNaN(weeklyTargetJPY) ? "N/A" : weeklyTargetJPY,
      weeklyTargetAUD: isNaN(weeklyTargetAUD) ? "N/A" : weeklyTargetAUD,
      remainingWeeks: isNaN(remainingWeeks) ? "N/A" : remainingWeeks,
    });
  };

  return (
    <div>
      <div className="md:flex">
        <InputArea
          targetJPY={targetJPY}
          targetAUD={targetAUD}
          currentValueJPY={currentValueJPY}
          currentValueAUD={currentValueAUD}
          exchangeJPYtoAUD={exchangeJPYtoAUD}
          exchangeAUDtoJPY={exchangeAUDtoJPY}
          targetData={targetData}
          setTargetJPY={setTargetJPY}
          setTargetAUD={setTargetAUD}
          setCurrentValueJPY={setCurrentValueJPY}
          setCurrentValueAUD={setCurrentValueAUD}
          setExchangeValueAUD={setExchangeValueAUD}
          setExchangeValueJPY={setExchangeValueJPY}
          setInputData={setInputData}
          handleOnChangeTarget={handleOnChangeTarget}
          handleOnChangeCurrentValueJPY={handleOnChangeCurrentValueJPY}
          handleOnChangeCurrentValueAUD={handleOnChangeCurrentValueAUD}
          handleSubmit={handleSubmit}
        />
        <ResultArea {...results} />
      </div>
    </div>
  );
};

export default MainArea;
