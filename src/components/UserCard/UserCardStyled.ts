import { styled } from "styled-components";

const UserCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 400px;
  width: 280px;
  background-color: ${({ theme }) => theme.color.userCardBackground};
  padding: 10px;
  border-width: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: transparent;

  &.user-card {
    &--friend {
      border-color: ${({ theme }) => theme.color.cardUserFriend};
    }

    &--enemy {
      border-color: ${({ theme }) => theme.color.cardUserEnemy};
    }

    &--unknown {
      border-color: ${({ theme }) => theme.color.cardUserUnknown};
    }
  }

  .user-card {
    &__image {
      align-self: center;
      object-fit: cover;
      width: 180px;
      height: 180px;
    }
  }
`;

export default UserCardStyled;
