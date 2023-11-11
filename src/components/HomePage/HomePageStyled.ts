import { styled } from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    text-align: center;
    font-family: ${({ theme }) => theme.typography.secondartFontFamily};
    font-style: oblique;
  }
`;

export default HomePageStyled;
