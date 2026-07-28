import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

     const [data, setData] = useState({});

  useEffect(() => {
     

      fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => {
          response.json();
        })
        .then((res) => {
          setData(res.rates);
        });
    },
    [currency],
   
  );

   console.log(data);

  return data;
}

export default useCurrencyInfo;
