import React from 'react';
import './App.css';
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Skills from './sections/skills';
import data from './data.json';

function App() {

  return (
    <div className="App">
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Contact connections={data.connections} />
    </div>
  );
}

export default App;
