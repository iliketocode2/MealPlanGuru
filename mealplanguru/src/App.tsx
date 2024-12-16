import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/pages/Home.tsx';  // You'll need to create these components
import School from './components/pages/School.tsx';
import About from './components/pages/About.tsx';
import Tufts from './components/pages/Tufts.tsx';
import Posts from './components/pages/BlogPostWrapper.tsx';
import NotFound from './components/pages/NotFound.tsx';


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
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;