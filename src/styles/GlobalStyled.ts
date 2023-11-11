import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*,
::after,
::before{
  box-sizing: border-box;
}

h1,
h2,
h3,
p,
body{
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
}

button{
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  box-shadow: none;
}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
body{
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  color: ${({ theme }) => theme.color.mainFont};
  background-color: ${({ theme }) => theme.color.background};
}
`;

export default GlobalStyled;
