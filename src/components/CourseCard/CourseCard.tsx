import React from "react";
import { Card } from "antd";
import {
  CardHeader,
  InfoHeader,
  InfoText,
  Info,
  Rewards,
  ColorTag,
  Schedule,
  ScheduleText,
  CardFooter,
  Price,
  Enroll,
  CardImage,
  Image,
  ImageTag,
  CardContent,
  IconContainer,
} from "./components";
import grade from "../../assets/images/landing/grades-icon.svg";
import prereq from "../../assets/images/landing/icon.svg";
import shield from "../../assets/images/landing/shield.svg";
import coin from "../../assets/images/landing/camp-k-12-coin.png";
import date from "../../assets/images/landing/date.svg";
import day from "../../assets/images/landing/days.svg";
import time from "../../assets/images/landing/time.svg";

type Props = {
  data: {
    imgSrc: string;
    imageTag: string;
    title: string;
    prereq: string;
    grades: string;
    skills: string[];
    coins: string;
    date: string;
    day: string;
    time: string;
    price: string;
  };
};

const generateSkillTags = (skills: string[]) => {
  const items = [];
  if (skills.length > 2) {
    for (let i = 0; i < 2; i++) {
      items.push(
        <ColorTag textColor="#0bc29f" color="#dffcf8">
          {skills[i]}
        </ColorTag>
      );
    }
    items.push(
      <ColorTag textColor="#0bc29f" color="#dffcf8">{`+ ${
        skills.length - 2
      }`}</ColorTag>
    );
  } else {
    for (let i = 0; i < items.length; i++) {
      items.push(
        <ColorTag textColor="#0bc29f" color="#dffcf8">
          {skills[i]}
        </ColorTag>
      );
    }
  }

  return items;
};

export default function CourseCard(props: Props) {
  return (
    <Card hoverable bodyStyle={{ padding: "0px" }}>
      <CardImage>
        <ImageTag>{props.data.imageTag}</ImageTag>
        <Image src={props.data.imgSrc} alt={props.data.imageTag} />
      </CardImage>
      <CardContent>
        <CardHeader>{props.data.title}</CardHeader>
        <Info>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InfoHeader>
              <img src={grade} alt="grades" style={{ marginRight: "0.5rem" }} />
              GRADES
            </InfoHeader>
            <InfoText>{props.data.grades}</InfoText>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InfoHeader>
              <img
                src={prereq}
                alt="pre-req"
                style={{ marginRight: "0.5rem" }}
              />
              PRE-REQ
            </InfoHeader>
            <InfoText>{props.data.prereq}</InfoText>
          </span>
        </Info>
        <Rewards>
          <span
            style={{
              marginBottom: "0.5rem",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IconContainer>
              <img src={shield} alt="skills" />
            </IconContainer>
            {generateSkillTags(props.data.skills)}
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IconContainer>
              <img
                src={coin}
                alt="coins"
                style={{ height: "inherit", width: "inherit" }}
              />
            </IconContainer>
            <ColorTag
              textColor="#f6c032"
              color="#fff4d6"
            >{`+ ${props.data.coins}`}</ColorTag>
          </span>
        </Rewards>
        <Schedule>
          <ScheduleText>
            <IconContainer>
              <img src={date} alt="date" />
            </IconContainer>
            {props.data.date}
          </ScheduleText>
          <ScheduleText>
            <IconContainer>
              <img src={day} alt="day" />
            </IconContainer>
            {props.data.day}
          </ScheduleText>
          <ScheduleText>
            <IconContainer>
              <img src={time} alt="time" />
            </IconContainer>
            {props.data.time}
          </ScheduleText>
        </Schedule>
        <CardFooter>
          <Price>{`Rs. ${props.data.price}`}</Price>
          <Enroll>ENROLL</Enroll>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
