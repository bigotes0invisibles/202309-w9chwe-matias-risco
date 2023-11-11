import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { RootState } from "../../store";
import { PreloadedState } from "@reduxjs/toolkit";
import { setupStore } from "../setUpStore";

interface ActivateCustumazerStructure {
  isMemoryRouter?: boolean;
  isProvider?: boolean;
}

interface initialPropsStructure {
  initialPath?: string;
  preloadedState?: PreloadedState<RootState>;
}

const customRender = (
  children: React.ReactElement,
  activateCustumazer?: ActivateCustumazerStructure,
  initialProps?: initialPropsStructure,
) => {
  const initialPropsDummy: initialPropsStructure = {
    initialPath: "",
    preloadedState: undefined,
  };
  const ActivateCustumazerDummy: ActivateCustumazerStructure = {
    isMemoryRouter: false,
    isProvider: false,
  };
  const { isMemoryRouter, isProvider } =
    activateCustumazer ?? ActivateCustumazerDummy;
  const { initialPath, preloadedState } = initialProps
    ? initialProps
    : initialPropsDummy;

  const base = <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
  const setProvide: React.ReactElement = isProvider ? (
    <Provider store={setupStore(preloadedState)}>{base}</Provider>
  ) : (
    base
  );
  const setMemoryRouter: React.ReactElement = isMemoryRouter ? (
    <MemoryRouter
      initialEntries={[initialPath ?? initialPropsDummy.initialPath!]}
    >
      {setProvide}
    </MemoryRouter>
  ) : (
    setProvide
  );
  return render(setMemoryRouter);
};

export default customRender;
