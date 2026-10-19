import "./App.css";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        
        <About/>
          <Experience />
         <Skills />
        <Projects />
        <Certifications/>
        <Services /> 
        <Contact />

      </main>

    <Footer/>
    </div>
  );
}

export default App;