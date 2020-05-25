import styled from "styled-components";
import bgheader from "../../assets/images/common/bg-header.svg";
export const BackgroundVector = styled.div`
  background-image: url(${bgheader});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundGradient = styled.div`
  background-image: linear-gradient(to bottom, #eef9ff -10%, #ade1ff);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
