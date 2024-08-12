import { Ref } from "react";
import Button from "../utils/Buttons";
import "./Contact.scss";

function Contact({refs}: {refs: Ref<HTMLElement>}) {
  return (
    <section id="contact" ref={refs}>
      <h1>
        Contact <span>Me !</span>
      </h1>
      <p>
        Feel free to contact me directly by filling up the below form for any
        further correspondences.
      </p>
      <form className="contact_form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="E - Mail" />
        <input type="text" placeholder="Subject" />
        <input type="tel" placeholder="Contact Number" />
        <textarea cols={10} rows={10} placeholder="Your Message"></textarea>
        <div className="button_container">
          <Button>Calendly</Button>
          <div>
            <Button type="reset_btn">Reset</Button>
            <Button props={{ style: { marginLeft: "3rem" } }}>Submit</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
