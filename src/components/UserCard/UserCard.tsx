import { UserStructure } from "../../store/feature/user/types";

interface UserCardPropsStructure {
  user: UserStructure;
}

const UserCard = ({
  user: { isFriend, lastName, name },
}: UserCardPropsStructure): React.ReactElement => {
  return (
    <div className={`${isFriend ? "selected" : ""}`}>
      <h3>{`${name} ${lastName}`}</h3>
    </div>
  );
};

export default UserCard;
