import { useEffect } from "react";

function GetExchangeRate({ setExchangeRate, exchangeRate }) {
  useEffect(() => {
    async function fetchExchangeRate() {
      const response = await fetch(`/api/exchangeRate`);
      const data = await response.json();
      setExchangeRate(parseFloat(data.conversion_rates.JPY).toFixed(2));
    }
    fetchExchangeRate();
  }, [setExchangeRate]);

  return (
    <div>
      <h2>現地点のレート</h2>
      <p className="border mr-2 rounded py-2 px-3.5">{exchangeRate}</p>
    </div>
  );
}

export default GetExchangeRate;
