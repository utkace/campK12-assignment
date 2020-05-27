import React from "react";
import {
  CourseHeader,
  Live,
  Dot,
  HeaderContainer,
  Text,
  CourseCardContainer,
  TextContainer,
  LeftText,
  Space,
} from "./components";
import coin from "../../assets/images/landing/camp-k-12-coin.png";
import shield from "../../assets/images/landing/shield.svg";
import { data } from "../../data/courses";
import CourseCard from "../CourseCard/CourseCard";
import { Row } from "antd";
import { Course } from "./types";
export default function Courses() {
  return (
    <div
      style={{
        marginTop: "4.25rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeaderContainer>
        <CourseHeader>Upcoming online courses</CourseHeader>
        <Live>
          <Dot />
          LIVE
        </Live>
      </HeaderContainer>
      <Text>
        Learn from live teachers, not pre-recorded videos, in our intelligent
        virtual classrooms.
      </Text>
      <TextContainer>
        <LeftText>
          <span style={{ marginRight: "5px" }}>
            <img src={shield} alt="shield" />
          </span>
          = 21st century skills you’ll unlock
        </LeftText>
        <Space />
        <LeftText>
          <span style={{ marginRight: "5px" }}>
            <img
              src={coin}
              alt="coin"
              style={{ height: "19px", width: "19px" }}
            />
          </span>
          = coins you’ll earn for completion
        </LeftText>
      </TextContainer>

      <Row style={{ maxWidth: "912px", marginTop: "5.313rem" }}>
        {data.map((course: Course) => (
          <CourseCardContainer lg={8} md={8} sm={12} xs={24}>
            <CourseCard data={course} />
          </CourseCardContainer>
        ))}
      </Row>
    </div>
  );
}
