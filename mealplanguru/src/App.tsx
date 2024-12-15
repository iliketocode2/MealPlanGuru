import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar.tsx';
import Home from './components/pages/Home.tsx';  // You'll need to create these components
import School from './components/pages/School.tsx';
import About from './components/pages/About.tsx';
import Tufts from './components/pages/Tufts.tsx';
import Footer from './components/Footer.tsx';


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
        <Footer />
      </div>
    </Router>
  );
}

export default App;