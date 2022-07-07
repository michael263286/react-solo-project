import React from "react";
import CardResults from '../components/CardResults'
import '../App.css'


function Home(){
  return(
    <div style={{fontSize:'18px',color:'white' }}>
      <br></br>
      <h1 style={{fontSize:'49px'}}>Choose your Starting Five!</h1>
      <br></br>
      <CardResults/>
    </div>
  )
}

export default Home