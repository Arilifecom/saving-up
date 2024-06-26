import React, { useState } from "react";
import TodaysDate from "../components/TodaysDate";
import GetExchangeRate from "../components/GetExchangeRate";
import InputArea from "../components/InputArea";
import SubmitBtn from "../components/SubmitBtn";
import ResultArea from "../components/ResultArea";
import RefreshBtn from "../components/RefreshBtn";
import CustomAlert from "../components/CustomAlert";
import { calculateResults } from "../utils/calculateResults";

export default function Home() {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [inputData, setInputData] = useState({
    targetJPY: "",
    currentValueJPY: "",
    currentValueAUD: "",
    targetDate: "",
  });
  const [results, setResults] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (name, value) => {
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const { targetJPY, currentValueJPY, currentValueAUD, targetDate } =
      inputData;

    // 入力フィールドのバリデーション
    if (
      !targetJPY ||
      !currentValueJPY ||
      !currentValueAUD ||
      !targetDate ||
      !exchangeRate
    ) {
      setAlertMessage("入力されていない箇所があります。");
      setShowResults(false);
      return;
    }

    const calculatedResults = calculateResults(inputData, exchangeRate);
    setResults(calculatedResults);
    setShowResults(true);
  };

  const handleRefresh = () => {
    setInputData({
      targetJPY: "",
      currentValueJPY: "",
      currentValueAUD: "",
      targetDate: "",
    });
    setResults({});
    setShowResults(false);
  };

  const closeAlert = () => {
    setAlertMessage("");
  };

  return (
    <>
      <div className="flex justify-end mb-4 md:max-w-3xl mx-auto">
        <TodaysDate />
        <GetExchangeRate setExchangeRate={setExchangeRate} />
      </div>
      <InputArea
        inputData={inputData}
        onInputChange={handleInputChange}
        exchangeRate={exchangeRate}
      />
      <SubmitBtn onSubmit={handleSubmit} />
      {showResults && <ResultArea results={results} />}
      <RefreshBtn onRefresh={handleRefresh} />
      {alertMessage && (
        <CustomAlert message={alertMessage} onClose={closeAlert} />
      )}
    </>
  );
}
