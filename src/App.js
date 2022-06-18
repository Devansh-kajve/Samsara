import {React ,Suspense, useState, useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Play from './Pages/Play';


const App = () => { 



     return( 
        <div>
        <Switch>
        <Route exact path='/' component={Home} />
      <Route path='/play' component={Play} />
        </Switch>
      </div>
     )
};



export default App;
