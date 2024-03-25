import React, { useCallback, useEffect, useState } from "react";
import "./AnalystDetail.css";
import Image from "react-bootstrap/Image";
import followImg from "../assets/follow.png";
import unFollowImg from "../assets/unfollow.png";
import axios from "axios";
import { useSelector } from "react-redux";
export default function AnalystCard(props) {
  const [analInfo, setAnalInfo] = useState({});
  const [isFollow, setIsFollow] = useState(false);
  const authContext = useSelector((state) => state.auth.authContext);
  const [pleLogin, setPleLogin] = useState(false);
  useEffect(() => {
    console.log(authContext);
    async function fetchData() {
      const res = await axios.get(
        `http://127.0.0.1:3000/analyst/${props.analId}`
      );
      console.log(res);
      setAnalInfo({
        analName: res.data.name,
        firm: res.data.firm.name,
        achievementRate: res.data.achievementScore,
        returnRate: res.data.returnRate,
      });
    }
    async function followCheck() {
      const followCheck = await axios.get(
        `http://127.0.0.1:3000/followAnal/checkFollow`,
        { params: { analId: props.analId, userId: authContext.user.id } }
      );
      console.log(followCheck);
      if (followCheck.data.message == "Yes") {
        setIsFollow(true);
      }
    }

    //user Id 수정해야함~~~
    fetchData();
    if (authContext.isAuthenticated == true) followCheck();
  }, [props.analId]);

  const onFollow = useCallback(() => {
    if (authContext.isAuthenticated == true) {
      // console.log("Bearer " + authContext.token);
      if (isFollow === false) {
        setIsFollow(true);
        axios.post(
          "http://127.0.0.1:3000/followAnal/followAnal",

          { analId: props.analId },
          {
            headers: {
              Authorization: `Bearer ${authContext.token}`,
            },
          }
        );
      } else {
        setIsFollow(false);
        axios.post(
          "http://127.0.0.1:3000/followAnal/unFollowAnal",
          { analId: props.analId },
          {
            headers: {
              Authorization: `Bearer ${authContext.token}`,
            },
          }
        );
      }
    } else {
      setPleLogin(true);
      alert("로그인을 해주세요");
    }
  }, [isFollow]);
  return (
    <div className="cardBox">
      {
        <Image
          className="analystImg       rounded"
          src="data:image/jpeg;base64,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"
        ></Image>
      }
      <button
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          cursor: "pointer",
        }}
        onClick={onFollow}
      >
        {isFollow ? (
          <Image style={{ size: "5%" }} src={followImg} />
        ) : (
          <Image style={{ size: "5%" }} src={unFollowImg} />
        )}
      </button>
      <div
        className="analFont1 analystDetailCard"
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          fontSize: "3vw",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "35%" }}>애널리스트</div>
          <div style={{ width: "65%" }} className="analystFont2">
            {analInfo.analName}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "35%" }}>소속 기간</div>
          <div style={{ width: "65%" }} className="analystFont2">
            {analInfo.firm}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "35%" }}>업종 정보</div>
          <div style={{ width: "65%" }} className="analystFont2">
            건설(36.50%), 식품(25.30%),{" "}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "35%" }}>달성률</div>
          <div style={{ width: "65%" }} className="analystFont2">
            {analInfo.returnRate}%
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "35%" }}>수익률</div>
          <div style={{ width: "65%" }} className="analystFont2">
            {analInfo.achievementRate}%
          </div>
        </div>
      </div>
      {/* <div className="analystDetailCard" style={{ width: "25%" }}>
        <div>김준성</div>
        <div>메리츠증권</div>
        <div>기아(36.50%), 현대차(25.30%), </div>
      </div> */}
    </div>
  );
}
