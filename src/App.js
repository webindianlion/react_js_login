import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Reducer1 from './features/reducer1/Reducer1';
import Reducer2 from './features/reducer2/Reducer2';
import Component1 from './features/component1/Component1';
import Comp1 from './features/usecallback/Comp1';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Reducer2 />
        <Component1 />
        <Reducer1 />  
        <Comp1 />      
      </header>
    </div>
  );
}

export default App;
