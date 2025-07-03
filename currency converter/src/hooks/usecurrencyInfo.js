import { useEffect, useState } from "react";

function usecurrencyInfo(currency){
    const [data , setdata] = useState({});
    useEffect(() => {
      fetch(`https://api.exchangerate.host/latest?base=${currency}`)
      .then(res => res.json())
      .then((res) => setdata(res.rates));
      console.log(data);
    } ,[currency]);
    console.log(data);
    return data;
}

export default usecurrencyInfo;