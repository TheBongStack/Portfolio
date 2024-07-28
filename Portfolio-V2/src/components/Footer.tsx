import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer_sections">
        <div className="personal_contact">
          <h1>
            <span>Personal</span> contacts
          </h1>
          <hr />
          <div className="address">
            <h3>My address : </h3>
            <p>
              190 Dum Dum Park, Setu Apartment, Flat - 6, Tank - 4, Kolkata 700
              055
            </p>
          </div>
          <div className="mobile_number">
            <h3>My contact number : </h3>
            <p>+91 9875666031</p>
          </div>
        </div>
        <div className="support_me">
          <h1>
            <span>Support </span>me by :{" "}
          </h1>
          <hr />
          <div className="buyMeACoffee">
            <a href="https://www.buymeacoffee.com/sbose">
              <img
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a Book&emoji=📖&slug=sbose&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
                alt="Donate to me by buying me a Book"
              />
            </a>
          </div>
          <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>
      </div>
      <hr />
      <p>
        My Portfolio | Made with love by Sourabrata Bose{" "}
        <a href="#home">
          Go to Top<i className="fa-solid fa-circle-up"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
