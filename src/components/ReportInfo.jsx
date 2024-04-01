import React, {useCallback, useEffect, useState} from "react";
import "~/styles/ReportInfo.css";
import {dateToSimpleFormat} from "~/utils/date.js";
import {useNavigate} from "react-router-dom";

export default function ReportInfo({report}) {
    const navigate = useNavigate();

    const achievementScoreColor = () => {
        if (report.achievementScore >= 80) {
            return "red";
        }
        return "black";
    }

    const returnRateColor = () => {
        if (report.returnRate >= 0.50) {
            return "red";
        }
        if (report.returnRate >= 0.30) {
            return "orange";
        }
        if (report.returnRate < 0) {
            return "blue";
        }
        return "black";
    }

    const handleClick = useCallback(() => {
        navigate(`/detail/report/${report.id}`);
    }, [navigate, report.id]);

    return (
        <>
            <div className="reportInfoContainer" onClick={handleClick}>
                <div className="reportInfoHeader">
                    <p id="reportTitle">{report.title}</p>
                    <p id="reportPostedAt">{dateToSimpleFormat(report.postedAt)}</p>
                </div>
                <div className="reportInfoBody">
                    <p id="reportEvaluation">평가</p>
                    <p id="reportAchievementScore">달성점수:
                        <span style={{color: achievementScoreColor()}}> {report.achievementScore}</span> / 100
                    </p>
                    <p id="reportReturnRate">수익률:
                        <span style={{color: returnRateColor()}}> {(report.returnRate * 100).toFixed(2)}</span>%
                    </p>
                </div>
                <div className="reportInfoFooter">
                    <p className="analyst">{report.analyst.name}</p>
                    <p>{report.firm.name}</p>
                </div>
            </div>
        </>
    );
}
