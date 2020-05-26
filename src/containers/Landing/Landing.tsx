import React, { Component } from "react";
import { Container, PageContainer } from "../../components/common";
import { BackgroundVector, BackgroundGradient } from "./components";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/LandingBanner/Banner";
import Carousel from "../../components/LandingCarousel/Carousel";
import Courses from "../../components/Cousres/Courses";
import Footer from "../../components/Footer/Footer";

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <BackgroundVector>
          <PageContainer style={{ marginTop: "5.25rem" }}>
            <Banner />
            <Carousel />
          </PageContainer>
        </BackgroundVector>
        <BackgroundGradient>
          <PageContainer>
            <Courses />
          </PageContainer>
          <Footer />
        </BackgroundGradient>
      </Container>
    );
  }
}
