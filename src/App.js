import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
         <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
   <Footer/>
      </div>
  );
}

export default App;
