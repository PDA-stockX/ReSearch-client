import React, { useEffect } from "react";
// import { UseSelector } from "react-redux";
import { useSelector } from "react-redux";
import BookmarkAnalCard from "./BookAnalCard";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function BookAnalystPage() {
  const authContext = useSelector((state) => state.auth.authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.isAuthenticated === false) {
      alert("로그인 후 이용해 주세요");
      navigate("/login");
    }
  }, [authContext.isAuthenticated]);

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
