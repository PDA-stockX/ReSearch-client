import React, { useCallback, useContext, useEffect, useState } from "react";
import BookmarkReportList from "./BookmarkReportList";
// import LoginModal from "~/pages/home/LoginModal";
import { Button } from "react-bootstrap";
import { Instance } from "~/api/instance";
import { useSelector } from "react-redux";
import { TfiLock } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function BookmarkReport() {
  const [actived, setActived] = useState(false);
  const authContext = useSelector((state) => state.auth.authContext);
  const navigate = useNavigate();
  function goLogin() {
    alert("로그인 후 이용해주세요");
    navigate("/login");
  }

  useEffect(() => {
    if (authContext.isAuthenticated === false) {
      setActived(true);
    }
  });
  return (
    <>
      {authContext.isAuthenticated ? (
        <BookmarkReportList>{console.log(authContext)}</BookmarkReportList>
      ) : (
        goLogin()
      )}
    </>
  );
}
