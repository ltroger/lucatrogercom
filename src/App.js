import React from "react";
import ContactForm from "./form";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const App = () => {
  return (
    <main>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Über mich</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <h3>Links</h3>
        <ul>
          <li><Link to="https://www.linkedin.com/in/luca-troger-105a77346/">LinkedIn</Link></li>
          <li><Link to="https://github.com/ltroger">GitHub</Link></li>
          <li><Link to="https://portfolio.fh-salzburg.ac.at/users/luca-mathias-troger">Portfolio FH Salzburg</Link></li>
        </ul>
      </footer>
    </Router>
    </main>
  );
};

export default App;