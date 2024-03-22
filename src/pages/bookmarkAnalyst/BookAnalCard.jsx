import React, { useEffect } from "react";
import { useState } from "react";
import { Instance } from "~/api/instance";
import AnalystCard from "~/analystDetail/AnalystCard";
export default function BookmarkAnalCard(props) {
  const [analList, setAnalList] = useState([]);
  useEffect(() => {
    async function getMyAnal() {
      console.log("Bearer " + localStorage.getItem("persist:root"));
      const response = await Instance.get("/bookmark/myAnal");
      console.log(response);
      setAnalList(response);
    }
    getMyAnal();
  });

  return (
    <>
      {analList.map((el) => {
        <AnalystCard analId={el.analId}></AnalystCard>;
      })}
    </>
  );
}
