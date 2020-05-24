import React from "react";
import logo from "../../assets/images/common/camp-k-12-logo.svg";
import notif from "../../assets/images/common/notif.svg";
import leaderboard from "../../assets/images/common/leaderboard.svg";
import { NavContainer } from "./components";
export default function Navbar() {
  return (
    <NavContainer>
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
    </NavContainer>
  );
}
