import { UserStructure } from "../../store/feature/user/types";
import UserCardStyled from "./UserCardStyled";

interface UserCardPropsStructure {
  user: UserStructure;
}

const UserCard = ({
  user: { isFriend, lastName, name },
}: UserCardPropsStructure): React.ReactElement => {
  return (
    <UserCardStyled className={`${isFriend ? "selected" : ""}`}>
      <h3>{`${name} ${lastName}`}</h3>
    </UserCardStyled>
  );
};

export default UserCard;
