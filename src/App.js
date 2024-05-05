import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.css';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;