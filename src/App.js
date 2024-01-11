import Navbar from "./components/NavBar/navbar";
import Intro from './components/intro/intro';
import Skills from "./components/Skill/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer"
import FloatingButton from "./components/floating buttons/floating button"

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <FloatingButton/>
    </div>
  );
}

export default App;
