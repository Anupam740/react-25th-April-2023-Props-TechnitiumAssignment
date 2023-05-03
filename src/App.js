import React,{useState,useEffect} from "react";
import "./App.css";

export default function App() {
  const[data,setData]=useState()
  async function DogImg(){
    const response=await fetch('https://dog.ceo/api/breeds/image/random')
    const dogimage=await response.json()
    setData(dogimage.message)
  }
  useEffect(()=>{
    DogImg();
  })
  return (
    <div className="dogimg">
      <img id="img"
      src={data}/>
    </div>
  );
}
