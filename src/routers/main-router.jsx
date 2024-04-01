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
import BookmarkAnalyst from "~/pages/bookmarkAnalyst/BookAnalystPage";
// import BookmarkReport from "~/pages/bookmark/BookmarkReport";
import AnalystDetailPage from "~/pages/analystDetail/AnalystDetailPage";
import ReportDetailPage from "~/pages/reportDetail/ReportDetailPage";
import DetailCommon from "~/pages/detail/DetailCommon";
import BookmarkReport from "~/pages/bookmarkReport/BookmarkReport";
import FirmDetailPage from "~/pages/firmDetail/FirmDetailPage";
const mainRoutes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
        index: true,
      },
      {
        path: "signup",
        element: <Signup />,
        index: true,
      },
      {
        path: "detail",
        element: <DetailCommon />,
        children: [
          {
            path: "analyst/:analId",
            element: <AnalystDetailPage />,
            index: true,
          },
          {
            path: "firm/:firmId",
            element: <FirmDetailPage />,
            index: true,
          },
          {
            path: "report/:reportId",
            element: <ReportDetailPage />,
            index: true,
          },
        ],
      },
      {
        path: "",
        element: <NavbarLayout />,
        children: [
          {
            path: "",
            element: <Home />,
            index: true,
          },
          {
            path: "bookmark",
            // element: <Bookmark/>,
            children: [
              {
                path: "analyst",
                element: <BookmarkAnalyst />,
                index: true,
              },
              {
                path: "report",
                element: <BookmarkReport />,
                index: true,
              },
            ],
          },
          {
            path: "analyst",
            // element: <Analyst />,
            children: [
              {
                path: "return-rate", // analyst 첫 페이지이자 수익률
                element: <AnalystReturnRate />,
                index: true,
              },
              {
                path: "achievement-score", // analyst 달성률
                element: <AnalystAchievementScore />,
                index: true,
              },
              {
                path: "", // analyst 업종
                element: <AnalystSector />,
                index: true,
              },
              {
                path: "popular", // analyst 인기
                element: <PopularAnalysts />,
                index: true,
              },
            ],
          },
          {
            path: "firm",
            // element: <Firm />,
            children: [
              {
                path: "return-rate", // firm 첫 페이지이자 수익률
                element: <FirmReturnRate />,
                index: true,
              },
              {
                path: "achievement-score", // firm 달성률
                element: <FirmAchievementScore />,
                index: true,
              },
              {
                path: "popular", // firm 인기
                element: <PopularFirms />,
                index: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);
export default router;

// const mainRoutes = [
//   {
//     path: "/",
//     element: <DefaultLayout />,
//     children: [
//       {
//         path: "/login",
//         element: <LoginForm />,
//         index: true,
//       },
//       {
//         path: "/sign-up",
//         element: <Signup />,
//         index: true,
//       },
//       {
//         path: "detail",
//         children: [
//           {
//             path: "asdf",
//             element: <ReportDetailPage />,
//             index: true,
//           },
//           {
//             path: "/analystDetail/:analId",
//             element: <AnalystDetailPage />,
//             index: true,
//           },
//         ],
//       },
//       {
//         path: "/",
//         element: <NavbarLayout />,
//         children: [
//           {
//             path: "analyst",
//             element: <Analyst />,
//             children: [
//               {
//                 path: "return-rate", // analyst 첫 페이지이자 수익률
//                 element: <AnalystReturnRate />,
//                 index: true,
//               },
//               {
//                 path: "/analyst/achievement-score", // analyst 달성률
//                 element: <AnalystAchievementScore />,
//                 index: true,
//               },
//               {
//                 path: "/analyst/sector", // analyst 업종
//                 element: <AnalystSector />,
//                 index: true,
//               },
//               {
//                 path: "/analyst/popular", // analyst 인기
//                 element: <PopularAnalysts />,
//                 index: true,
//               },
//             ],
//           },
//           {
//             path: "",
//             element: <Firm />,
//             child: [
//               {
//                 path: "/firm/return-rate", // firm 첫 페이지이자 수익률
//                 element: <FirmReturnRate />,
//                 index: true,
//               },
//               {
//                 path: "/firm/achievement-score", // firm 달성률
//                 element: <FirmAchievementScore />,
//                 index: true,
//               },
//               {
//                 path: "/firm/popular", // firm 인기
//                 element: <PopularFirms />,
//                 index: true,
//               },
//             ],
//           },
//           {
//             path: "",
//             element: <Bookmark />,
//             child: [
//               {
//                 // path: "/bookmark/analyst", // 즐겨찾기 - 애널리스트
//                 // element: <BookmarkAnalyst />,
//                 path: "/bookmark/BookmarkAnalyst",
//                 element: <BookmarkAnalyst />,
//                 index: true,
//               },
//               {
//                 path: "/bookmark/BookmarkReport", // 즐겨찾기 - 리포트
//                 element: <BookmarkReport />,
//                 index: true,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];
// const mainRoutes = [
//   {
//     path: "/",
//     element: <DefaultLayout />,
//     children: [
//       {
//         path: "login",
//         element: <LoginForm />,
//         index: true,
//       },
//       {
//         path: "signup",
//         element: <Signup />,
//         index: true,
//       },
//       {
//         path: "detail",
//         children: [
//           {
//             path: "analyst/:analId",
//             element: <AnalystDetailPage />,
//             index: true,
//           },
//           {
//             path: "firm/:firmId",
//             // element:<
//           },
//           {
//             path: "report/:reportId",
//             // element:
//             index: true,
//           },
//         ],
//       },
//       {
//         path: "",
//         element: <NavbarLayout />,
//         children: [
//           {
//             path: "home",
//             element: <Home />,
//             index: true,
//           },
//           {
//             path: "bookmark",
//             element: <Bookmark />,
//             children: [
//               {
//                 path: "analyst",
//                 element: <BookmarkAnalyst />,
//                 index: true,
//               },
//               {
//                 path: "report",
//                 element: <BookmarkReport />,
//                 index: true,
//               },
//             ],
//           },
//           {
//             path: "analyst",
//             // element: <NavbarLayout />,
//             element: <Analyst />,
//             children: [
//               {
//                 path: "return-rate", // analyst 첫 페이지이자 수익률
//                 element: <AnalystReturnRate />,
//                 index: true,
//               },
//               {
//                 path: "achievement-score", // analyst 달성률
//                 element: <AnalystAchievementScore />,
//                 index: true,
//               },
//               {
//                 path: "sector", // analyst 업종
//                 element: <AnalystSector />,
//                 index: true,
//               },
//               {
//                 path: "popular", // analyst 인기
//                 element: <PopularAnalysts />,
//                 index: true,
//               },
//             ],
//           },
//           {
//             path: "firm",
//             element: <Firm />,
//             children: [
//               {
//                 path: "return-rate", // firm 첫 페이지이자 수익률
//                 element: <FirmReturnRate />,
//                 index: true,
//               },
//               {
//                 path: "achievement-score", // firm 달성률
//                 element: <FirmAchievementScore />,
//                 index: true,
//               },
//               {
//                 path: "popular", // firm 인기
//                 element: <PopularFirms />,
//                 index: true,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const router = createBrowserRouter(mainRoutes);
// export default router;
