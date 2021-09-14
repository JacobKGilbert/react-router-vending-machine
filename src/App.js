import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar';
import VendingMachine from './VendingMachine'
import { Soda, Coffee, Water } from './Drinks'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/coffee">
          <Coffee />
        </Route>
        <Route exact path="/water">
          <Water />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
