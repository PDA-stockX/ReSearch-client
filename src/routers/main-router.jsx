import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "~/layout/DefaultLayout";
import Home from "~/pages/home/Home";
import Login from "~/pages/home/Login";
import Signup from "~/pages/home/Signup";
import NavbarLayout from "~/layout/NavbarLayout";
import AnalystEarning from "~/pages/analyst/EarningRate";
import AnalystAchievement from "~/pages/analyst/AchievementRate";
import AnalystSector from "~/pages/analyst/Sector";
import AnalystPopularity from "~/pages/analyst/Popularity";
import AnalystRoom from "~/Analyst/AnalystRoom";
const mainRoutes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <Login />,
        index: true,
      },
      {
        path: "/signup",
        element: <Signup />,
        index: true,
      },
      {
        path: "/",
        element: <NavbarLayout />,
        children: [
          {
            path: "/analyst/:analId",
            element: <AnalystRoom />,
            index: true,
          },
          {
            path: "analyst/earning", // analyst 첫 페이지이자 수익률
            element: <AnalystEarning />,
            index: true,
          },
          {
            path: "analyst/achievement", // analyst 달성률
            element: <AnalystAchievement />,
            index: true,
          },
          {
            path: "analyst/sector", // analyst 업종
            element: <AnalystSector />,
            index: true,
          },
          {
            path: "analyst/popularity", // analyst 인기
            element: <AnalystPopularity />,
            index: true,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);
export default router;
