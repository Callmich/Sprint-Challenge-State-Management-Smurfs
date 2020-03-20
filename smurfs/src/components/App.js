import React, { Component } from "react";
import "./App.css";
import SmurfHeader from './Header';
import SmurfForm from './SmurfForm';
import SmurfVillage from './Village';

function App() {
 
    return (
      <div className="App">
        <SmurfHeader/>
        <SmurfForm/>
        <SmurfVillage/>
      </div>
    );
  }


export default App;
