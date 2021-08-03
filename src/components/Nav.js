import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`nav ${show && "fixed"}`}>
      <img
        className="nav__logo"
        src="/netflix-clone/logo.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="/netflix-clone/Netflix-avatar.png"
        alt="User Avatar"
      />
    </div>
  );
}

export default Nav;
