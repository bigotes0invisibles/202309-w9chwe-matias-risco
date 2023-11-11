import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { MemoryRouter } from "react-router-dom";
import React from "react";

interface ActivateCustumazerStructure {
  isMemoryRouter?: boolean;
}

interface initialPropsStructure {
  initialPath: string;
}

const customRender = (
  children: React.ReactElement,
  activateCustumazer?: ActivateCustumazerStructure,
  initialProps?: initialPropsStructure,
) => {
  const initialPropsDummy: initialPropsStructure = { initialPath: "" };
  const ActivateCustumazerDummy: ActivateCustumazerStructure = {
    isMemoryRouter: false,
  };
  const { isMemoryRouter } = activateCustumazer
    ? activateCustumazer
    : ActivateCustumazerDummy;
  const { initialPath } = initialProps ? initialProps : initialPropsDummy;

  const base = <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
  const setMemoryRouter: React.ReactElement = isMemoryRouter ? (
    <MemoryRouter initialEntries={[initialPath]}>{base}</MemoryRouter>
  ) : (
    base
  );
  return render(setMemoryRouter);
};

export default customRender;
