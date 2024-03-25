import React, { useCallback, useEffect, useState } from "react";
import BookmarkReportList from "./BookmarkReportList";
import { Button } from "react-bootstrap";
import { Instance } from "~/api/instance";
export default function BookmarkReport() {
  const [reportList, setReportList] = useState([]);
  useEffect(() => {
    async function getReportList() {
      const response = await Instance.get("/bookmark/myReport");
      console.log(response);
    }
    getReportList();
  });
  return <BookmarkReportList></BookmarkReportList>;
}
