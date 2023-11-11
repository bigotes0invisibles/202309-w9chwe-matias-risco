import { styled } from "styled-components";

const UserCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.userCardBackground};
  padding: 10px;
`;

export default UserCardStyled;
