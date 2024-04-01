import React from "react";
import {useSelector} from "react-redux";
import BookmarkAnalCard from "./BookAnalCard";

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
