import './App.css';
import Techin from './components/Techin';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import MyProjects from './components/MyProjects/MyProjects';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import imgGear1 from './picture/section1/gear1.png';
import imgGear2 from './picture/section1/gear2.png';
import imgGear3 from './picture/section1/gear3.png';

import React, { useEffect, useRef, useState } from 'react';
const ConData = React.createContext();
function App() {

  //Check Top Tag to each element.
  const contentTag = useRef(null);
  // const [techinTag,setTechinTag] = useState(null);
  const skillTag = useRef(null);
  const contactTag = useRef(null);
  const projectTag = useRef(null);

  const [st_SkillTagTop, setST_SkillTagTop] = useState(false);
  const [st_ContactTagTop, setST_ContactTagTop] = useState(false);
  const [st_ProjectTagTop, setST_ProjectTagTop] = useState(false);

  const scrollHandler = () => {
    let contentTagTop = contentTag.current.getBoundingClientRect();
    let skillTagTop = skillTag.current.getBoundingClientRect();
    let contactTagTop = contactTag.current.getBoundingClientRect();
    let projectTagTop = projectTag.current.getBoundingClientRect();

    document.documentElement.style.setProperty('--scrollRotate--', ((contentTagTop.top * -1) / 10) + 'deg');

    if (skillTagTop.top <= 200) {
      setST_SkillTagTop(true)
      setST_ContactTagTop(false)
      setST_ProjectTagTop(false)
    } else { setST_SkillTagTop(false) }

    if (projectTagTop.top <= 60) {
      setST_SkillTagTop(false)
      setST_ContactTagTop(false)
      setST_ProjectTagTop(true)
    } else { setST_ProjectTagTop(false) }

    if (contactTagTop.top <= 100) {
      setST_SkillTagTop(false)
      setST_ContactTagTop(true)
      setST_ProjectTagTop(false)
    } else { setST_ContactTagTop(false) }


  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);


  //Check Size of Window Width
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  return (
    <ConData.Provider value={{ st_SkillTagTop, st_ContactTagTop, st_ProjectTagTop, windowDimension }}>
      <section className="App" >
        <Navbar />
        <div className="Content" ref={contentTag}>
          {/* <img id="imgGear1" src={imgGear1} alt="Gear1" />
          <img id="imgGear2" src={imgGear2} alt="Gear2" />
          <img id="imgGear3" src={imgGear3} alt="Gear3" /> */}
          <section id="Techin" ><Techin /></section>
          <section id="Skills" ref={skillTag} ><Skills /></section>
          <section id="Projects" ref={projectTag} ><MyProjects /></section>
          <section id="Contact" ref={contactTag} ><Contact /></section>
        </div>
        <Footer />
      </section>
    </ConData.Provider>
  );
}
export { ConData };
export default App;
