import React, { useEffect, useState } from "react";

const GetExchangeRate = ({ setExchangeRate }) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const response = await fetch(`/api/exchangeRate`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const roundedRate = parseFloat(data.conversion_rates.JPY).toFixed(2);
        setExchangeRate(roundedRate);
        setRate(roundedRate);
      } catch (error) {
        console.log("Failed to fetch exchange rate:", error);
      }
    }
    fetchExchangeRate();
  }, [setExchangeRate]);

  return (
    <div>
      <h2>現在のレート</h2>
      <p className="border mr-2 rounded py-2 px-3.5">{rate}</p>
    </div>
  );
};

export default GetExchangeRate;
