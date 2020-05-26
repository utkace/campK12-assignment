import styled from "styled-components";
import { Layout, Dropdown } from "antd";
const { Header } = Layout;

export const NavContainer = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  padding-top: 3.188rem;
  background-image: ${(props: { isSolidBackground: boolean }) =>
    props.isSolidBackground
      ? "linear-gradient(82deg, #207cee -3%, #73caf3 119%)"
      : "linear-gradient(rgba(1,1,1,0))"};
  background-color: transparent;
  padding: 0px;
  height: 6.375rem;
  box-shadow: ${(props: { isSolidBackground: boolean }) =>
    props.isSolidBackground ? "0 0 10px 0 rgba(0, 0, 0, 0.1)" : "none"};

  /* 1200px and down*/
  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const NavLimiter = styled.div`
  max-width: 1205px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const UserButton = styled(Dropdown.Button)`
  height: 34px;
  padding-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button:first-child {
    background-color: #71aef3;
    border: none;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.2px;
    color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    padding: 0px;
    padding-left: 0.5rem;
  }

  button:last-child {
    background-color: transparent;
    border: none;
    color: #ffffff;
  }
`;

export const MenuIcon = styled.img`
  margin-left: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

  :hover {
    transform: scale(1.15);
  }
`;
export const UserIcon = styled.img`
  height: 32px;
  padding-left: 0.5rem;
`;
