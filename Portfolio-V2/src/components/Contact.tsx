import Button from "../utils/Buttons";
import "./Contact.scss";

function Contact() {
  return (
    <section id="contact">
      <h1>
        Contact <span>Me</span>
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
            <Button classNameAddon="contact_button--2">Submit</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
