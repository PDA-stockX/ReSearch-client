import React, { useCallback, useEffect, useState } from "react";

export default function AnalystMessage(props) {
  return (
    <div>
      {console.log(props + "asd")}
      <h3>{props.chat}</h3>
    </div>
  );
}
