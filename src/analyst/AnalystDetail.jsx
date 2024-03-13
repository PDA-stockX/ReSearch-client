import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnalystChat from "./AnalystChat";
import "./AnalystDetail.css";
import AnalystCard from "./AnalystCard";
export default function AnalystDetail() {
  const { analId } = useParams();
  const render = (el) => {
    console.log(el);
    return <AnalystChat chat={el} key={el.id} />;
  };

  return (
    <div className="grid gap-y-2">
      <div>
        <h2>애널리스트 정보</h2>
        <AnalystCard analId={analId} />
      </div>
      <div>
        <AnalystChat analId={analId} />
      </div>
    </div>
  );
}
