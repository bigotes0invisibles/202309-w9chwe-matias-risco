import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../store";

interface ActivateCustumazerStructure {
  isMemoryRouter?: boolean;
  isProvider?: boolean;
}

interface initialPropsStructure {
  initialPath?: string;
}

const customRender = (
  children: React.ReactElement,
  activateCustumazer?: ActivateCustumazerStructure,
  initialProps?: initialPropsStructure,
) => {
  const initialPropsDummy: initialPropsStructure = { initialPath: "" };
  const ActivateCustumazerDummy: ActivateCustumazerStructure = {
    isMemoryRouter: false,
    isProvider: false,
  };
  const { isMemoryRouter, isProvider } =
    activateCustumazer || ActivateCustumazerDummy;
  const { initialPath } = initialProps ? initialProps : initialPropsDummy;

  const base = <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
  const setProvide: React.ReactElement = isProvider ? (
    <Provider store={store}>{base}</Provider>
  ) : (
    base
  );
  const setMemoryRouter: React.ReactElement = isMemoryRouter ? (
    <MemoryRouter
      initialEntries={[initialPath || initialPropsDummy.initialPath!]}
    >
      {setProvide}
    </MemoryRouter>
  ) : (
    setProvide
  );
  return render(setMemoryRouter);
};

export default customRender;
