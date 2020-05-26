import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/common/camp-k-12-logo.svg";
import notif from "../../assets/images/common/notif.svg";
import leaderboard from "../../assets/images/common/leaderboard.svg";
import {
  NavContainer,
  NavLimiter,
  UserButton,
  UserIcon,
  MenuIcon,
} from "./components";
import { Menu } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import shield from "../../assets/images/landing/shield.svg";
import userAva from "../../assets/images/landing/user-avatar.png";
export default function Navbar() {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

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
        <div style={{ display: "flex" }}>
          <MenuIcon src={notif} alt="notification icon" />
          <MenuIcon src={leaderboard} alt="leaderboard icon" />
          <UserButton
            overlay={menu}
            placement="bottomRight"
            icon={
              <span>
                <DownOutlined />
              </span>
            }
          >
            <img src={shield} alt="shield" style={{ paddingRight: "0.5rem" }} />
            100
            <UserIcon src={userAva} alt="user-image" />
          </UserButton>
        </div>
      </NavLimiter>
    </NavContainer>
  );
}
