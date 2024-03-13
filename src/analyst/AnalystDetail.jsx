import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnalystChat from "./AnalystChat";
import "./AnalystDetail.css";
export default function AnalystDetail() {
  const { analId } = useParams();
  const render = (el) => {
    console.log(el);
    return <AnalystChat chat={el} key={el.id} />;
  };

  return (
    <div>
      <AnalystChat analId={analId} />
    </div>
  );
}
