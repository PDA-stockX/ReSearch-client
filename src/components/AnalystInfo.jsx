import React, {useCallback} from "react";
import "~/styles/SearchResult.css";
import {useNavigate} from "react-router-dom";

export default function AnalystInfo({analyst}) {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate(`/detail/analyst/${analyst.id}`);
    }, []);

    return (
        <>
            <div className="result" onClick={handleClick}>
                <p>이름: {analyst.name}</p>
                <p>수익률: {analyst.returnRate}</p>
                <p>달성점수: {analyst.achievementScore}</p>
            </div>
        </>
    );
}
