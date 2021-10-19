import React, { useContext, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [bgImage, setBgImage] = useState("");
  // const isMediaQuerySm = useMediaQuery(
  //     json2mq({
  //       maxWidth: 700,
  //     })
  //   )
  //   const isMediaQueryMd = useMediaQuery(
  //     json2mq({
  //       maxWidth: 935,
  //     })
  //   )
  // console.log(children)
  return (
    <ThemeContext.Provider value={{ bgImage, setBgImage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
export function useThemeContext() {
  return useContext(ThemeContext);
}
