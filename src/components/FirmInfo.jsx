import React from 'react';

export default function FirmInfo({ firm }) {
    return (
        <>
            <div>
                <h1>{firm.name}</h1>
                <p>{firm.returnRate}</p>
                <p>{firm.achievementScore}</p>
            </div>
        </>
    )
}