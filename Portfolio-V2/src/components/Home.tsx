import { Dispatch, SetStateAction, useState } from "react";
import Modals from "../utils/Modals";
import Socials from "../utils/Socials";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import Button from "../utils/Buttons";

function HireMeModals({
  closeState,
}: {
  closeState: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Modals handleState={closeState} className="home_modal">
      <Button
        component="a"
        props={{ href: "", style: { minWidth: "100%", marginBottom: "1rem"} }}
        type="reset_btn"
      >
        Freelancer
      </Button>
      <Button
        component="a"
        props={{ href: "", style: { minWidth: "100%" } }}
        type="reset_btn"
      >
        Fiverr
      </Button>
    </Modals>
  );
}

function Home() {
  const [hireMe, setHireMe] = useState(false);
  return (
    <section id="home">
      <div>
        <h3>Hello, It's Me</h3>
        <h1>Sourabrata Bose</h1>
        <h3 className="static_text">
          And I'm a &nbsp;
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Backend Developer",
                "Web UX/UI Designer",
                "Fullstack Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 250,
              deleteSpeed: 150,
              cursor: "|",
            }}
          />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          blanditiis numquam at sapiente dolores aspernatur, cupiditate omnis,
          non ipsum possimus facere nulla laudantium esse mollitia magnam
          reiciendis repudiandae praesentium iste!
        </p>
        <Socials />
        <div className="home_button_container">
          <Button component="a" props={{ download: ""}} classNameAddon="home_button--1">
            Download CV<i className="fa-solid fa-file-arrow-down"></i>
          </Button>
          <Button
            component="button"
            props={{
              onClick: () => setHireMe(true),
            }}
            classNameAddon="home_button--2"
          >
            Hire Me<i className="fa-solid fa-bolt"></i>
          </Button>
          {hireMe && <HireMeModals closeState={setHireMe} />}
        </div>
      </div>
      <img src="/home.png" alt="It's me ! Sourabrata Bose" className="home_img"/>
    </section>
  );
}

export default Home;
