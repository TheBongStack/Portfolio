import { Ref, useState } from "react";
import Button from "../utils/Buttons";
import "./About.scss";

function About({refs}: {refs: Ref<HTMLElement>}) {
  const [readmore, setReadmore] = useState(false);
  return (
    <section id="about" ref={refs}>
      <img
        src="/about.png"
        alt="A little about me"
        className="about_img"
      />
      <div>
        <h1>
          About <span>Me</span>
        </h1>
        <h3>
          Fullstack Developer. <br />
          <span>Blockchain Developer.</span>
        </h3>
          <p className={`about_text ${ readmore ? "" : "expand" }`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque
            distinctio aut, sed impedit blanditiis harum, maxime, ullam ut ipsa
            adipisci sint minima natus? Dicta repudiandae corrupti, delectus
            accusamus incidunt rem est, impedit quidem soluta itaque consectetur
            aspernatur, deserunt iusto? Praesentium ducimus debitis harum
            architecto veniam modi laborum incidunt necessitatibus.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Id labore reiciendis
            ipsa natus fugit, modi velit iure a itaque nemo quaerat dicta
            debitis eaque voluptas deleniti nesciunt at. Nemo officia eum itaque
            quis accusamus ipsam, veniam voluptatum fuga temporibus possimus
            sequi maxime nulla perferendis cupiditate dolores dignissimos,
            obcaecati tempore recusandae.
          </p>
        <Button props={{onClick: () => setReadmore((state) => !state)}}>
          Read More<i className={`fa-solid ${ readmore ? "fa-angles-up" : "fa-angles-down"}`}></i>
        </Button>
      </div>
    </section>
  );
}

export default About;
