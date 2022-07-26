import React, {Component} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css'
import Web3 from 'web3';
import {Suspense, useState, useEffect,  } from 'react';
import Icon from '../Assets/Bg';
import Loader from './Loader';



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


  // if ((this.state.start)){ return(
  //   <Loader/>
  //   )}

    return (
    <div >
     
    <h1 id="title">Samsāra</h1>
    <span>A Metaverse Project by Devansh Kajve</span>
   <button id="enter" onClick={() => {history.push('/play')}}>Enter</button>
   <div className='social'>
    <h2>Contact Me</h2>
    <div className='links'><Link to='#'><img src={require('./../Assets/Images/linkedln.png')} alt='linkedln'/></Link>
      <Link to='#'><img src={require('./../Assets/Images/twitter.png')} alt='twitter'/></Link>
   <Link to='#'><img src={require('./../Assets/Images/github.png')} alt='github'/></Link>
   <Link to='#'><img src={require('./../Assets/Images/mail.png')} alt='mail'/></Link>
   </div>
   </div>
    </div>
    )
  }
  
  export default Home;
