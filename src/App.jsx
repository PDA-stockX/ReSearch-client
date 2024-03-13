import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "~/routers/main-router";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return <RouterProvider router={mainRouter} />;
}

export default App;
