import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <div className="container">
        <nav id="nav">
          <Logo />
        </nav>
        <div id="sidebar">Sidebar</div>
        <div id="card-container">
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
