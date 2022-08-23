import styled from "styled-components";

export const OuterLayout = styled.section`
  padding: 5rem 15rem;
  
  @media screen and (max-width: 1580px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 1280px) {
    padding: 5rem;
  }
  @media screen and (max-width: 980px) {
    padding: 3rem;
  }
`;

export const InnerLayout = styled.section`
  padding: 8rem 0;
  
  @media screen and (max-width: 1280px) {
    padding: 5rem 0;
  }
`;
