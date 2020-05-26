import styled from "styled-components";
import { Col } from "antd";

export const BannerHeader = styled.h1`
  font-family: "Montserrat";
  font-size: 3.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: 0.22px;
  color: #ffffff;

  /* 768px and down*/
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BannerText = styled.p`
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: 0.24px;
  color: #ffffff;
  margin: 0px;

  /* 768px and down*/
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BannerImg = styled(Col)`
  display: flex;
  align-items: end;
  justify-content: flex-end;

  /* 768px and down*/
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

  img {
    /* 768px and down*/
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
export const Coin = styled.img`
  height: 1.8rem;
  width: 1.8rem;
`;
