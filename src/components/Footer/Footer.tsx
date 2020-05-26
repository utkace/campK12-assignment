import React from "react";
import { FooterText, FooterContainer } from "./components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Questions? Contact us at
        <span style={{ fontWeight: "bold" }}> info@campk12.com</span>
      </FooterText>
    </FooterContainer>
  );
}
