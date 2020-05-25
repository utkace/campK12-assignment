import styled from "styled-components";
import { Tag } from "antd";

export const CardImage = styled.div`
  height: 158px;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: inherit;
  width: 100%;
`;

export const ImageTag = styled(Tag)`
  position: absolute;
  z-index: 2;
  padding: 0.25rem 0.5rem;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.71px;
  text-align: center;
  color: #ffffff;
  margin: 0px;
  opacity: 0.4;
  background-color: #000000;
  border-radius: 0.25rem;
  top: 14px;
  left: 15px;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;
export const CardHeader = styled.h1`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: 0.2px;
  color: #1f2a55;
  min-height: 62px;
  padding-bottom: 10px;
  margin-bottom: 9px;
  border-bottom: solid 1px #e2ebef;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e2ebef;
  margin-bottom: 1rem;
`;

export const InfoHeader = styled.h1`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.17px;
  color: #777b8c;
`;

export const InfoText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.2px;
  color: #1f2a55;
`;

export const Rewards = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #e2ebef;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const ColorTag = styled(Tag)`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${(props: { textColor: string }) => `${props.textColor}`};
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #e2ebef;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`;

export const IconContainer = styled.div`
  height: 16px;
  width: 16px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
`;
export const ScheduleText = styled.p`
  margin: 0px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.2px;
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  margin: 0px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: center;
  color: #1f2a55;
`;

export const Enroll = styled.p`
  margin: 0px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 2px;
  text-align: center;
  color: #076fec;
`;
