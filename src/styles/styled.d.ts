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
      ButtonBackground: string;
    };
    typography: {
      mainFontFamily: string;
      secondartFontFamily: string;
      propetySize: string;
      titleSize: string;
    };
  }
}
