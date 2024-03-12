import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/pages/main";
import AnalystRoom from "~/Analyst/AnalystRoom";
const router = createBrowserRouter([
  {
    path: "/:analId",
    element: <AnalystRoom />,
    index: true,
  },
  //   {
  //     path: "/",
  //     element: <TotalLayout />,
  //     index: true,
  //     // children: [
  //     //   {
  //     //     path: "/:analId",
  //     //     element: <AnalystRoom />,
  //     //     index: true,
  //     //   },
  //     //   {
  //     //     path: "/analyst",
  //     //     element: <Analyst />,
  //     //     index: true,
  //     //   },
  //     // ],
  //   },
]);

export default router;
