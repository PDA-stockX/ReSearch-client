import React from 'react';

export default function AnalystInfo({ analyst }) {
    return (
        <>
            <h3>Analyst Information</h3>
            <div>
                <p>Analyst Name: {analyst.name}</p>
                <p>Analyst Return Rate: {analyst.returnRate}</p>
                <p>Analyst Achievement Score: {analyst.achievementScore}</p>
            </div>
        </>
    )
}