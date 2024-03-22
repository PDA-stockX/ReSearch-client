import React, { useEffect } from "react";
import { useState } from "react";
import { Instance } from "~/api/instance";
export default function BookmarkAnalCard(props) {
  const [analLis, setAnalList] = useState([]);
  useEffect(() => {
    async function getMyAnal() {
      console.log("Bearer " + localStorage.getItem("persist:root"));
      const response = await Instance.get("/bookmark/myAnal");
      console.log(response);
    }
    getMyAnal();
  });
}
