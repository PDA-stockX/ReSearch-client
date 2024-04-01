import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import likeImg from "~/assets/like.png";
import unLikeImg from "~/assets/unlike.png";
import unHateImg from "~/assets/unhate.png";
import hateImg from "~/assets/hate.png";
import { Instance } from "~/api/instance";
import { useNavigate } from "react-router-dom";
import { cInstance } from "~/api/cInstance";
export default function FirmLike(props) {
  const [isLike, setIsLike] = useState(false);
  const [isHate, setIsHate] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [hateNum, setHateNum] = useState(0);
  const authContext = useSelector((state) => state.auth.authContext);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(authContext);
    async function checkFirmLike() {
      const response = await Instance.get("/like-firms/my", {
        params: { firmId: props.firmId, userId: authContext.user.id },
      });
      console.log(response.data.message);
      if (response.data.message == "success") {
        setIsLike(true);
      }
    }
    async function checkFirmHate() {
      const response = await Instance.get("/dislike-firms/my", {
        params: { firmId: props.firmId, userId: authContext.user.id },
      });
      console.log(response.data.message);

      if (response.data.message == "success") {
        setIsHate(true);
      }
    }

    async function checkLikeNum() {
      const response = await cInstance.get("/like-firms/num", {
        params: { firmId: props.firmId },
      });

      setLikeNum(response.data.likeNum);
    }
    async function checkHateNum() {
      const response = await cInstance.get("/dislike-firms/num", {
        params: { firmId: props.firmId },
      });

      setHateNum(response.data.hateNum);
    }
    if (authContext.isAuthenticated == true) {
      checkFirmHate();
      checkFirmLike();
    }
    checkHateNum();
    checkLikeNum();
  }, [props.reportId]);

  const clickHateFirm = useCallback(() => {
    if (authContext.isAuthenticated == false) {
      alert("로그인 후 이용해주세요");
      navigate("/login");
    } else if (isHate == true) {
      setIsHate(false);
      setIsLike(false);
      setHateNum(hateNum - 1);
      Instance.post("/dislike-firms/un-dislike", {
        userId: authContext.user.id,
        firmId: props.firmId,
      });
    } else {
      setIsHate(true);
      setHateNum(hateNum + 1);
      if (isLike == true) {
        setIsLike(false);
        setLikeNum(likeNum - 1);
      }
      Instance.post("/dislike-firms/dislike", {
        userId: authContext.user.id,
        firmId: props.firmId,
      });
    }
  }, [
    authContext.isAuthenticated,
    authContext.user.id,
    hateNum,
    isHate,
    isLike,
    likeNum,
    navigate,
    props.firmId,
  ]);

  const clickLikeFirm = useCallback(() => {
    if (authContext.isAuthenticated == false) {
      alert("로그인 후 이용해주세요");
      navigate("/login");
    } else if (isLike == true) {
      setIsLike(false);
      setIsHate(false);
      setLikeNum(likeNum - 1);
      Instance.post("/like-firms/un-like", {
        firmId: props.firmId,
        userId: authContext.user.id,
      });
    } else {
      setIsLike(true);
      setLikeNum(likeNum + 1);
      if (isHate == true) {
        setIsHate(false);
        setHateNum(hateNum - 1);
      }
      Instance.post("/like-firms/like", {
        firmId: props.firmId,
        userId: authContext.user.id,
      });
    }
  }, [
    authContext.isAuthenticated,
    authContext.user.id,
    hateNum,
    isHate,
    isLike,
    likeNum,
    navigate,
    props.firmId,
  ]);
  return (
    <div
      style={{
        display: "flex",
        margin: "3%",
        gap: "5%",
        justifyContent: "end",
      }}
    >
      <button onClick={clickLikeFirm}>
        {isLike ? <img src={likeImg}></img> : <img src={unLikeImg} />}
      </button>
      {likeNum}
      {/* {console.log(likeNum)} */}
      <button onClick={clickHateFirm}>
        {isHate ? <img src={hateImg} /> : <img src={unHateImg} />}
      </button>
      {hateNum}
    </div>
  );
}
