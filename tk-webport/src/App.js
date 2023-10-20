import './App.css';
import Techin from './components/Techin';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import MyProjects from './components/MyProjects/MyProjectsList';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import imgGear1 from './picture/assets/gear1.png';
import imgGear2 from './picture/assets/gear2.png';
import imgGear3 from './picture/assets/gear3.png';
import imgArrow from './picture/assets/arrow.png';

import React, { useEffect, useRef, useState } from 'react';
const ConData = React.createContext();
function App() {

  //Check Top Tag to each element.
  const contentTag = useRef(null);
  const techinTag = useRef(null);
  const skillTag = useRef(null);
  const contactTag = useRef(null);
  const projectTag = useRef(null);

  const [st_scrollToTop, setST_ScrollToTop] = useState(false);
  const [st_scrollTagtop, setST_ScrollTagtop] = useState(true);

  const [st_techinTagTop, setST_TechinTagTop] = useState(true);
  const [st_SkillTagTop, setST_SkillTagTop] = useState(false);
  const [st_ContactTagTop, setST_ContactTagTop] = useState(false);
  const [st_ProjectTagTop, setST_ProjectTagTop] = useState(false);

  const scrollHandler = () => {
    let contentTagTop = contentTag.current.getBoundingClientRect();
    let techinTagTop = techinTag.current.getBoundingClientRect();
    let skillTagTop = skillTag.current.getBoundingClientRect();
    let contactTagTop = contactTag.current.getBoundingClientRect();
    let projectTagTop = projectTag.current.getBoundingClientRect();

    document.documentElement.style.setProperty('--scrollRotate--', ((contentTagTop.top * -1) / 10) + 'deg');

    if (contentTagTop.top <= -100) {
      setST_ScrollToTop(true);
    } else { setST_ScrollToTop(false) }

    if (techinTagTop.top <= -100) {
      setST_ScrollTagtop(false);
    } else { setST_ScrollTagtop(true) }

    if (techinTagTop.top <= 0) {
      setST_TechinTagTop(true);
      setST_SkillTagTop(false)
      setST_ContactTagTop(false)
      setST_ProjectTagTop(false)
    } else { setST_TechinTagTop(false) }

    if (skillTagTop.top <= 200) {
      setST_TechinTagTop(false);
      setST_SkillTagTop(true)
      setST_ContactTagTop(false)
      setST_ProjectTagTop(false)
    } else { setST_SkillTagTop(false) }

    if (projectTagTop.top <= 150) {
      setST_TechinTagTop(false);
      setST_SkillTagTop(false)
      setST_ContactTagTop(false)
      setST_ProjectTagTop(true)
    } else { setST_ProjectTagTop(false) }

    if (contactTagTop.top <= 100) {
      setST_TechinTagTop(false);
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
    <ConData.Provider value={{ st_scrollTagtop, st_techinTagTop, st_SkillTagTop, st_ContactTagTop, st_ProjectTagTop, windowDimension }}>
      <section className="App" >
        <Navbar />
        <div id="scrollToTop" className={`${st_scrollToTop ? '' : 'HideScrollUp'} `}>
          <a href='#Techin'>
            <img id="imgArrowScrollTop" src={imgArrow} alt="ArrowScrollTop" />
            <img id="imgGearScrollTop" src={imgGear3} alt="GearScrollTop" />
          </a>
        </div>
        <div className="Content" ref={contentTag}>
          <section id="Techin" ref={techinTag}><Techin /></section>
          <section id="Skills" ref={skillTag}>
            <img id={'imgGearSkill_L1'} className={'imgGear'} src={imgGear1} alt="GearSkill1" />
            <img id={'imgGearSkill_L2'} className={'imgGear'} src={imgGear2} alt="GearSkill2" />
            <img id={'imgGearSkill_L3'} className={'imgGear'} src={imgGear3} alt="GearSkill3" />
            <img id={'imgGearSkill_R1'} className={'imgGear'} src={imgGear2} alt="GearSkill4" />
            <img id={'imgGearSkill_R2'} className={'imgGear'} src={imgGear3} alt="GearSkill5" />
            <Skills />
          </section>
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
