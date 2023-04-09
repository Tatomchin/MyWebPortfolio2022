import './App.css';
import Contact from './components/Contact';
import MyProjects from './components/MyProjects';
import Navbar from './components/Navbar';
import PictureProfile from './components/PictureProfile';
import Sayhi from './components/Sayhi';
import Skills from './components/Skills';
import UnderBar from './components/UnderBar';


function App() {
  return (
    <section className="App">
      <Navbar />
      <div className="Content">
        <PictureProfile />
        <Sayhi/>
        <Contact/>
        <Skills/>
        <MyProjects/>
      </div>
      <UnderBar/>
    </section>
  );
}

export default App;
