import { useState } from "react";
import TodaysDate from "../components/TodaysDate";
import GetExchangeRate from "../components/getRateData";
import MainArea from "../components/mainArea";

export default function Home() {
  const [exchangeRate, setExchangeRate] = useState(null);

  return (
    <>
      <div className="flex justify-end mb-2 md:max-w-5xl mx-auto">
        <TodaysDate />
        <GetExchangeRate
          setExchangeRate={setExchangeRate}
          exchangeRate={exchangeRate}
        />
      </div>
      <MainArea exchangeRate={exchangeRate} />
    </>
  );
}
