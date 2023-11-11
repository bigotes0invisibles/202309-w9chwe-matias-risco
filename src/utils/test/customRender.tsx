import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

const customRender = (children: React.ReactElement) => {
  return render(<ThemeProvider theme={mainTheme}>{children}</ThemeProvider>);
};

export default customRender;
