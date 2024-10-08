import "./Project.scss";
import type Project from "../types/Project";
import Widget from "../utils/Widget";

function Project() {
  const projects: Project[] = new Array(6).fill({
      heading: "Sample",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis repellendus molestiae commodi possimus nesciunt neque quas dolor consequuntur obcaecati.",
      href: "",
      imgSrc: "/portfolio3.jpg",
  });
  return (
    <section id="project">
      <h1>
        My<span> Projects</span>
      </h1>
      <p>
        Some of my latest and best explorative ventures in the developement
        world are given below.
      </p>
      <div className="project_wrapper">
        {
            projects.map((obj, idx) => <Widget {...obj} key={idx}/>)
        }
      </div>
    </section>
  );
}

export default Project;
