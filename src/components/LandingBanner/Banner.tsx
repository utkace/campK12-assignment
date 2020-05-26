import React from "react";
import { Col } from "antd";
import {
  BannerHeader,
  BannerText,
  Coin,
  BannerImg,
  BannerContainer,
} from "./components";
import bannerImg from "../../assets/images/landing/header-photo.png";
import coin from "../../assets/images/landing/camp-k-12-coin.png";
export default function Banner() {
  return (
    <BannerContainer style={{ display: "flex", marginTop: "5.188rem" }}>
      <Col lg={12} md={12} sm={24} xs={24}>
        <BannerHeader>Welcome to the school of the future.</BannerHeader>
        <BannerText>
          Cutting-edge technology courses for Ages 8 - 18. Unlock{" "}
          <span style={{ color: "#fcda55" }}>21st century skills</span> , earn{" "}
          <span>
            <Coin src={coin} alt="camp K12 coin" />
          </span>
          , and build a college-ready portfolio as you learn.
        </BannerText>
      </Col>
      <BannerImg lg={12} md={12} sm={24} xs={24}>
        <img src={bannerImg} alt="banner" />
      </BannerImg>
    </BannerContainer>
  );
}
