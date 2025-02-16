// pages/api/exchangeRate.js
export default async function handler(req, res) {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/AUD`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }
    const data = await response.json();
    const exchangeRate = parseFloat(data.conversion_rates.JPY).toFixed(2);

    res.status(200).json({ exchangeRate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
