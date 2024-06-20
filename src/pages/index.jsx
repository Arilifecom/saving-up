import { useState } from "react";
import TodaysDate from "../components/TodaysDate";
import GetExchangeRate from "../components/getRateData";
import MainArea from "../components/mainArea";

export default function Home() {
  const [exchangeRate, setExchangeRate] = useState(null);

  return (
    <div className="max-w-6xl flex flex-col mx-auto relative">
      <div className="flex justify-end mb-2">
        <TodaysDate />
        <GetExchangeRate
          setExchangeRate={setExchangeRate}
          exchangeRate={exchangeRate}
        />
      </div>
      <div className="min-h-min border-2 border-gray-900 rounded-2xl">
        <MainArea exchangeRate={exchangeRate} />
      </div>
    </div>
  );
}
