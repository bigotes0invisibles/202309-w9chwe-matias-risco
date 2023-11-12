export const setFriend = (isFriend: string) => {
  switch (isFriend) {
    case "friend":
      return "enemy";
    default:
      return "friend";
  }
};
