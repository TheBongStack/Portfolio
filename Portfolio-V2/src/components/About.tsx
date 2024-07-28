import "./About.scss";

function About() {
  return (
    <section className="about" id="about">
        <img
          src="/about.png"
          alt="A little about me"
        />
      <div className="about_wrapper">
        <h1 className="about_heading">
          About <span>Me</span>
        </h1>
        <div className="about_subheading">
          <h3>Fullstack Developer.</h3>
          <h3>Web Designer.</h3>
        </div>
        <div className="about_content" id="expandable">
          <p>
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
        </div>
        <button type="button" className="btn" id="readmore">
          Read More<i className="fa-solid fa-angles-down"></i>
        </button>
      </div>
    </section>
  );
}

export default About;
