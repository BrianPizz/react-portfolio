import Home from "./components/Home";
import Header from "./components/Nav/Header";
import About from "./components/Personal/About";
import Portfolio from "./components/Work/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Personal/Resume";
import Footer from "./components/Nav/Footer";
// import and render each portfolio section
export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio /> 
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
