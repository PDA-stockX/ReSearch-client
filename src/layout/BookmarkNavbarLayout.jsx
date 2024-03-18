import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import SubHeader from '~/components/common/SubHeader';

export default function AnalystNavbarLayout() {
  const subMenu = [
    'analyst',
    'report'
  ]

  const subMenuName = [
    '애널리스트',
    '리포트',
  ]

  return (
    <>
      <SubHeader menu='analyst' subMenu={subMenu} subMenuName={subMenuName}/>
      <Container className="min-vh-100">
        <Outlet />
      </Container>
    </>
  );
}
