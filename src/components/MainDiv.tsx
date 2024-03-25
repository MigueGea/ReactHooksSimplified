import { useContext, useState } from "react";
import { ThemeContext } from "./themeContext";

export const MainDiv = () => {
  const theme: string = useContext(ThemeContext);

  return (
    <>
      <ThemeContext.Provider value="blue">
        <p className={theme}>el parrafito</p>
      </ThemeContext.Provider>
    </>
  );
};
