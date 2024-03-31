import React from "react";
import ReportInfo from "~/components/ReportInfo.jsx";
import AnalystInfo from "~/components/AnalystInfo.jsx";
import FirmInfo from "~/components/FirmInfo.jsx";

import "~/styles/SearchResult.css";
import { useSelector } from "react-redux";

export default function SearchResult() {
  const reports = useSelector((state) => state.search.reports);
  const analysts = useSelector((state) => state.search.analysts);
  const firms = useSelector((state) => state.search.firms);

  return (
    <>
      <div style={{ marginTop: "20%" }} />
      {reports.length > 0 ? (
        <div className="resultTitleContainer">
          <p className="resultTitle">리포트</p>
          {reports.map((report, index) => (
            <>
              <a href={`/detail/report/${report.id}`}>
                <ReportInfo key={report.id} report={report} />
              </a>
            </>
          ))}
        </div>
      ) : null}

      {analysts.length > 0 ? (
        <div className="resultTitleContainer">
          <p className="resultTitle">애널리스트</p>
          {analysts.map((analyst, index) => (
            <>
              <a href={`/detail/analyst/${analyst.id}`}>
                <AnalystInfo key={analyst.id} analyst={analyst} />
              </a>
            </>
          ))}
        </div>
      ) : null}

      {firms.length > 0 ? (
        <div className="resultTitleContainer">
          <p className="resultTitle">증권사</p>
          {firms.map((firm, index) => (
            <>
              <a href={`/detail/firm/${firm.id}`}>
                <FirmInfo key={firm.id} firm={firm} />
              </a>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}
