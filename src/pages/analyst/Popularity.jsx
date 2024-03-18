import React from 'react'

export default function Popularity() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "5%", margin: "3%" }}>
                    <button style={{ cursor: "pointer" }}>수익률</button>
                    <button style={{ cursor: "pointer" }}>달성률</button>
                    <button style={{ cursor: "pointer" }}>업종</button>
                    <button style={{ color: "#CBCBCB", cursor: "pointer" }}>인기</button>
                </div>
            </div>
        </>
    )
}
