import { useState, useEffect } from 'react';


export default function Content() {

    const [currencyRates, setCurrencyRates] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const baseCurrencies = 'USD'
    const targetCurrencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "USD"]
  
    const apiKey = import.meta.env.VITE_API_KEY;

    function fetchCurrency(){
        const targetSymbols = targetCurrencies.join(',');

        fetch(
            `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}&base=${baseCurrencies}&symbols=${targetSymbols}`
        )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok")
              }
              return response.json()
            })
            .then((data) => {
              setCurrencyRates(data.rates)
              setLoading(false)
            })
            .catch((error) => {
              setError(error.message)
              setLoading(false)
            })
    }

    useEffect(() => {
        fetchCurrency();
    }, [])

    if (loading) {
        return <div>Loading...</div>
      }
    
      if (error) {
        return <div>Error: {error}</div>
    }

    function buyCurrencies(exchangeRates) {
        return (exchangeRates * 1.02).toFixed(4);
    }

    function sellCurrencies(exchangeRates) {
        return (exchangeRates * 0.98).toFixed(4);
    }

    return (
        <>
            <div className="container flex items-center justify-center h-screen">
                <div className="overflow-x-auto w-full">
                    <table className="bg-white table-auto border-collapse rounded-2xl w-full">
                    <thead>
                        <tr>
                        <th className="border-b p-3 text-xl">Currency</th>
                        <th className="border-b p-3 text-xl">Buy</th>
                        <th className="border-b p-3 text-xl">Exchange Rate</th>
                        <th className="border-b p-3 text-xl">Sell</th>
                        </tr>
                    </thead>
                    <tbody>
                        {targetCurrencies.map((currency, index) => (
                        <tr key={index}>
                            <td className="p-4 text-lg font-semibold">{currency}</td>
                            <td className="p-4 text-lg">
                            {buyCurrencies(currencyRates[currency]) ? parseFloat(buyCurrencies(currencyRates[currency])).toFixed(4) : 'N/A'}
                            </td>
                            <td className="p-4 text-lg">
                            {currencyRates[currency] ? parseFloat(currencyRates[currency]).toFixed(4) : 'N/A'}
                            </td>
                            <td className="p-4 text-lg">
                            {sellCurrencies(currencyRates[currency]) ? parseFloat(sellCurrencies(currencyRates[currency])).toFixed(4) : 'N/A'}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    <p className="font-semibold text-md mt-3 text-left text-orange-50">*Price currency is based on USD</p>
                    <p className="font-semibold text-md text-left text-orange-50">*As for the API, thanks to <a href="https://currencyfreaks.com/" target='blank' className='underline-offset-3 hover:underline'>Currency Freaks</a></p>
                </div>
            </div>

        </>
    )
}
