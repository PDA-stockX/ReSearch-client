import React, { useCallback, useEffect, useState } from "react";
import "./AnalystDetail.css";
export default function AnalystMessage(props) {
  return (
    <div>
      {console.log(props.nickname)}
      {props.nickname ? (
        <div>
          <h3
            style={{
              color: "#CBCBCB",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1%",
            }}
          >
            {props.nickname}
          </h3>
          <div style={{ marginTop: "1%" }} className="messageBox2 rounded-lg">
            <h3
              style={{
                backgroundColor: "#eee3ff",
                display: "inline-block",
                paddingInline: "2%",
                paddingBlock: "0.5%",
              }}
              className="rounded-lg"
            >
              {props.chat}
            </h3>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "1%" }} className="messageBox2 rounded-lg">
          <h3
            style={{
              backgroundColor: "#eee3ff",
              display: "inline-block",
              paddingInline: "2%",
              paddingBlock: "0.5%",
            }}
            className="rounded-lg"
          >
            {props.chat}
          </h3>
        </div>
      )}
    </div>
  );
}
