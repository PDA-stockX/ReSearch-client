import React from 'react';
import "~/styles/ReportInfo.css";

export default function ReportInfo({ report }) {
    return (
        <>
            <div className="reportInfoContainer">
                <div className="reportInfoHeader">
                    <p>{report.title}</p>
                    <p>{report.postedAt}</p>
                </div>
                <div className="reportInfoBody">
                    <p>{report.achievementScore}</p>
                    <p>{report.returnRate}</p>
                </div>
                <div className="reportInfoFooter">
                    <p className="analyst">{report.analyst.name}</p>
                    <p>{report.firm.name}</p>
                </div>
            </div>
        </>
    )
}