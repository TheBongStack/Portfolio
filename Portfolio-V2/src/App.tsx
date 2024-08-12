import { Suspense, useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activeButton, setActiveButton] = useState(0);
  const HomeRef = useRef<HTMLElement>();
  const AboutRef = useRef<HTMLElement>();
  const ProjectRef = useRef<HTMLElement>();
  const SkillsRef = useRef<HTMLElement>();
  const ContactRef = useRef<HTMLElement>();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.74) {
            switch (entry.target.id) {
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
      },
      {
        threshold: 0.75,
      }
    );
    observer.observe(HomeRef.current!);
    observer.observe(AboutRef.current!);
    observer.observe(ProjectRef.current!);
    observer.observe(SkillsRef.current!);
    observer.observe(ContactRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Suspense fallback={<Preloader />}>
      <>
        <Header activeButton={activeButton} setActiveButton={setActiveButton} />
        <main>
          <Home refs={HomeRef} />
          <About refs={AboutRef} />
          <Project refs={ProjectRef} />
          <Skills refs={SkillsRef} />
          <Contact refs={ContactRef} />
        </main>
        <Footer />
      </>
    </Suspense>
  );
}

export default App;
