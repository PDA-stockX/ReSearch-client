import React, { useCallback, useEffect, useRef, useState } from "react";
import socket from "~/lib/assets/socket/socket";
import AnalystMessage from "./AnalystMessage";
import AnalystMessage2 from "./AnalystMessage2";
import "./AnalystDetail.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AnalystChat(props) {
  const [messageList, setMessageList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [newMessageAlert, setNewMessageAlert] = useState(false);
  const currentUserId = useRef(0);
  const scrollable = useRef(false);
  const scrollRef = useRef(null);
  const authContext = useSelector((state) => state.auth.authContext);
  const navigate = useNavigate();
  const onClickSubmit = useCallback(() => {
    if (!authContext.isAuthenticated) {
      alert("로그인 후 이용해 주세요");
      navigate("/login");
    } else if (inputText === "") {
      console.log(inputText);
      alert("메세지를 입력해주세요");
    } else {
      socket.emit("sendMessage", {
        roomId: props.analId,
        chatMessage: inputText,
        user: authContext.user,
      });
      setInputText("");
    }
    // console.log(inputText);
  }, [authContext.isAuthenticated, authContext.user, inputText, props.analId]);
  useEffect(() => {
    if (scrollable.current == true) {
      onScrollToBottom();
      setNewMessageAlert(false);
    }
  }, [messageList]);
  // 메시지 추가
  useEffect(() => {
    // console.log(authContext);
    socket.emit("joinRoom", { roomId: props.analId });
    socket.on("fetchMessages", (messages) => {
      setMessageList(messages);
      scrollable.current = true;
    });
    socket.on("receiveMessage", ({ chatMessage, user }) => {
      const listItem = { user, chatMessage };
      console.log(listItem);
      console.log(scrollRef.current.scrollTop);
      console.log(scrollRef.current.clientHeight);
      console.log(scrollRef.current.scrollHeight);

      if (
        scrollRef.current.scrollTop + scrollRef.current.clientHeight + 10 >=
          scrollRef.current.scrollHeight ||
        authContext.user.id == user.id
      ) {
        scrollable.current = true;
      } else {
        scrollable.current = false;
        setNewMessageAlert(true);
      }
      setMessageList((prev) => [...prev, listItem]);
    });
    currentUserId.current = 0;
    return () => {
      console.log("clean up");
      socket.emit("leaveRoom", { roomId: props.analId });
    };
  }, [authContext, props.analId]);

  const onScrollToBottom = useCallback(() => {
    // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    scrollRef.current.scrollBy({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
    setNewMessageAlert(false);
  });

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
      <div
        style={{ width: "100%", height: "85%" }}
        ref={scrollRef}
        className="overflow-auto"
      >
        {messageList.map((el, index) => {
          if (
            index > 0 &&
            messageList[index - 1].user.id === messageList[index].user.id
          ) {
            if (messageList[index].user.id === authContext.user.id)
              return <AnalystMessage2 chat={el.chatMessage} key={el.id} />;
            else {
              return <AnalystMessage chat={el.chatMessage} key={el.id} />;
            }
          } else {
            currentUserId.current = el.user.id;
            if (messageList[index].user.id === authContext.user.id)
              return (
                <AnalystMessage2
                  chat={el.chatMessage}
                  nickname={el.user.nickname}
                  key={el.id}
                />
              );
            else {
              return (
                <AnalystMessage
                  chat={el.chatMessage}
                  nickname={el.user.nickname}
                  key={el.id}
                />
              );
            }
          }
          // return <AnalystMessage chat={el.chatString} key={el.id} />;
        })}
      </div>
      {newMessageAlert ? (
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "25%",
            width: "50%",
            justifyContent: "center",
            left: "25%",
          }}
        >
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "3vW",
              //   border: "solid 1px",
              borderRadius: "5px",
              background: "#EEE3FF",
              paddingBlock: "1%",
            }}
            onClick={onScrollToBottom}
          >
            {" "}
            새로운 메세지가 도착했습니다.{" "}
          </button>
        </div>
      ) : (
        <></>
      )}
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
              border: " solid #717171 10px",
            }}
            value={inputText}
            placeholder=" 로그인을 해주세요"
            onChange={(e) => {
              alert("로그인을 해주세요.");
              setInputText("");
            }}
          />
        )}
        <button className="messageInput" onClick={onClickSubmit}>
          입력
        </button>
      </div>
    </div>
  );
}