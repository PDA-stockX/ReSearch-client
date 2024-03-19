import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "~/components/common/Header";
import { useLocation } from "react-router-dom";
import SubHeader from '~/components/common/SubHeader';


export default function NavbarLayout() {
  const location = useLocation();
  const Analyst_subMenu = [
    'return-rate',
    'achievement-score',
    'sector',
    'popular'
  ]

  const Analyst_subMenuName = [
    '수익률',
    '달성률',
    '업종',
    '인기'
  ]

  const Firm_subMenu = [
    'return-rate',
    'achievement-score',
    'popular'
  ]

  const Firm_subMenuName = [
    '수익률',
    '달성률',
    '인기'
  ]

  const Bookmark_subMenu = [
    'analyst',
    'report'
  ]

  const Bookmark_subMenuName = [
    '애널리스트',
    '리포트',
  ]


  return (
    <>
      { 
        location.pathname.startsWith("/analyst")
        ? <Container style={{ backgroundColor: "#F7F7F7"}} className="fixed-top">
            <Header/> 
            <SubHeader menu='analyst' subMenu={Analyst_subMenu} subMenuName={Analyst_subMenuName}/> 
          </Container>
        :  location.pathname.startsWith("/firm") ? (
          <Container style={{ backgroundColor: "#F7F7F7" }} className="fixed-top">
            <Header />
            <SubHeader menu="firm" subMenu={Firm_subMenu} subMenuName={Firm_subMenuName} />
          </Container>
        ) : location.pathname.startsWith("/bookmark") ? (
          <Container style={{ backgroundColor: "#F7F7F7" }} className="fixed-top">
            <Header />
            <SubHeader menu="bookmark" subMenu={Bookmark_subMenu} subMenuName={Bookmark_subMenuName} />
          </Container>
        ) : <Header />
      }

      <Container style={{ backgroundColor: "#F7F7F7", marginTop: "78.4px" }} className="min-vh-100">
        <Outlet />
      </Container>
    </>
  );
}
