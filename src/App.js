import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { skills, projects, certifications } from './data/data';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Header from './components/Header';
import Contact from './components/ContactMe'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="slds-container_large">
          <Header />
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Skills skills={skills} />
                  <Projects projects={projects} />
                </>
              } 
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
