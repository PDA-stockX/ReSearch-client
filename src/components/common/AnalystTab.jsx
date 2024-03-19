import React, { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import ReturnRate from '~/pages/analyst/ReturnRate';
import AchievementScore from '~/pages/analyst/AchievementScore';
import Sector from '~/pages/analyst/Sector';
import Popularity from '~/pages/analyst/Popularity';

export default function Tab(props) {
    const [tab, setTab] = useState(0);

    return (
        <>
            <Nav fill variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(0);
                        }}
                        eventKey="link-0"
                    >
                        수익률
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(1);
                        }}
                        eventKey="link-1"
                    >
                        달성률
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(2);
                        }}
                        eventKey="link-2"
                    >
                        업종
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(3);
                        }}
                        eventKey="link-3"
                    >
                        인기
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </>
    );
}

function TabContent({ tab }) {
    if (tab == 0) {
        return <ReturnRate/>;
    } else if (tab == 1) {
        return <AchievementScore/>;
    } else if (tab == 2) {
        return <Sector/>;
    } else if (tab == 3) {
        return <Popularity/>;
    }
}