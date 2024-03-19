import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import SubHeader from '~/components/common/SubHeader';

export default function AnalystNavbarLayout() {
  const subMenu = [
    'return-rate',
    'achievement-score',
    'sector',
    'popular'
  ]

  const subMenuName = [
    '수익률',
    '달성률',
    '업종',
    '인기'
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
