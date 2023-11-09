import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio /> 
      <Resume />
      <Contact />
    </div>
  )
}
