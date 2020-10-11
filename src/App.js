import React from 'react';
import './App.css';
import About from './sections/about';
import Projects from './sections/projects';
import Achievements from './sections/achievements';
import Contact from './sections/contact';
import Skills from './sections/skills';
import data from './data.json';

function App() {

  return (
    <div className="App">
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} />
      <Achievements achievements={data.achievements} />
      <Contact connections={data.connections} />
    </div>
  );
}

export default App;
