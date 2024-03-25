import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "~/components/common/Header";
import { useLocation } from "react-router-dom";
import SubHeader from '~/components/common/SubHeader';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import "./topButton.css";


export default function NavbarLayout() {
  const [showButton, setShowButton] = useState(false);
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

  const handleScroll = () => {
    if (!window.scrollY) return

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, [])


  return (
    <>
      { 
        location.pathname.startsWith("/analyst")
        ? <Container style={{ backgroundColor: "#F7F7F7"}} className="fixed-top">
            <Header/> 
            <SubHeader menu='analyst'subMenu={Analyst_subMenu} subMenuName={Analyst_subMenuName}/> 
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

      {/* marginTop: "78.4px" */}
      <Container style={{ backgroundColor: "#F7F7F7", marginTop: "104.01px" }} className="min-vh-100">
        <Outlet />
      </Container>

      <div className="topBtn_wrap">
        {showButton && (
          <button className="topBtn" onClick={handleScroll}>
            <BsFillArrowUpCircleFill />
          </button>
        )}
      </div>
    </>
  );
}
