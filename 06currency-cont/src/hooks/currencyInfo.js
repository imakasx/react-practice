import { useState , useEffect } from "react";

function currencyInfo(currency) {
    const [data , setData] =  useState({});
    useEffect(()=>{
        fetch(`https://api.frankfurter.dev/v2/rate/USD/INR`)
        .then(response => response.json())
        .then(data=> setData(data[currency])) 
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default currencyInfo;