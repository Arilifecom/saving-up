
export async function GetExchangeRate (){
      try {
        const response = await fetch(`/api/exchangeRate`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const roundedRate = parseFloat(data.conversion_rates.JPY).toFixed(2);
        exchangeRate(roundedRate);
      } catch (error) {
        console.log("Failed to fetch exchange rate:", error);
      }

      return exchangeRate;
    };


export default GetExchangeRate;
