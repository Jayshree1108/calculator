import React from 'react';
import './App.css';
import {Greet} from './components/Greet.js'; // Greet is const var hence used in curly bracket.
import Welcome from './components/Welcome.js';
import Calculator from './components/Calculator.js';
function App() {
  return (
    <div className="App">
      <Greet name="thisIsOneAttr1" anyName="thisIssecondAttr1"/>
      <Greet name="thisIsOneAttr2" anyName="thisIssecondAttr2">
          <p>This is children in props sent from parent</p>
      </Greet>
      <Welcome name="thisIsOneAttr3" anyName="thisIssecondAttr3"/>
      <Welcome name="thisIsOneAttr4" anyName="thisIssecondAttr4">
          <p>This is children in props sent from parent to class comp</p>
      </Welcome>
      <p>======================================</p>
      <Calculator/>    
    </div>
  );
}

export default App;
