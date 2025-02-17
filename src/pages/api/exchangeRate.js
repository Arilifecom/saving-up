// pages/api/exchangeRate.js
export default async function getExchangeRate(req, res) {
  const url = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/AUD`;

  const respons = await fetch(url);
  if (!respons.ok) {
    return res.status(500).json({ error: "Failed to fetch exchange rates" });
  }

  const data = await respons.json();
  res.status(200).json(data);
}
