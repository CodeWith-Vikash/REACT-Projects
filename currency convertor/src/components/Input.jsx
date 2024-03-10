import React, { useEffect, useState } from 'react'

const Input = () => {
    const [from, setfrom] = useState('USD')
    const [to, setto] = useState('INR')
    const [conversionRates, setconversionRates] = useState([])
    const [rates, setrates] = useState({})
    const [amount, setamount] = useState(0)
    const [convertedAmount, setconvertedAmount] = useState(0)

    const getData=async ()=>{
      const apiKey="ab62214756b648fdf66a46d1"
      const url=` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`
      let response=await fetch(url)
      let data=await response.json()
      setrates(data.conversion_rates)
      setconversionRates(Object.keys(data.conversion_rates))
      // console.log(conversionRates);
  
    //   console.log(rates);
    }
  
    useEffect(()=>{
       getData()
    },[from,to])

    const convertCurrency=()=>{
        let finalamount= amount*rates[to]
        setconvertedAmount(finalamount)
    }

  return ( <div className='box'>
       <h1>Currency Convertor</h1>
      <div className='convertor'>
            <div className='inputbox first'>
        <div className="input">
            <label>From</label>
            <input type="number" onChange={e => setamount(e.target.value)} value={amount}/>
        </div>
        <div className="select">
            <label>Currency Type</label>
            <select onChange={e => setfrom(e.target.value)} value={from}>

                {conversionRates.map((currency)=>{
                    return <option value={currency} key={currency}>{currency}</option>
                })}
            </select>
        </div>
    </div>
    {/* 00000000000000000000000000000000000000000000000 */}
    <div className='inputbox'>
        <div className="input">
            <label>To</label>
            <input type="number" readOnly value={convertedAmount}/>
        </div>
        <div className="select">
            <label>Currency Type</label>
            <select value={to} onChange={e => setto(e.target.value)}>

                {conversionRates.map((currency)=>{
                    return <option value={currency} key={currency}>{currency}</option>
                })}
            </select>
        </div>
    </div>
  </div>
  <button onClick={convertCurrency}>Convert {from} to {to}</button>
  </div>
  )
}

export default Input