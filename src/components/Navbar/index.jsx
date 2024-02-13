import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { LogoLetters, NavbarItems } from "../../mock";
import "./style.css";
import Searchfield from "../Searchfield";

export default function Navbar() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1050);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 1050);
    }

    window.addEventListener("resize", handleResize);

    // we call the function once to set the initial value
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <h1 className="logo">
        <a href="/">
          {LogoLetters.map((letter, index) => (
            <span key={index} style={{ color: letter.color }}>
              {letter.letter}
            </span>
          ))}
        </a>
      </h1>

      {!isMobileView ? (
        <>
          <Searchfield />

          <ul className="links">
            {NavbarItems.map((item, index) => (
              <li key={index}>
                {item.icon}
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          {showMobileMenu ? (
            <IoCloseSharp
              className="hamburger"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          ): (
            <RxHamburgerMenu
              className="hamburger"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          )}
        </>
      )}

      {showMobileMenu && (
        <ul className="mobile-links">
          {NavbarItems.map((item, index) => (
            <li key={index}>
              {item.icon}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
