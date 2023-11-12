import { useDispatch } from "react-redux";
import { UserStructure } from "../../store/feature/user/types";
import { setFriend } from "../../store/feature/user/utils";
import Button from "../Button/Button";
import UserCardStyled from "./UserCardStyled";
import { toggleFriendActionCreator } from "../../store/feature/user/userSlice";
import { useCallback } from "react";

interface UserCardPropsStructure {
  user: UserStructure;
}

const UserCard = ({
  user: { isFriend, lastName, name, image, id },
}: UserCardPropsStructure): React.ReactElement => {
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    (async () => {
      dispatch(toggleFriendActionCreator(id));
    })();
  }, [dispatch, id]);

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
      <Button
        className={`user-card__button--${setFriend(isFriend)}`}
        innerText={`set as ${setFriend(isFriend)}`}
        onClick={onClick}
      />
    </UserCardStyled>
  );
};

export default UserCard;
