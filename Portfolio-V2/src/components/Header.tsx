import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Header.scss";

function Header({
  activeButton,
  setActiveButton,
}: {
  activeButton: number;
  setActiveButton: Dispatch<SetStateAction<number>>;
}) {
  const [menuButton, setMenuButton] = useState(true);
  const links = ["Home", "About", "Projects", "Skills", "Contact"];
  return (
    <header>
      <a href="#home" className="logo">
        S Bose | Portfolio.
      </a>
      {menuButton && (
        <nav>
          <div className="close_button" onClick={() => setMenuButton(false)}>
            &times;
          </div>
          {links.map((content, idx) => (
            <a
              href={`#${
                content.endsWith("s")
                  ? content.toLowerCase().slice(0, -1)
                  : content.toLowerCase()
              }`}
              className={`nav_button ${activeButton == idx ? "active" : ""}`}
              onClick={() => setActiveButton(idx)}
              key={idx}
            >
              {content}
            </a>
          ))}
        </nav>
      )}
      {!menuButton && (
        <div className="menu_button" onClick={() => setMenuButton(true)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      )}
    </header>
  );
}

export default Header;
