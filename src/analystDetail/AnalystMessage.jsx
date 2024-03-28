import React, { useCallback, useEffect, useState } from "react";
import "./AnalystDetail.css";
export default function AnalystMessage(props) {
  return (
    <div
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      {console.log(props.nickname)}
      {props.nickname ? (
        <div>
          <h3 style={{ color: "#CBCBCB" }}>{props.nickname}</h3>
          <h3 className="messageBox rounded-lg">{props.chat}</h3>
        </div>
      ) : (
        <h3 className="messageBox rounded-lg">{props.chat}</h3>
      )}
    </div>
  );
}
