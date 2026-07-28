import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 
  const [amount , setAmount] =useState(0);
  const [from,setFrom] = useState("inr");
  const [to,setTo] = useState("usd");
  const [convertedAmount,setConvertedAmount] = useState(0);


  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = ()=> {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{setConvertedAmount(amount * currencyInfo[to]);}

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

        {/* From */}
        <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center mb-4">
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              From
            </label>

            <input
              type="number"
              placeholder="0"
              className="bg-transparent outline-none text-xl w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Currency
            </label>

            <select className="bg-white border rounded-lg px-3 py-2 outline-none">
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Swap
          </button>
        </div>

        {/* To */}
        <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center mt-4">
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              To
            </label>

            <input
              type="number"
              placeholder="0"
              className="bg-transparent outline-none text-xl w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Currency
            </label>

            <select className="bg-white border rounded-lg px-3 py-2 outline-none">
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
          Convert
        </button>
      </div>
    </div>
    </>
  )
}

export default App
