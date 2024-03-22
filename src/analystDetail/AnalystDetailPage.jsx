import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnalystChat from "./AnalystChat";
import "./AnalystDetail.css";
import AnalystCard from "./AnalystCard";
import AnalystReport from "./AnalystReport";
export default function AnalystDetailPage() {
  const { analId } = useParams();
  const render = (el) => {
    console.log(el);
    return <AnalystChat chat={el} key={el.id} />;
  };

  return (
    <div className=" analystDetail">
      <h2>애널리스트 정보</h2>
      <div>
        <AnalystCard analId={analId} />
      </div>
      <h2>리포트</h2>
      <AnalystReport analId={analId} />
      <h2>오픈 TALK 💬</h2>
      <div>
        <AnalystChat analId={analId} />
      </div>
    </div>
  );
}
