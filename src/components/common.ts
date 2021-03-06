import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.div`
  max-width: 1205px;
  display: flex;
  flex-direction: column;
  width: 100%;

  /* 1200px and down*/
  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
