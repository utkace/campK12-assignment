import React from "react";
import { Row, Col } from "antd";
import { BannerHeader, BannerText, Coin } from "./components";
import bannerImg from "../../assets/images/landing/header-photo.png";
import coin from "../../assets/images/landing/camp-k-12-coin.png";
export default function Banner() {
  return (
    <Row style={{ display: "flex", marginTop: "5.188rem" }}>
      <Col span={12} style={{ marginRight: "2.125rem" }}>
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
      <Col span={12}>
        <img src={bannerImg} alt="banner" />
      </Col>
    </Row>
  );
}
