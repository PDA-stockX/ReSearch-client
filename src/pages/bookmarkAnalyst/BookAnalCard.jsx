import React, { useEffect } from "react";
import { useState } from "react";
import { Instance } from "~/api/instance";
import AnalystCard from "~/pages/analystDetail/AnalystCard";
import persist from "~/utils/persist";
export default function BookmarkAnalCard(props) {
  const [analList, setAnalList] = useState([]);

  useEffect(() => {
    async function getMyAnal() {
      // console.log(persist());
      // console.log("Bearer " + localStorage.getItem("persist:root"));
      const response = await Instance.get("/bookmarks/my-anal");
      // console.log(response);
      setAnalList(response.data);
    }
    getMyAnal();
  }, [props]);

  return (
    <>
      {analList.map((el) => {
        return (
          <AnalystCard
            key={el.id}
            style={{ margin: "10%" }}
            analId={el.analyst.id}
          />
        );
      })}
      {/* {console.log(analList)} */}
    </>
  );
}
