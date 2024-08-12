import { Ref } from "react";
import Carousel from "../utils/Carousel";
import "./Skills.scss";
function Skills({refs}: {refs: Ref<HTMLElement>}) {
  const skill_keyword_array: string[] = [
    "C++",
    "C",
    "Rust",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "MongoDB",
    "Redis",
    "MySQL",
    "Node.JS",
    "Express.JS",
    "Docker",
    "Kuberntees",
    "AWS",
    "Electron.JS",
    "React",
    "React Native",
    "Git",
    "GitHub",
    "TypeScript",
  ];
  return (
    <section id="skill" ref={refs}>
      <h1>
        My <span>Skills</span>
      </h1>
      <div className="knowledge_content">
        <p>
          Lorem ipstat Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Veritatis adipisci, corporis ab numquam iure animi. dignissimos,
          obcaecati tempore recusandae.
        </p>
        <div>
          {skill_keyword_array.map((text, idx) => (
            <span key={idx}>{text}</span>
          ))}
        </div>
      </div>
      <div className="experiences">
        <h3>
          <span>My</span> Experiences
        </h3>
        <Carousel />
      </div>
    </section>
  );
}

export default Skills;
