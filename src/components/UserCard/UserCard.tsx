import { UserStructure } from "../../store/feature/user/types";
import UserCardStyled from "./UserCardStyled";

interface UserCardPropsStructure {
  user: UserStructure;
}

const UserCard = ({
  user: { isFriend, lastName, name, image },
}: UserCardPropsStructure): React.ReactElement => {
  return (
    <UserCardStyled className={`user-card user-card--${isFriend}`}>
      <h3>{`${name} ${lastName}`}</h3>
      <img
        className="user-card__image"
        src={image}
        alt={`${name} ${lastName}`}
        width="180"
        height="280"
      />
      <span>he is {isFriend}</span>
    </UserCardStyled>
  );
};

export default UserCard;
