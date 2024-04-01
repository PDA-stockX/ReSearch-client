import React, {useCallback, useEffect, useRef, useState} from "react";
import socket from "~/lib/assets/socket/socket";
import AnalystMessage from "./AnalystMessage";
import "./AnalystDetail.css";
import {useSelector} from "react-redux";

export default function AnalystChat(props) {
    const [messageList, setMessageList] = useState([]);
    const [inputText, setInputText] = useState("");
    const [newMessageAlert, setNewMessageAlert] = useState(false);
    const currentUserId = useRef(0);
    const scrollable = useRef(false);
    const scrollRef = useRef(null);
    const authContext = useSelector((state) => state.auth.authContext);

    const onClickSubmit = useCallback(() => {
        if (!authContext.isAuthenticated) {
            alert("로그인 해주세요");
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
        console.log(inputText);
    }, [authContext.isAuthenticated, authContext.user, inputText, props.analId]);

    // 메시지 추가
    useEffect(() => {
        socket.emit("joinRoom", {roomId: props.analId});
        socket.on("fetchMessages", (messages) => {
            setMessageList(messages);
        });
        socket.on("receiveMessage", ({chatMessage, user}) => {
            const listItem = {user, chatMessage};
            console.log(listItem);
            setMessageList((prev) => [...prev, listItem]);
        });
        currentUserId.current = 0;
        return () => {
            console.log("clean up");
            socket.emit("leaveRoom", {roomId: props.analId});
        };
    }, [authContext, props.analId]);

  const onScrollToBottom = useCallback(() => {
    // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    scrollRef.current.scrollBy({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    console.log(authContext);
    socket.emit("connectAnalRoom", { analId: props.analId });
    socket.on("listenChat", ({ chatString, user }) => {
      const listItem = { user, chatString };
      console.log("listItem : " + listItem.user.id);
      console.log(scrollRef.current.scrollTop);
      console.log(scrollRef.current.scrollHeight);
      console.log(scrollRef.current.clientHeight);
      console.log(scrollRef.current);
      if (
        scrollRef.current.scrollTop + scrollRef.current.clientHeight ===
        scrollRef.current.scrollHeight
      ) {
        scrollable.current = true;
      } else {
        scrollable.current = false;
      }
      setMessageList([...messageList, listItem]);

      console.log(messageList);
    });
    if (scrollable.current === true) {
      onScrollToBottom();
      scrollable.current = false;
    } else {
      setNewMessageAlert(true);
    }
    return () => {
      console.log("clean up");
      socket.emit("leaveRoom", { analId: props.analId });
    };
  }, [messageList]);

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
            <div style={{width: "100%", height: "85%"}} className="overflow-auto">
                {messageList.map((el, index) => {
                    if (
                        index > 0 &&
                        messageList[index - 1].user.id === messageList[index].user.id
                    ) {
                        return <AnalystMessage chat={el.chatMessage} key={el.id}/>;
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
                        style={{width: "80%", border: " solid #717171 1px"}}
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
                    onClick={onClickSubmit}
                >
                    입력
                </button>
            </div>
        </div>
    );
}
