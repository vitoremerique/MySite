import React from 'react';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { useReveal } from './hooks/useReveal';
import './App.css';

const App: React.FC = () => {
  useReveal();

  return (
    <div className="app">
      <Header />
      <main>
        <Introduction />
        <AboutMe />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
