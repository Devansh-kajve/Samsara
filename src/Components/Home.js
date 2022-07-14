import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Web3 from 'web3';
import {Suspense, useState, useEffect,  } from 'react';
import Icon from '../Assets/Bg';
import Loader from './Loader';

class Home extends React.Component{

  constructor(props){
        super(props);
    this.state = {
     start: false,
    };

    this.Change = this.Change.bind(this)
  }

  Change(){
    this.setState({ start: true });
    console.log(this.state.start)
  }

  render(){

  async function connect() {
  if (window.ethereum) {
 
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);


   } else {
    console.log("No wallet");
   }
  }

  if ((this.state.start)){ return(
    <Loader/>
    )}

    return (
    <div >
     
    <h1 id="title">Samsāra</h1>
    <span>A Metaverse Project by Devansh Kajve</span>
   <button id="enter" onClick={this.Change}>Enter</button>
   <div className='social'>
    <h2>Contact Me</h2>
    <Link to='#'><img src={require('./../Assets/Images/linkedln.png')} alt='linkedln'/></Link>
      <Link to='#'><img src={require('./../Assets/Images/twitter.png')} alt='twitter'/></Link>
   <Link to='#'><img src={require('./../Assets/Images/github.png')} alt='github'/></Link>
   <Link to='#'><img src={require('./../Assets/Images/mail.png')} alt='mail'/></Link>
   </div>
    </div>
    )
  }
   }   ;
  
  export default Home;
