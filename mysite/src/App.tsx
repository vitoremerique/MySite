import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import ScientificInitiation from './components/ScientificIniciation/ScientificIniciation';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Introduction/>
      <AboutMe />
      <ScientificInitiation />
      <Skills />
      <Contact/>
    </div>
  );
};

export default App;
