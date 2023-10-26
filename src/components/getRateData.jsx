import { useEffect, useState } from "react";

function GetRateData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=AUD&to_currency=JPY&apikey=7PV6050YEOLV42HS"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  let Data = Object.values(data);

  console.log(Data);

  return (
    <div>
      <h2>現地点のレート</h2>
      {Data.map((item) => (
        <p className="border mr-2 rounded py-2 px-3.5" key={item}>
          {item["5. Exchange Rate"]}
        </p>
      ))}
    </div>
  );
}

export default GetRateData;
