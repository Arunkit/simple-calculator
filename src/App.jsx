
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,SetRate]=useState(0);

  const [interest,setInterest]=useState(0);

  console.log(amount,year,rate);

   const calculate=(e)=>{
    const output=amount*year*rate/100;
    console.log(output);
    setInterest(output);
   }
   const reset=(e)=>{
    setAmount(0);
    setYear(0);
    SetRate(0);
    setInterest(0);
   }





  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>calculate your simple interest with us ❤️</p>
        </div>
        <div className="total">
          <h2>&#8377; {interest}</h2>
          <p>Your Total Interest</p>
        </div>
        <div className="form">
          <form>
            <div className="input">
            <TextField id="outlined-basic"value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="filled" />
          <br />
            <TextField id="filled-basic"value={year||""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="filled" />
        <br />
            <TextField id="standard-basic"value={rate||""} onChange={(e)=>SetRate(e.target.value)} label="Rate" variant="filled" />
            <br />
            </div>
            <div className="button">
              <Button variant="contained" onClick={e=>calculate(e)}>calculate</Button>
              <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>

            </div>
          </form>
        </div>
      </div>
      
    
    </div>
  );
}

export default App;
