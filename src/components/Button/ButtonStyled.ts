import { styled } from "styled-components";

const ButtonStyled = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  border: 5px solid ${({ theme }) => theme.color.mainFont};
  border-radius: 30px;
  color: ${({ theme }) => theme.color.mainFont};
`;

export default ButtonStyled;
