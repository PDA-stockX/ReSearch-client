import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "~/layout/DefaultLayout";
import Home from "~/pages/home/Home";
import LoginForm from "~/pages/home/LoginForm.jsx";
import Signup from "~/pages/home/SignUpForm.jsx";
import NavbarLayout from "~/layout/NavbarLayout";
import AnalystReturnRate from "~/pages/analyst/ReturnRate.jsx";
import AnalystAchievementScore from "~/pages/analyst/AchievementScore.jsx";
import AnalystSector from "~/pages/analyst/Sector";
import PopularAnalysts from "~/pages/analyst/Popularity";
import FirmReturnRate from "~/pages/firm/ReturnRate.jsx";
import FirmAchievementScore from "~/pages/firm/AchievementScore.jsx";
import PopularFirms from "~/pages/firm/Popularity";
import AnalystDetail from "~/analyst/AnalystDetail";
import BookmarkAnalyst from '~/pages/bookmark/Analyst';
import BookmarkReport from '~/pages/bookmark/Report';

const mainRoutes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <LoginForm />,
        index: true,
      },
      {
        path: "/sign-up",
        element: <Signup />,
        index: true,
      },
      {
        path: "",
        element: <NavbarLayout />,
        children: [
          {
            path: "/analyst/return-rate", // analyst 첫 페이지이자 수익률
            element: <AnalystReturnRate />,
            index: true,
          },
          {
            path: "/analyst/achievement-score", // analyst 달성률
            element: <AnalystAchievementScore />,
            index: true,
          },
          {
            path: "/analyst/sector", // analyst 업종
            element: <AnalystSector />,
            index: true,
          },
          {
            path: "/analyst/popular", // analyst 인기
            element: <PopularAnalysts />,
            index: true,
          },
          {
            path: "/firm/return-rate", // firm 첫 페이지이자 수익률
            element: <FirmReturnRate />,
            index: true,
          },
          {
            path: "/firm/achievement-score", // firm 달성률
            element: <FirmAchievementScore />,
            index: true,
          },
          {
            path: "/firm/popular", // firm 인기
            element: <PopularFirms />,
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
