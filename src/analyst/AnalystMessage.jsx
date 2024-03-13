import React, { useCallback, useEffect, useState } from "react";
import "./AnalystDetail.css";
export default function AnalystMessage(props) {
  return (
    <div>
      {console.log(props + "asd")}
      <h3 className="messageBox rounded-lg">{props.chat}</h3>
    </div>
  );
}
