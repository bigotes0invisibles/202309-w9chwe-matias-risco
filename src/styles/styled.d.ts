import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      containerBackground: string;
      userCardBackground: string;
      mainFont: string;
      secondaryFont: string;
      disableButtonBackground: string;
      buttonBackground: string;
      cardUserFriend: string;
      cardUserEnemy: string;
      cardUserUnknown: string;
    };
    typography: {
      mainFontFamily: string;
      secondartFontFamily: string;
      propetySize: string;
      titleSize: string;
    };
  }
}
