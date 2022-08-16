import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'
import Web3 from 'web3';



const Home = () => {

  const history = useHistory()
  
  async function connect() {
  if (window.ethereum) {
 
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);


   } else {
    console.log("No wallet");
   }
  }


    return (
    <div className='page'>
    <h1 id="title">Samsāra</h1>
    <span>A Metaverse Project by <a href='#'>Devansh kajve</a></span>
   <button id="enter" onClick={() => {history.push('/play')}}>Enter</button>
    </div>
    )
  }
  
  export default Home;
