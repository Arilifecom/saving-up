import React, { useState } from "react";
import TodaysDate from "../components/TodaysDate";
import InputArea from "../components/InputArea";
import SubmitBtn from "../components/SubmitBtn";
import ResultArea from "../components/ResultArea";
import CustomAlert from "../components/CustomAlert";
import { calculateResults } from "../utils/calculateResults";


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
      <div className="flex justify-end mb-4 md:max-w-xl px-4 mx-auto">
        <TodaysDate />
        <div>
      <h2>現在のレート</h2>
      <p className="border mr-2 rounded py-2 px-3.5">{exchangeRate ? exchangeRate : 'データの取得に失敗しました'}</p>
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


export async function getStaticProps() {
  const apiKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/AUD`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    const exchangeRate = parseFloat(data.conversion_rates.JPY).toFixed(2);    

    return{
      props:{
        exchangeRate,
      },
      revalidate: 86400,
    };
    
  }catch (error){
    console.error('Error fetching exchange rate:', error.message);

  return{
    props:{
      exchangeRate: 'Error',
    },
  };
}
}