// import React from "react";
// import "./Common.css";

// export default function Best({ rank, name, company, returnRate }) {
//   const color = ["#d5a11e", "#A3A3A3", "#CD7F32"];
//   return (
//     <div className="bestCard">
//       <div className="bestInfo">
//         <div className="rank" style={{ color: `${color[rank - 1]}` }}>
//           {rank}
//         </div>
//         <div className="name">{name}</div>
//         <div className="company">{company}</div>
//       </div>
//       {/* <div className="returnRate">{returnRate}</div> */}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { searchAnalysts } from "~/api/analysts";
import { searchFirms } from "~/api/firms";
import "./Common.css";

export default function Best({ rank, name, company, returnRate }) {
  const color = ["#d5a11e", "#A3A3A3", "#CD7F32"];
  const [analystId, setAnalystId] = useState(null);
  const [firmId, setFirmId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const analyst = await searchAnalysts(name);
      const firm = await searchFirms(company);

      return { analyst, firm };
    }
    fetchData().then(({ analyst, firm }) => {
      if (analyst.length > 0) {
        setAnalystId(analyst[0].id);
      }
      if (firm.length > 0) {
        setFirmId(firm[0].id);
      }
    });
  }, [name, company]);

  return (
    <div className="bestCard">
      <div className="bestInfo">
        <div className="rank" style={{ color: `${color[rank - 1]}` }}>
          {rank}
        </div>
        <div className="name">
          <a href={`/detail/analyst/${analystId}`}>{name}</a>
        </div>
        <div className="company">
          <a href={`/detail/firm/${firmId}`}>{company}</a>
        </div>
      </div>
      {/* <div className="returnRate">{returnRate}</div> */}
    </div>
  );
}
