import React, { useCallback, useEffect, useState } from "react";

import { Button } from "react-bootstrap";
export default function bookmarkAnalyst() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "5%", margin: "3%" }}>
        <button style={{ cursor: "pointer" }}>애널리스트</button>
        <button style={{ color: "#CBCBCB", cursor: "pointer" }}>리포트</button>
      </div>
    </div>
  );
}
