import { styled } from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.containerBackground};
  color: ${({ theme }) => theme.color.mainFont};
  font-family: ${({ theme }) => theme.typography.secondartFontFamily};
  font-size: ${({ theme }) => theme.typography.titleSize};
  font-style: italic;
  padding: 5px 20px;

  .heading-title {
    margin: 0;
  }
`;

export default HeaderStyled;
