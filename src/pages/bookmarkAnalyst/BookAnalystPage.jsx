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
        gap: "5%",
        margin: "5%",
        height: "100%",
      }}
    >
      {authContext.isAuthenticated == true ? (
        <BookmarkAnalCard style={{ height: "100%" }}></BookmarkAnalCard>
      ) : (
        <div></div>
      )}
    </div>
  );
}
