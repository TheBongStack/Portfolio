import { lazy, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
const Project = lazy(() => import("./components/Project"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [activeButton, setActiveButton] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let header = document.querySelector("header")!;
    window.onscroll = () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let height = section.offsetHeight;
        let offset = section.offsetTop - header.offsetHeight;
        let id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
          switch (id) {
            case "home":
              setActiveButton(0);
              break;
            case "about":
              setActiveButton(1);
              break;
            case "project":
              setActiveButton(2);
              break;
            case "skill":
              setActiveButton(3);
              break;
            case "contact":
              setActiveButton(4);
              break;
            default:
              setActiveButton(5);
          }
        }
      });
    };
  }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, [loading]);
  
  if(loading){
    return <Preloader />
  } else {
    return <>
      <Header activeButton={activeButton} setActiveButton={setActiveButton} />
      <main>
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  }
}

export default App;
