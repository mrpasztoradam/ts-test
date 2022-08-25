import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Sidebar from './components/Sidebar';
import Logo from './components/Logo';

import Home from './pages/Home';
import Team from './pages/Team';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Analytics from './pages/Analytics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Logo />
        </div>
        <div id="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
