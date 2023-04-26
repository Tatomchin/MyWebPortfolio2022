import './App.css';
import Contact from './components/Contact/Contact';
import MyProjects from './components/MyProjects/MyProjects';
import Navbar from './components/Navbar/Navbar';
import PictureProfile from './components/PictureProfile';
import Sayhi from './components/Sayhi';
import Skills from './components/Skills/Skills';
import UnderBar from './components/UnderBar/UnderBar';

import { useEffect, useRef } from 'react';



function App() {


  const techinTag = useRef(null);
  const options = {
    threshold: 1
  }

  useEffect(() => {

    const observerKub = new IntersectionObserver(wait => {
      console.log(wait)
    }, {options});
    if (techinTag.current) {
      observerKub.observe(techinTag.current)
    }
    return () => {
      if (techinTag.current) {
        observerKub.unobserve(techinTag.current)
      }
    }
    }, [techinTag, options])


  return (
    <section className="App" >
      <Navbar />
      <div className="Content">
        <section id="Techin" >
          <PictureProfile />
          <Sayhi />
        </section>
        <section id="Skills" ref={techinTag}><Skills /></section>
        <section id="Contact"  ><Contact /></section>
        <section id="Projects" ><MyProjects /></section>
      </div>
      <UnderBar />
    </section>
  );
}

export default App;
