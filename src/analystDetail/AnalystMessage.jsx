import React, { useCallback, useEffect, useState } from "react";
import "./AnalystDetail.css";
export default function AnalystMessage(props) {
  return (
    <div>
      {console.log(props.nickname)}
      {props.nickname ? (
        <div>
          <h3 style={{ color: "#CBCBCB", marginTop: "1%" }}>
            {props.nickname}
          </h3>
          <h3 style={{ marginTop: "1%" }} className="messageBox rounded-lg">
            {props.chat}
          </h3>
        </div>
      ) : (
        <h3 style={{ marginTop: "1%" }} className="messageBox rounded-lg">
          {props.chat}
        </h3>
      )}
    </div>
  );
}
