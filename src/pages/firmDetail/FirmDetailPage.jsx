import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirmLike from "./FirmLike";
import AnalystCard from "~/pages/analystDetail/AnalystCard";
import { useSelector } from "react-redux";
import { cInstance } from "~/api/cInstance";
export default function FirmDetailPage() {
  const firmId = useParams();
  const [firmInfo, setFirmInfo] = useState({});
  const [analList, setAnalList] = useState([]);
  const authContext = useSelector((state) => state.auth.authContext);
  useEffect(() => {
    async function getFirmInfo() {
      console.log(firmId);
      const firmInfo = await cInstance.get(`/firms/detail/${firmId.firmId}`);
      console.log(firmInfo);
      const tempRes = {
        name: firmInfo.data.name,
        returnRate: firmInfo.data.returnRate,
        achievementScore: firmInfo.data.achievementScore,
      };
      setFirmInfo(tempRes);
    }

    async function getMyAnal() {
      const analByFirm = await cInstance.get(
        `/analysts/analysts-firm/${firmId.firmId}`
      );
      console.log(analByFirm);
      setAnalList(analByFirm.data);
    }
    getMyAnal();
    getFirmInfo();
  }, [firmId]);
  return (
    <div style={{ marginInline: "3%" }}>
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
      <FirmLike firmId={firmId.firmId} />
      <h2>애널리스트 정보</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {analList.map((el) => {
          console.log(el);

          return <AnalystCard key={el.id} analId={el} />;
        })}
      </div>
    </div>
  );
}
