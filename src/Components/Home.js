import React, {Component} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css'
import Web3 from 'web3';
import {Suspense, useState, useEffect,  } from 'react';
import Icon from '../Assets/Bg';
import Loader from './Loader';
import {ReactComponent as Github} from './../Assets/Images/github.svg'
import {ReactComponent as Twitter} from './../Assets/Images/twitter.svg'
import Mail from './../Assets/Images/mail-.png'
import {ReactComponent as LinkedIn} from './../Assets/Images/linkedin.svg'



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
    <div className='page'>
    <h1 id="title">Samsāra</h1>
    <span>A Metaverse Project by <a href='#'>Devansh kajve</a></span>
   <button id="enter" onClick={() => {history.push('/play')}}>Enter</button>
    </div>
    )
  }
  
  export default Home;
