import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/common/camp-k-12-logo.svg";
import notif from "../../assets/images/common/notif.svg";
import leaderboard from "../../assets/images/common/leaderboard.svg";
import { NavContainer, NavLimiter } from "./components";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  //@ts-ignore
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("header-nav-bar");
      if (navBar) {
        const show = window.scrollY > navBar.offsetTop + navBar.offsetHeight;
        if (navRef.current !== show) {
          setNavBackground(show);
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavContainer id="header-nav-bar" isSolidBackground={navBackground}>
      <NavLimiter>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img
            src={notif}
            alt="notification icon"
            style={{ paddingLeft: "1rem" }}
          />
          <img
            src={leaderboard}
            alt="leaderboard icon"
            style={{ paddingLeft: "1rem" }}
          />
        </div>
      </NavLimiter>
    </NavContainer>
  );
}
