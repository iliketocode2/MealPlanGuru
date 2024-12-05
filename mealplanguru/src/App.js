import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';  // You'll need to create these components
import School from './components/pages/School';
import About from './components/pages/About';
import Tufts from './components/pages/Tufts';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/about" element={<About />} />
          <Route path="/tufts" element={<Tufts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;