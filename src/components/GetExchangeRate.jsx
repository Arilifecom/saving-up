import React, { useEffect, useState } from "react";

const GetExchangeRate = ({ setExchangeRate }) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    // Fetch the exchange rate from an API
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/AUD"
        );
        const data = await response.json();
        const rate = data.rates.JPY;
        setExchangeRate(rate);
        setRate(rate.toFixed(2));
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

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
