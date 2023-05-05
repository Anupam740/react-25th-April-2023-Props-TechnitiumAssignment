import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Axiosdogimgapi.css'

const Axiosdogimgapi = () => {
    const [dogImg,setDogImg]=useState('')

    useEffect(()=>{
        getDogImg()
    },)
    async function getDogImg(){
        try{
            const response=await axios.get('https://dog.ceo/api/breeds/image/random')
            setDogImg(response.data.message)
    } catch(error){
        console.error(error)
    }}

  return (
    <div className='Container'>
      <img id="img" src={dogImg}/>
    </div>
  )
}

export default Axiosdogimgapi;
