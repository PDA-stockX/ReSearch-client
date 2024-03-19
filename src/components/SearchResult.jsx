import React from 'react';
import ReportInfo from "~/components/ReportInfo.jsx";
import AnalystInfo from "~/components/AnalystInfo.jsx";
import FirmInfo from "~/components/FirmInfo.jsx";

export default function SearchResult({ reports, analysts, firms }) {
    return (
        <>
            {reports.map((report, index) => (
                <ReportInfo key={report.id} report={report} />
            ))}
            {analysts.map((analyst, index) => (
                <AnalystInfo key={analyst.id} analyst={analyst} />
            ))}
            {firms.map((firm, index) => (
                <FirmInfo key={firm.id} firm={firm} />
            ))}
        </>
    )
}