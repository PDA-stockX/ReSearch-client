import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import likeImg from "~/assets/like.png";
import unLikeImg from "~/assets/unlike.png";
import unHateImg from "~/assets/unhate.png";
import hateImg from "~/assets/hate.png";
export default function FirmLike(props) {
  const [isLike, setIsLike] = useState(false);
  const [isHate, setIsHate] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [hateNum, setHateNum] = useState(0);
  const authContext = useSelector((state) => state.auth.authContext);
  useEffect(() => {
    console.log(authContext);
    async function checkReportLike() {
      const response = await axios.get(
        "http://localhost:3000/likeReport/checkLike",
        { params: { userId: authContext.user.id, reportId: props.reportId } },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      );
      console.log(response.data.message);
      if (response.data.message == "success") {
        setIsLike(true);
      }
    }
    async function checkReportHate() {
      const response = await axios.get(
        "http://localhost:3000/hateReport/checkHate",
        { params: { userId: authContext.user.id, reportId: props.reportId } },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      );
      console.log(response.data.message);

      if (response.data.message == "success") {
        setIsHate(true);
      }
    }

    async function checkLikeNum() {
      const response = await axios.get(
        "http://localhost:3000/likeReport/checkLikeNum",
        { params: { reportId: props.reportId } }
      );

      setLikeNum(response.data.likeNum);
    }
    async function checkHateNum() {
      const response = await axios.get(
        "http://localhost:3000/hateReport/checkHateNum",
        { params: { reportId: props.reportId } }
      );

      setHateNum(response.data.hateNum);
    }
    if (authContext.isAuthenticated == true) {
      checkReportHate();
      checkReportLike();
    }
    checkHateNum();
    checkLikeNum();
  }, [props.reportId]);

  const clickHateReport = useCallback(async () => {
    if (authContext.isAuthenticated == false) {
      alert("로그인 후 이용해주세요");
    } else if (isHate == true) {
      setIsHate(false);
      setIsLike(false);
      setHateNum(hateNum - 1);
      const response = await axios.post(
        "http://localhost:3000/hateReport/unHateReport",
        { userId: authContext.user.id, reportId: props.reportId },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      );
      console.log(response);
    } else {
      setIsHate(true);
      setHateNum(hateNum + 1);
      if (isLike == true) {
        setIsLike(false);
        setLikeNum(likeNum - 1);
      }
      const response = await axios.post(
        "http://localhost:3000/hateReport/hateReport",
        { userId: authContext.user.id, reportId: props.reportId },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      );
      console.log(response);
    }
  });

  const clickLikeReport = useCallback(async () => {
    if (authContext.isAuthenticated == false) {
      alert("로그인 후 이용해주세요");
    } else if (isLike == true) {
      setIsLike(false);
      setIsHate(false);
      setLikeNum(likeNum - 1);
      const response = await axios.post(
        "http://localhost:3000/likeReport/unlikeReport",
        { userId: authContext.user.id, reportId: props.reportId },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      );
      console.log(response);
    } else {
      setIsLike(true);
      setLikeNum(likeNum + 1);
      if (isHate == true) {
        setIsHate(false);
        setHateNum(hateNum - 1);
      }
      const response = await axios.post(
        "http://localhost:3000/likeReport/LikeReport",
        { userId: authContext.user.id, reportId: props.reportId },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      );
      console.log(response);
    }
  });
  return (
    <div
      style={{
        display: "flex",
        margin: "3%",
        gap: "5%",
        justifyContent: "end",
      }}
    >
      <button onClick={clickLikeReport}>
        {isLike ? <img src={likeImg}></img> : <img src={unLikeImg} />}
      </button>
      {likeNum}
      {/* {console.log(likeNum)} */}
      <button onClick={clickHateReport}>
        {isHate ? <img src={hateImg} /> : <img src={unHateImg} />}
      </button>
      {hateNum}
    </div>
  );
}
