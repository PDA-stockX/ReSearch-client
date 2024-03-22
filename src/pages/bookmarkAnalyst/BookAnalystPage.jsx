import React from "react";
// import { UseSelector } from "react-redux";
import { useSelector } from "react-redux";
import BookmarkAnalCard from "./BookAnalCard";
export default function BookAnalystPage() {
  const authContext = useSelector((state) => state.auth.authContext);

  return (
    <>
      {authContext.isAuthenticated == true ? (
        <BookmarkAnalCard></BookmarkAnalCard>
      ) : (
        <div></div>
      )}
    </>
  );
}
