import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "~/lib/assets/socket/socket";

export default function AnalystRoom() {
  const [inputText, setInputText] = useState("");
  const [messageList, setMessageList] = useState([]);
  const { analId } = useParams();
  useEffect(() => {
    socket.emit("connectAnalRoom", { analId: analId });
    socket.on("listenChat", (chatString) => {
      // console.log(chatString);
      setMessageList((messageList) => [...messageList, chatString]);
      console.log(messageList);
    });
  }, []);

  const onClickSubmit = () => {
    console.log(inputText);
    socket.emit("sendChat", { analId: analId, chatString: inputText });
    setInputText("");
  };
  return (
    <div>
      <div>
        {console.log(messageList)}
        {messageList.map((el) => {
          <div>{el}</div>;
        })}
      </div>
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={onClickSubmit}>입력</button>
    </div>
  );
}
