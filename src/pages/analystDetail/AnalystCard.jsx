import React, { useCallback, useEffect, useState } from "react";
import "./AnalystDetail.css";
import Image from "react-bootstrap/Image";
import followImg from "~/assets/follow.png";
import unFollowImg from "~/assets/unfollow.png";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AnalystCard(props) {
  const [analInfo, setAnalInfo] = useState({});
  const [isFollow, setIsFollow] = useState(false);
  const [analSector, setAnalSector] = useState("");
  const authContext = useSelector((state) => state.auth.authContext);
  const [pleLogin, setPleLogin] = useState(false);
  const analId = props.analId;

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
        firmId: res.data.firmId,
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
    async function getAnalSector() {
      const res = await axios.get(
        `http://127.0.0.1:3000/analyst/checkSector/${props.analId}`
      );
      console.log(res);
      setAnalSector(res.sectorName);
    }
    fetchData();
    getAnalSector();
    if (authContext.isAuthenticated == true) followCheck();
  }, []);

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
      {console.log(analInfo)}
      <img
        className="analystImg rounded"
        src={`/firmIMG/증권${analInfo.firmId}.jpeg`}
      ></img>
      {/* {console.log(process.env.PUBLIC_URL)} */}
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
            {analSector}
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
