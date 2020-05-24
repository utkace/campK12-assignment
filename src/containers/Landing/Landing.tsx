import React, { Component } from "react";
import { Container, PageContainer } from "../../components/common";
import { BackgroundVector } from "./components";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/LandingBanner/Banner";

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <BackgroundVector>
          <PageContainer>
            <Banner />
          </PageContainer>
        </BackgroundVector>
      </Container>
    );
  }
}
