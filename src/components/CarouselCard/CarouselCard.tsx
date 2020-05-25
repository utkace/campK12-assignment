import React from "react";
import { Card } from "antd";
import styled from "styled-components";

type Props = {
  imageLink: string;
  text: string;
};
export default function CarouselCard(props: Props) {
  const { imageLink, text } = props;
  return (
    <CardBody hoverable>
      <img
        src={imageLink}
        alt={text}
        style={{ height: "108px", width: "108px" }}
      />
      <CardText>{text}</CardText>
    </CardBody>
  );
}

const CardText = styled.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: center;
  margin: 0px;
`;

const CardBody = styled(Card)`
  background-color: #ffffff;
  width: 208px;
  border: solid 1px #ebebeb;
  border-radius: 0.25rem;

  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
`;
