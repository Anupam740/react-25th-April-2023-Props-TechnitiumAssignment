import React,{useState} from "react";
import "./App.css";

export default function App() {
  
  
  const [luckyNum, setluckyNum] = useState(Math.floor(Math.random() * 100) + 1);
  // console.log(luckyNum)
  const[data,setData]=useState()
  const[count,setCount]=useState(1)
  // const[isData,setIsData]=useState()
  const changeHandle=(event)=>{
    setData(event.target.value)
  }
  let flag=false
  function handleClick(){
    
    setCount(count+1)
    if(data<luckyNum){
      alert("Your num is smaller than the lucky num")
      
    }
    else if(data>luckyNum){
      alert("Your num is greater than the lucky num")
      

    }
    else {
      flag=true
      
      alert(`Congratulations!!! You guessed the Lucky Number i.e., ${luckyNum}.You found the Num in ${count} times`)
    }
    if(flag==true){
      setCount(0)
      setluckyNum((Math.floor(Math.random() * 100) + 1))
    }
  }
  return (
    <div id="container"><span id="span">Guess The Number:</span>
     <input id="input" type="Number" value={data} placeholder="Guess a number" onChange={changeHandle}/><br/>
    

     <button  onClick={handleClick}>Submit</button></div>
    
  );
}