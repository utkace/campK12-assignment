import styled from "styled-components";
import { Button } from "antd";
import Slider from "react-slick";

export const CarouselHeader = styled.h1`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.18px;
  text-align: center;
  color: #ffffff;
  margin: 0px;
  margin-bottom: 2.25rem;
`;

export const NavButton = styled(Button)`
  width: 48px;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px #ebebeb;
  background-color: #f9fcff;
  border-radius: 0.125rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
`;

export const CarouselSlider = styled(Slider)`
  display: flex;
  align-items: center;
  margin-right: 5.344rem;
  margin-left: 5.344rem;

  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-track {
    display: flex !important;
    justify-content: space-around;
  }
  .slick-list {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin: 0px;
  }
`;
