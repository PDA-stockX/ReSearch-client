import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import likeImg from "~/assets/like.png";
import unLikeImg from "~/assets/unlike.png";
import unHateImg from "~/assets/unhate.png";
import hateImg from "~/assets/hate.png";
import { Instance } from "~/api/instance";
export default function FirmLike(props) {
  const [isLike, setIsLike] = useState(false);
  const [isHate, setIsHate] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [hateNum, setHateNum] = useState(0);
  const authContext = useSelector((state) => state.auth.authContext);
  useEffect(() => {
    console.log(authContext);
    async function checkFirmLike() {
      const response = await Instance.get("likeFirm/checkLike", {
        params: { firmId: props.firmId },
      });
      console.log(response.data.message);
      if (response.data.message == "success") {
        setIsLike(true);
      }
    }
    async function checkFirmHate() {
      const response = await Instance.get("hateFirm/checkHate", {
        params: { firmId: props.firmId },
      });
      console.log(response.data.message);

      if (response.data.message == "success") {
        setIsHate(true);
      }
    }

    async function checkLikeNum() {
      const response = await axios.get(
        "http://localhost:3000/likeFirm/checkLikeNum",
        { params: { firmId: props.firmId } }
      );

      setLikeNum(response.data.likeNum);
    }
    async function checkHateNum() {
      const response = await axios.get(
        "http://localhost:3000/hateFirm/checkHateNum",
        { params: { firmId: props.firmId } }
      );

      setHateNum(response.data.hateNum);
    }
    if (authContext.isAuthenticated == true) {
      checkFirmHate();
      checkFirmLike();
    }
    checkHateNum();
    checkLikeNum();
  }, [props.reportId]);

  const clickHateFirm = useCallback(async () => {
    if (authContext.isAuthenticated == false) {
      alert("로그인 후 이용해주세요");
    } else if (isHate == true) {
      setIsHate(false);
      setIsLike(false);
      setHateNum(hateNum - 1);
      const response = await Instance.post("hateFirm/unHateFirm", {
        firmId: props.firmId,
      });

      console.log(response);
    } else {
      setIsHate(true);
      setHateNum(hateNum + 1);
      if (isLike == true) {
        setIsLike(false);
        setLikeNum(likeNum - 1);
      }
      const response = await Instance.post("hateFirm/hateFirm", {
        firmId: props.firmId,
      });
      console.log(response);
    }
  });

  const clickLikeFirm = useCallback(async () => {
    if (authContext.isAuthenticated == false) {
      alert("로그인 후 이용해주세요");
    } else if (isLike == true) {
      setIsLike(false);
      setIsHate(false);
      setLikeNum(likeNum - 1);
      const response = await Instance.post("likeFirm/unLikeFirm", {
        firmId: props.firmId,
      });
      console.log(response);
    } else {
      setIsLike(true);
      setLikeNum(likeNum + 1);
      if (isHate == true) {
        setIsHate(false);
        setHateNum(hateNum - 1);
      }
      const response = await Instance.post("likeFirm/likeFirm", {
        firmId: props.firmId,
      });
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
