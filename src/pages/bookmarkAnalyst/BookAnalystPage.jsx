import React from "react";
// import { UseSelector } from "react-redux";
import { useSelector } from "react-redux";
import BookmarkAnalCard from "./BookAnalCard";
import { useParams } from "react-router-dom";
export default function BookAnalystPage() {
  const authContext = useSelector((state) => state.auth.authContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingInline: "3%",
        height: "100%",
        width: "100%",
        gap: "10px",
      }}
    >
      {authContext.isAuthenticated == true ? <BookmarkAnalCard /> : <div></div>}
    </div>
  );
}
