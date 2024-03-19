import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "~/components/common/Header";

export default function NavbarLayout() {
  return (
    <>
      <Header />
      <Container style={{ backgroundColor: "#F7F7F7" }} className="min-vh-100 ">
        <Outlet />
      </Container>
    </>
  );
}
