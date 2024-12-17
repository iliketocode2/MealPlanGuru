import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/pages/Home.tsx';
import School from './components/pages/School.tsx';
import About from './components/pages/About.tsx';
import Tufts from './components/pages/Tufts.tsx';
import Contact from './components/pages/Contact.tsx';
import BlogPostWrapper from './components/pages/BlogPostWrapper.tsx';
import NotFound from './components/pages/NotFound.tsx';
import AllPosts from './components/pages/AllPosts.tsx';

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
          <Route path="/tufts/posts" element={<AllPosts />} />
          <Route path="/tufts/posts/:postId" element={<BlogPostWrapper />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;