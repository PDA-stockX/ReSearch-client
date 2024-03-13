import React, {useEffect, useState} from "react";
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
  }, []);
  return (
    <div className="chatBox" style={{ overflow: scroll }}>
      {messageList.map((el) => {
        console.log(el);
        console.log(messageList);
        return <AnalystMessage chat={el} key={el.id} />;
      })}
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
