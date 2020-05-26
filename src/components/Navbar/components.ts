import styled from "styled-components";
import { Layout } from "antd";
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
