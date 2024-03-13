import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "~/components/common/Header";

export default function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Container className="min-vh-100">
        <Outlet />
      </Container>
    </>
  );
}
