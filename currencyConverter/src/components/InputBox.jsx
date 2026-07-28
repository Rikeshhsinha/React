import React,{useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
}) {

const amountInputId = useId();

  return (
    <div className="bg-white p-4 rounded-lg flex justify-between">
      <div className="w-1/2">
        <label 
        htmlFor={amountInputId}
        className="text-gray-500 text-sm mb-2 inline-block">
          {label}
        </label>

        <input 

          id={amountInputId} 
          className="outline-none w-full bg-transparent"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2 flex flex-col items-end">
        <p className="text-gray-500 text-sm mb-2">Currency Type</p>

        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;