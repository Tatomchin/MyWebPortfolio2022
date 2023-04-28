import './App.css';
import Contact from './components/Contact/Contact';
import MyProjects from './components/MyProjects/MyProjects';
import Navbar from './components/Navbar/Navbar';
import PictureProfile from './components/PictureProfile';
import Sayhi from './components/Sayhi';
import Skills from './components/Skills/Skills';
import UnderBar from './components/UnderBar/UnderBar';

import React,{ useEffect, useRef, useState } from 'react';
const ConData = React.createContext();
function App() {
  // const [techinTag,setTechinTag] = useState(null);
  const skillTag = useRef(null);
  const contactTag = useRef(null);
  const projectTag = useRef(null);

  const [st_SkillTagTop, setST_SkillTagTop] = useState(false);
  const [st_ContactTagTop, setST_ContactTagTop] = useState(false);
  const [st_ProjectTagTop, setST_ProjectTagTop] = useState(false);

  const scrollHandler = () => {
    let skillTagTop = skillTag.current.getBoundingClientRect();
    let contactTagTop = contactTag.current.getBoundingClientRect();
    let projectTagTop = projectTag.current.getBoundingClientRect();

    if (skillTagTop.top <= 10) {
      setST_SkillTagTop(true)
      setST_ContactTagTop(false)
      setST_ProjectTagTop(false)
    } else { setST_SkillTagTop(false) }

    if (contactTagTop.top <= 10) {
      setST_SkillTagTop(false)
      setST_ContactTagTop(true)
      setST_ProjectTagTop(false)
    } else { setST_ContactTagTop(false) }

    if (projectTagTop.top <= 10) {
      setST_SkillTagTop(false)
      setST_ContactTagTop(false)
      setST_ProjectTagTop(true)
    } else { setST_ProjectTagTop(false) }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);
  // console.log('skill = ' + st_SkillTagTop)
  // console.log('contact = ' + st_ContactTagTop)
  // console.log('project = ' + st_ProjectTagTop)

  // useEffect(() => {
  //   let observerRefValue = null;
  //   const observerKub = new IntersectionObserver((items) => {
  //     console.log(items[0]);
  //   }, { rootMargin: "0px" });
  //   if (skillTag.current) {
  //     observerKub.observe(skillTag.current)
  //     observerRefValue = skillTag.current;
  //   }
  //   return () => {
  //     if (observerRefValue) {
  //     observerKub.unobserve(observerRefValue)
  //   }}
  // }, [skillTag])

  // useEffect(() => {
  //   let observerRefValue = null;
  //   let options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.25
  //   };
  //   const observerKub = new IntersectionObserver((items) => {
  //     // console.log(items);
  //   }, { options });
  //   if (contactTag.current) {
  //     observerKub.observe(contactTag.current)
  //     observerRefValue = contactTag.current;
  //   }
  //   return () => {
  //     if (observerRefValue) {
  //     observerKub.unobserve(observerRefValue)
  //   }}
  // }, [contactTag])


  return (
    <ConData.Provider value={{st_SkillTagTop, st_ContactTagTop, st_ProjectTagTop}}>
      <section className="App" >
        <Navbar />
        <div className="Content">
          <section id="Techin" >
            <PictureProfile />
            <Sayhi />
          </section>
          <section id="Skills" ref={skillTag} ><Skills /></section>
          <section id="Contact" ref={contactTag} ><Contact /></section>
          <section id="Projects" ref={projectTag} ><MyProjects /></section>
        </div>
        <UnderBar />
      </section>
    </ConData.Provider>
  );
}
export { ConData };
export default App;
