import { useEffect } from "react";

function GetExchangeRate({ setExchangeRate, exchangeRate }) {
  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const response = await fetch(`/api/exchangeRate`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExchangeRate(parseFloat(data.conversion_rates.JPY).toFixed(2));
      } catch (error) {
        console.log("Failed to fetch exchange rate:", error);
      }
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
