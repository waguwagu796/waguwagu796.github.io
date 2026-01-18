import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Fullstack from './pages/Fullstack';
import AI from './pages/AI';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/:category/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


