import styled from "styled-components";
import { Button, Col } from "antd";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
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
  @media (max-width: 576px) {
    margin: 0px;
  }
`;

export const Live = styled(Button)`
  background-color: #de9dff;
  border-radius: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.1px;
  text-align: center;
  color: #ffffff;
  border: none;
  padding: 0px;
  min-width: 6rem;

  @media (max-width: 786px) {
    font-size: 14px;
    min-width: 5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
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

export const TextContainer = styled.div`
  display: flex;

  @media (max-width: 786px) {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 1rem;
  }
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

  @media (max-width: 786px) {
    margin-left: 1.8rem;
    margin-right: 1.8rem;
  }
`;

export const LeftText = styled.p`
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

  @media (max-width: 786px) {
    text-align: left;
    width: 100%;
  }
`;

export const Space = styled.span`
  width: 28px;
`;

export const CourseCardContainer = styled(Col)`
  padding-left: 0.938rem;
  padding-right: 0.938rem;

  @media (max-width: 786px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.938rem;
  }

  @media (max-width: 576px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 2rem;
  }
`;
