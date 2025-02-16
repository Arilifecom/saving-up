import React, { useState } from "react";
import TodaysDate from "../components/TodaysDate";
import InputArea from "../components/InputArea";
import SubmitBtn from "../components/SubmitBtn";
import ResultArea from "../components/ResultArea";
import CustomAlert from "../components/CustomAlert";
import { calculateResults } from "../utils/calculateResults";

export default function Home({ exchangeRate }) {
  //状態管理｜入力データ
  const [inputData, setInputData] = useState({
    targetJPY: "",
    currentValueJPY: "",
    currentValueAUD: "",
    targetDate: "",
  });

  //状態管理｜エラーメッセージ
  const [alertMessage, setAlertMessage] = useState("");

  //状態管理｜計算結果の表示/非表示
  const [showResults, setShowResults] = useState(false);

  //状態管理｜計算結果データの管理
  const [results, setResults] = useState({});

  //状態を更新｜handleInputChange関数｜propsでinpuAreaへ｜関数を通じてinpuAreaからデータ取得し、setInputDataで状態を更新（prevData）は前の状態を引きづいてname：に取得したvalueを渡す
  const handleInputChange = (name, value, cursorPos) => {
    // targetDate の場合は処理をスキップ
    if (name === "targetDate") {
      setInputData((prevData) => ({ ...prevData, [name]: value }));
      return;
    }

    // 取得したデータのカンマを取り除いて、数字のみかどうかをチェック
    const rawValue = value.replace(/,/g, "");

    // 数字以外の入力を防止
    if (!/^[0-9]*$/.test(rawValue)) {
      setAlertMessage("半角数字のみ入力できます");
      return;
    }

    setAlertMessage(""); // エラーメッセージをリセット
    // カンマを追加する関数
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setInputData((prevData) => ({ ...prevData, [name]: formattedValue }));

    // カーソル位置を補正（カンマが増えた分だけ調整）
    setTimeout(() => {
      const inputElement = document.querySelector(`input[name=${name}]`);

      if (inputElement) {
        inputElement.selectionStart =
          cursorPos + (formattedValue.length - rawValue.length);
        inputElement.selectionEnd = inputElement.selectionStart;
      }
    }, 0);
  };

  // 状態を更新｜handleSubmit関数｜エラーチェック｜ユーザー入力データをcalculateResultsコンポーネントへ渡す｜計算結果をsetResultsに渡し状態更新｜setShowResultsにtrueを渡す
  const handleSubmit = () => {
    const { targetJPY, currentValueJPY, currentValueAUD, targetDate } =
      inputData;

    // 入力フィールドにデータがない時
    if (!targetJPY || !currentValueJPY || !currentValueAUD || !targetDate) {
      setAlertMessage("入力されていない箇所があります。");
      setShowResults(false);
      return;
    }

    // 計算コンポーネントにユーザー入力データとレートを渡す
    const calculatedResults = calculateResults(inputData, exchangeRate);
    setResults(calculatedResults);
    setShowResults(true);
  };

  const closeAlert = () => {
    setAlertMessage("");
  };

  //期日と目標金額再設定ボタン後に非表示
  const changeTarget = () => {
    setShowResults(false);
  };

  return (
    <>
      <div className="flex justify-end mb-4 md:max-w-xl px-4 mx-auto">
        <TodaysDate />
        <div>
          <h2>現在のレート</h2>
          <p className="border border-headline mr-2 rounded py-2 px-3.5">
            {exchangeRate ? exchangeRate : "データの取得に失敗しました"}
          </p>
        </div>
      </div>
      <div className="pb-3">
        <InputArea
          inputData={inputData}
          handleInputChange={handleInputChange}
          exchangeRate={exchangeRate}
        />
        {alertMessage && (
          <CustomAlert message={alertMessage} onClose={closeAlert} />
        )}
        <SubmitBtn onSubmit={handleSubmit} />
        {showResults && (
          <ResultArea results={results} changeTarget={changeTarget} />
        )}
        {alertMessage && (
          <CustomAlert message={alertMessage} onClose={closeAlert} />
        )}
      </div>
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

    return {
      props: {
        exchangeRate,
      },
      revalidate: 86400,
    };
  } catch (error) {
    console.error("Error fetching exchange rate:", error.message);

    return {
      props: {
        exchangeRate: "Error",
      },
    };
  }
}
