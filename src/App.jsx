import React from "react";
import { RouterProvider } from 'react-router-dom';
import mainRouter from "~/routers/main-router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={mainRouter}/>
    </>
  );
}

export default App;