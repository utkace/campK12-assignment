import styled from "styled-components";
import { Layout } from "antd";
const { Header } = Layout;

export const NavContainer = styled(Header)`
  max-width: 1205px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  margin-top: 3.188rem;
  background-color: ${(props: { isSolidBackground: boolean }) =>
    props.isSolidBackground ? "#000" : "transparent"};
  padding: 0px;
  height: 35px;
`;
