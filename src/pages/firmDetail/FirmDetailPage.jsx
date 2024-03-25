import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirmLike from "./FirmLike";
export default function FirmDetailPage() {
  const firmId = useParams();
  const [firmInfo, setFirmInfo] = useState({});
  useEffect(() => {
    async function getFirmInfo() {
      console.log(firmId);
      const firmInfo = await axios.get(
        `http://localhost:3000/firms/getDetail/${firmId.firmId}`
      );
      console.log(firmInfo);
      const tempRes = {
        name: firmInfo.data.name,
        returnRate: firmInfo.data.returnRate,
        achievementScore: firmInfo.data.achievementScore,
      };
      setFirmInfo(tempRes);
    }
    getFirmInfo();
  }, [firmId]);
  return (
    <>
      <h2>증권사 정보</h2>
      <div className="reportDetailCard">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "8%",
            gap: "25px",
            width: "100%",
            justifyItems: "center",
          }}
        >
          <div className="reportDetailCardEle">
            <div className="reportDetailCardLeft">기관명</div>
            <div className="reportDetailCardRight">{firmInfo.name}</div>
          </div>
          <div className="reportDetailCardEle">
            <div className="reportDetailCardLeft">총 달성률</div>
            <div className="reportDetailCardRight">
              {firmInfo.achievementScore} %
            </div>
          </div>{" "}
          <div className="reportDetailCardEle">
            <div className="reportDetailCardLeft">총 수익률</div>
            <div className="reportDetailCardRight">{firmInfo.returnRate} %</div>
          </div>{" "}
        </div>
      </div>
      <FirmLike />
    </>
  );
}
