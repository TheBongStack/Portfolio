import { Dispatch, SetStateAction, useState } from "react";
import Modals from "../utils/Modals";
import Socials from "../utils/Socials";
import "./Home.scss";
import Typewriter from "typewriter-effect";

function HireMeModals({ closeState }: {closeState: Dispatch<SetStateAction<boolean>>}) {
  return (
    <Modals handleState={closeState}>
      <a href="" className="btn reset_btn">
        Freelancer
      </a>
      <a href="" className="btn reset_btn">
        Fiverr.
      </a>
    </Modals>
  );
}

function Home() {

  const [hireMe, setHireMe] = useState(false);

  return (
    <section className="home" id="home">
      <div>
        <h3>Hello, It's Me</h3>
        <h1>Sourabrata Bose</h1>
        <h3 className="static_text">
          And I'm a{" "}
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
        <div className="home_buttons">
          <a href="" className="btn" download="">
            Download CV<i className="fa-solid fa-file-arrow-down"></i>
          </a>
          <button className="btn reset_btn" type="button" onClick={() => {
            setHireMe(true);
            console.log("clicked");
          }}>
            Hire Me<i className="fa-solid fa-bolt"></i>
          </button>
          {hireMe && <HireMeModals closeState={setHireMe}/>}
        </div>
      </div>
      <img src="/home.png" alt="It's me ! Sourabrata Bose" />
    </section>
  );
}

export default Home;
