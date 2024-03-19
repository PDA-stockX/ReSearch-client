import React, { useCallback, useEffect, useState } from "react";
import socket from "~/lib/assets/socket/socket";
import AnalystMessage from "./AnalystMessage";
import "./AnalystDetail.css";
import { useSelector } from "react-redux";
import MessageNickname from "./MessageNickname";
export default function AnalystChat(props) {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [chatMessageNickname, setChatMessageNickname] = useState("");
  const authContext = useSelector((state) => state.auth.authContext);
  const onClickSubmit = () => {
    if (authContext.isAuthenticated) {
      alert("로그인 해주세요");
    } else if (inputText === "") {
      alert("텍스트를 입력해주세요");
    } else {
      socket.emit("sendChat", {
        analId: props.analId,
        chatString: inputText,
        userId: authContext.user,
      });
      setInputText("");
    }
    console.log(inputText);
  };
  useEffect(() => {
    console.log(props.analId);
    socket.emit("connectAnalRoom", { analId: props.analId });
    socket.on("listenChat", ({ chatString, userId }) => {
      console.log(chatString + " : " + userId);
      setMessageList((messageList) => [
        ...messageList,
        { userId: userId, chatString: chatString },
      ]);
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
          {
            if (el.userId !== chatMessageNickname) {
              setChatMessageNickname(el.userId);
              return <MessageNickname nickname={el.nickname} />;
            }
          }
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
        {authContext.isAuthenticated ? (
          <input
            className="rounded-lg"
            style={{ width: "80%", border: " solid #717171 1px" }}
            value={inputText}
            placeholder=" 채팅을 입력해주세요."
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        ) : (
          <input
            className="rounded-lg"
            style={{ width: "80%", border: " solid #717171 1px" }}
            value={inputText}
            placeholder=" 로그인을 해주세요"
            onChange={(e) => {
              alert("로그인을 해주세요.");
              setInputText("");
            }}
          />
        )}
        <button className="messageInput rounded-lg" onClick={onClickSubmit}>
          입력
        </button>
      </div>
    </div>
  );
}
