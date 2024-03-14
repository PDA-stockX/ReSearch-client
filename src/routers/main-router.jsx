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
import CompanyEarning from "~/pages/company/EarningRate";
import CompanyAchievement from "~/pages/company/AchievementRate";
import CompanyPopularity from "~/pages/company/Popularity";
import BookmarkAnalyst from "~/pages/bookmark/Analyst";
import BookmarkReport from "~/pages/bookmark/Report";
import AnalystDetail from "~/analyst/AnalystDetail";


const mainRoutes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: "/Home",
        element: <Home />,
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
        path: "",
        element: <NavbarLayout />,
        children: [
          {
            path: "/analyst/earning", // analyst 첫 페이지이자 수익률
            element: <AnalystEarning />,
            index: true,
          },
          {
            path: "/analyst/achievement", // analyst 달성률
            element: <AnalystAchievement />,
            index: true,
          },
          {
            path: "/analyst/sector", // analyst 업종
            element: <AnalystSector />,
            index: true,
          },
          {
            path: "/analyst/popularity", // analyst 인기
            element: <AnalystPopularity />,
            index: true,
          },
          {
            path: "/company/earning", // company 첫 페이지이자 수익률
            element: <CompanyEarning />,
            index: true,
          },
          {
            path: "/company/achievement", // company 달성률
            element: <CompanyAchievement />,
            index: true,
          },
          {
            path: "/company/popularity", // company 인기
            element: <CompanyPopularity />,
            index: true,
          },
          {
            path: "/bookmark/analyst", // 즐겨찾기 - 애널리스트
            element: <BookmarkAnalyst />,
            index: true,
          },
          {
            path: "/bookmark/report", // 즐겨찾기 - 리포트
            element: <BookmarkReport />,
            index: true,
          },
          { path: "/analyst/:analId", element: <AnalystDetail />, index: true },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);
export default router;
