import React from "react";
import { CarouselHeader, NavButton, CarouselSlider } from "./components";
import CarouselCard from "../CarouselCard/CarouselCard";
import webDevIcon from "../../assets/images/landing/web-dev-logo.svg";
import mobAppIcon from "../../assets/images/landing/mobapp-dev-logo.svg";
import arVrIcon from "../../assets/images/landing/ar-vr-logo.svg";
import mlIcon from "../../assets/images/landing/ml-logo.svg";
import leftArr from "../../assets/images/landing/left.svg";
import rightArr from "../../assets/images/landing/right.svg";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <NavButton onClick={onClick}>
      <img src={rightArr} alt="next" />{" "}
    </NavButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <NavButton onClick={onClick}>
      <img src={leftArr} alt="prev" />{" "}
    </NavButton>
  );
};

let settings = {
  dots: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function LandingCarousel() {
  return (
    <div style={{ marginTop: "5.25rem" }}>
      <CarouselHeader>What do you want to learn?</CarouselHeader>
      <CarouselSlider {...settings}>
        <CarouselCard imageLink={webDevIcon} text="Web Development" />
        <CarouselCard imageLink={mobAppIcon} text="Mobile App Development" />
        <CarouselCard imageLink={arVrIcon} text="Mixed Reality (AR/VR)" />
        <CarouselCard imageLink={mlIcon} text="Machine Learning (AI)" />
        <CarouselCard imageLink={webDevIcon} text="Web Development" />
        <CarouselCard imageLink={mobAppIcon} text="Mobile App Development" />
        <CarouselCard imageLink={arVrIcon} text="Mixed Reality (AR/VR)" />
        <CarouselCard imageLink={mlIcon} text="Machine Learning (AI)" />
      </CarouselSlider>
    </div>
  );
}
