import styled from "styled-components";
import { Button } from "antd";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CourseHeader = styled.h1`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.18px;
  color: #1f2a55;
  margin: 0px;
  margin-right: 2.313rem;
  margin-bottom: 0.5rem;
`;

export const Live = styled(Button)`
  background-color: #de9dff;
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.44;
  letter-spacing: 0.1px;
  text-align: center;
  color: #ffffff;
  border: none;

  :hover,
  :active,
  :focus {
    background-color: #e3b4fb;
    color: #ffffff;
  }
`;

export const Dot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  background-color: white;
  margin-right: 0.5rem;
`;

export const Text = styled.p`
  margin: 0px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.2px;
  text-align: center;
  color: #777b8c;
`;