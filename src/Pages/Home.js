import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Web3 from 'web3';
import {Suspense, useState, useEffect } from 'react';

const Home = () => {
  
  async function connect() {
  if (window.ethereum) {
 
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);


   } else {
    console.log("No wallet");
   }
  }

    return (
    <div >
    <h1 id="title">Samsāra</h1>
    <span>A Metaverse Project by Devansh Kajve</span>
    
    <button id="Connect" onClick={connect}>Connect Wallet</button>
   <Link to='/play'> <button id="enter" >Enter</button></Link>
    </div>
    )
    };
  
  export default Home;
