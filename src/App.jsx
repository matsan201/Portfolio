import './App.css'

import NavBar from './components/NavBar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import {Projects} from './components/Projects/projects'
import {Contact} from './components/Contact/contact';

function App() {  
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
