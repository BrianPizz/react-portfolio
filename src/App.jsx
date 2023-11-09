import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
import About from "./components/Personal/About";
import Portfolio from "./components/Work/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Personal/Resume";
import Footer from "./components/Nav/Footer";
// import and render each portfolio section
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio /> 
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
