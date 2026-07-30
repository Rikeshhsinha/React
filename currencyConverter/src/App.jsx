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
   
  }

  const convert = ()=>{
     if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);}

  return (
    <>
      <div className="min-h-screen flex items-center justify-center"
      style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YSOO5QX2y-R9DGDbXyMNLLKlt5shlt123_2xjbCrFb_AEmZQ3T_1_BK1&s=10')`}}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        
        <form onSubmit={(e)=>{e.preventDefault();
        convert();

        }}>
        
        <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center mb-4">
          <div>
            

            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>

        
        </div>

     
        <div className="flex justify-center -my-2 relative z-10">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          type="button"
          onClick={swap}>
            Swap
          </button>
        </div>

  
        <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center mt-4">
          <div>
            

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              amountDisable
              onCurrencyChange={(currency) => setTo(currency)}
            />
          </div>

         
        </div>

        
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
