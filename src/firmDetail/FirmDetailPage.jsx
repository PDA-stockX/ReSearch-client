import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FirmDetailPage() {
  const firmId = useParams();

  return (
    <div>
      <div>
        <h2>증권사 정보</h2>
      </div>
      <div className="cardBox"></div>
    </div>
  );
}
