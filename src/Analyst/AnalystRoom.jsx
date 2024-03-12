import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "~/lib/assets/socket/socket";

export default function AnalystRoom() {
  const [inputText, setInputText] = useState("");
  const [messaseList, setMessaseList] = useState([]);
  const { analId } = useParams;
  useEffect(() => {
    socket.join("connectAnal", analId);
    socket.on("listenChat", (chatString) => {
      setInputText([...messaseList, chatString]);
    });
  });

  const submitChat = useCallback(() => {
    socket.emit("sendChat", inputText);
    setMessaseList([...messaseList, inputText]);
  }, [analId]);
  return (
    <div>
      {/* <div>{messaseList.map}</div> */}
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          submitChat;
          setInputText("");
        }}
      />
    </div>
  );
}
