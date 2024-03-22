import React, { useCallback, useEffect, useState } from "react";
import socket from "~/lib/assets/socket/socket";
import AnalystMessage from "./AnalystMessage";
import "./AnalystDetail.css";
import { useSelector } from "react-redux";
import MessageNickname from "./MessageNickname";
import { useRef } from "react";
export default function AnalystChat(props) {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState("");
  const currentUserId = useRef(0);
  const authContext = useSelector((state) => state.auth.authContext);
  const onClickSubmit = useCallback(() => {
    if (!authContext.isAuthenticated) {
      alert("로그인 해주세요");
    } else if (inputText === "") {
      alert("텍스트를 입력해주세요");
    } else {
      socket.emit("sendChat", {
        analId: props.analId,
        chatString: inputText,
        user: authContext.user,
      });
      setInputText("");
    }
    console.log(inputText);
  }, [props]);

  useEffect(() => {
    console.log(authContext);
    socket.emit("connectAnalRoom", { analId: props.analId });
    socket.on("listenChat", ({ chatString, user }) => {
      const listItem = { user, chatString };
      console.log(listItem);
      console.log("listItem : " + listItem.user.id);
      setMessageList([...messageList, listItem]);
      console.log(messageList);
    });
    currentUserId.current = 0;
    return () => {
      console.log("clean up");
      socket.emit("leaveRoom", { analId: props.analId });
    };
  }, [messageList]);

  // const rendering = () => {
  //   const result = [];
  //   console.log(messageList);
  //   for (let i = 1; i < messageList.length; i++) {
  //     if (messageList[i - 1].user.id === messageList[i].user.id) {
  //       result.push(
  //         <AnalystMessage
  //           chat={messageList[i].chatString}
  //           nickname={messageList[i].user.nickname}
  //           key={messageList[i].id}
  //         />
  //       );
  //     } else {
  //       result.push(
  //         <AnalystMessage
  //           chat={messageList[i].chatString}
  //           key={messageList[i].id}
  //         />
  //       );
  //     }
  //   }
  //   return result;
  // };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
      className="chatBox rounded-lg box-border h-48  gap-6 w-100 p-1"
    >
      <div style={{ width: "100%", height: "85%" }} className="overflow-auto">
        {messageList.map((el, index) => {
          if (
            index > 0 &&
            messageList[index - 1].user.id === messageList[index].user.id
          ) {
            return <AnalystMessage chat={el.chatString} key={el.id} />;
          } else {
            currentUserId.current = el.user.id;
            return (
              <AnalystMessage
                chat={el.chatString}
                nickname={el.user.nickname}
                key={el.id}
              />
            );
          }
          // return <AnalystMessage chat={el.chatString} key={el.id} />;
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
            className=""
            style={{
              borderRadius: "10%",
              width: "80%",
              border: " solid #717171 1px",
            }}
            value={inputText}
            placeholder=" 로그인을 해주세요"
            onChange={(e) => {
              alert("로그인을 해주세요.");
              setInputText("");
            }}
          />
        )}
        <button
          className="messageInput"
          onClick={() => {
            if (!authContext.isAuthenticated) {
              alert("로그인 해주세요");
            } else if (inputText === "") {
              alert("텍스트를 입력해주세요");
            } else {
              socket.emit("sendChat", {
                analId: props.analId,
                chatString: inputText,
                user: authContext.user,
              });
              setInputText("");
            }
            // console.log(inputText);
          }}
        >
          입력
        </button>
      </div>
    </div>
  );
}
