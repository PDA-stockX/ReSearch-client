import React, { useCallback, useEffect, useState } from "react";
import "./AnalystDetail.css";
export default function AnalystMessage(props) {
  return (
    <div>
      {console.log(props.nickname)}
      {props.nickname ? (
        <div>
          <h2 style={{ color: "#CBCBCB" }}>{props.nickname}</h2>
          <h3 className="messageBox rounded-lg">{props.chat}</h3>
        </div>
      ) : (
        <h3 className="messageBox rounded-lg">{props.chat}</h3>
      )}
    </div>
  );
}
