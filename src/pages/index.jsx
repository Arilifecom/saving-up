import React, { useState } from "react";
import TodaysDate from "../components/TodaysDate";
import InputArea from "../components/InputArea";
import SubmitBtn from "../components/SubmitBtn";
import ResultArea from "../components/ResultArea";
import CustomAlert from "../components/CustomAlert";
import { calculateResults } from "../utils/calculateResults";
import { getExchangeRate } from "../components/GetExchangeRate"

export async function getStaticProps() {
  const exchangeRate = await getExchangeRate(); // `getExchangeRate` を呼び出して為替レートを取得

  return {
    props: {
      exchangeRate, // 取得したデータをページコンポーネントに渡す
    },
    revalidate: 86400, // 24時間ごとに再生成
  };
}


export default function Home({exchangeRate}) {
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
      !targetDate
    ) {
      setAlertMessage("入力されていない箇所があります。");
      setShowResults(false);
      return;
    }

    const calculatedResults = calculateResults(inputData, exchangeRate);
    setResults(calculatedResults);
    setShowResults(true);
  };

  const closeAlert = () => {
    setAlertMessage("");
  };

  return (
    <>
      <div className="flex justify-end mb-4 md:max-w-3xl mx-auto">
        <TodaysDate />
        <div>
      <h2>現在のレート</h2>
        <p className="border mr-2 rounded py-2 px-3.5">{exchangeRate}</p>
    </div>
      </div>
      <InputArea
        inputData={inputData}
        onInputChange={handleInputChange}
        exchangeRate={exchangeRate}
      />
      <SubmitBtn onSubmit={handleSubmit} />
      {showResults && <ResultArea results={results} />}
      {alertMessage && (
        <CustomAlert message={alertMessage} onClose={closeAlert} />
      )}
    </>
  );
}
