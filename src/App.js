import React,{useState,useEffect,useRef} from "react";
import "./App.css";

export default function App() {
  const [index,setIndex]=useState(0)
  const imgRef =useRef(null)

  
  const [imgData,SetImgData]=useState("https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022_960_720.jpg")
  
  var arr=["https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_960_720.jpg","https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_960_720.jpg","https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg","https://cdn.pixabay.com/photo/2013/07/02/22/20/bouquet-142876_960_720.jpg" ]
  useEffect(()=>{
    imgRef.current.src=imgData

  })
  const handleClick=()=>{
    if(index==arr.length-1){
      setIndex(0)

    }
    else{
      setIndex(index+1)
      SetImgData(arr[index])

    }
    

  }
  return (
    <div>
      <img id="img" src="" ref={imgRef} />
      <button onClick={handleClick}>Click to Change</button>
    </div>
  );
}
