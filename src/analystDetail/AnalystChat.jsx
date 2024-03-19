import React, { useCallback, useEffect, useState } from "react";
import socket from "~/lib/assets/socket/socket";
import AnalystMessage from "./AnalystMessage";
import "./AnalystDetail.css";
export default function AnalystChat(props) {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState("");
  const onClickSubmit = () => {
    console.log(inputText);
    socket.emit("sendChat", { analId: props.analId, chatString: inputText });
    setInputText("");
  };
  useEffect(() => {
    console.log(props.analId);
    socket.emit("connectAnalRoom", { analId: props.analId });
    socket.on("listenChat", (chatString) => {
      // console.log(chatString);
      setMessageList((messageList) => [...messageList, chatString]);
    });
    return () => {
      console.log("clean up");
      socket.emit("leaveRoom", { analId: props.analId });
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      className="chatBox rounded-lg box-border h-48  gap-6 w-100 p-1 border-4"
    >
      <div style={{ width: "100%", height: "85%" }} className="overflow-auto">
        {messageList.map((el) => {
          return <AnalystMessage chat={el} key={el.id} />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          position: "absolute",
          bottom: "5%",
        }}
      >
        <input
          className="rounded-lg"
          style={{ width: "80%", border: " solid #717171 1px" }}
          value={inputText}
          placeholder=" 채팅을 입력해주세요."
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button className="messageInput rounded-lg" onClick={onClickSubmit}>
          입력
        </button>
      </div>
    </div>
  );
}
