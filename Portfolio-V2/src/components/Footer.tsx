import "./Footer.scss";
import Divider from "../utils/Divider";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

function Footer() {
  return (
    <footer>
      <div className="footer_sections">
        <div className="personal_contact">
          <h1>
            <span>Personal</span> contacts
          </h1>
          <Divider />
          <div>
            <h3>My address : </h3>
            <p>
              190 Dum Dum Park, Setu Apartment, Flat - 6, Tank - 4, Kolkata 700
              055
            </p>
          </div>
          <div>
            <h3>My contact number : </h3>
            <p>+91 9875666031</p>
          </div>
        </div>
        <div className="support_me">
          <h1>
            <span>Support </span>me
          </h1>
          <Divider />
          <a href="https://www.buymeacoffee.com/sbose">
            <img
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a Book&emoji=📖&slug=sbose&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
              alt="Donate to me by buying me a Book"
            />
          </a>
          <PayPalScriptProvider options={{ clientId: "test" }}>
              <PayPalButtons/>
          </PayPalScriptProvider>
        </div>
      </div>
      <Divider />
      <div className="link_to_top">
        <p>My Portfolio | Made with love by Sourabrata Bose </p>
        <a href="#home">
          Go to Top &nbsp;<i className="fa-solid fa-circle-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
