import React,{useRef} from "react";
import "./App.css";

export default function App() {
  const fileInputref=useRef(null)
  const handleClick =()=>{
    fileInputref.current.click()
    
  }
  return (
    <div className="container">
      <input type="file"placeholder="Files" ref={fileInputref}/>
      <button onClick={handleClick}>Pick a File</button>
    </div>
  );
}
