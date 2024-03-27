import React from 'react';
import ReportInfo from "~/components/ReportInfo.jsx";
import AnalystInfo from "~/components/AnalystInfo.jsx";
import FirmInfo from "~/components/FirmInfo.jsx";

import '~/styles/SearchResult.css';
import {useSelector} from "react-redux";

export default function SearchResult() {
    const reports = useSelector(state => state.search.reports);
    const analysts = useSelector(state => state.search.analysts);
    const firms = useSelector(state => state.search.firms);

    return (
        <>
            {reports.length > 0 ?
                <div className="resultTitleContainer">
                    <p>리포트</p>
                </div>
                : null}
            {reports.map((report, index) => (
                <ReportInfo key={report.id} report={report}/>
            ))}
            {analysts.length > 0 ?
                <div className="resultTitleContainer">
                    <p>애널리스트</p>
                </div>
                : null}
            {analysts.map((analyst, index) => (
                <AnalystInfo key={analyst.id} analyst={analyst}/>
            ))}
            {firms.length > 0 ?
                <div className="resultTitleContainer">
                    <p>증권사</p>
                </div>
                : null}
            {firms.map((firm, index) => (
                <FirmInfo key={firm.id} firm={firm}/>
            ))}
        </>
    );
}