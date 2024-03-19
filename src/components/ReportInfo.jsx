import React from 'react';

export default function ReportInfo({ report }) {
    return (
        <>
            <h3>Report Information</h3>
            <div>
                <p>Report Title: {report.title}</p>
                <p>Report Summary: {report.summary}</p>
                <p>Posted At: {report.postedAt}</p>
            </div>
        </>
    )
}