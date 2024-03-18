import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "~/components/common/Header";
import SubHeader from '~/components/common/SubHeader';

export default function AnalystNavbarLayout() {
  return (
    <>
      <Header />
      <SubHeader menu='analyst'/>
      <Container className="min-vh-100">
        <Outlet />
      </Container>
    </>
  );
}
