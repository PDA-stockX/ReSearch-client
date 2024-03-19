import React from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
export default function DetailCommon() {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(-1);
  };
  return (
    <div style={{}}>
      <button
        style={{
          color: "#D2D2D2",
          cursor: "pointer",
          margin: "3%",
          marginTop: "5%",
          fontSize: "2vh",
        }}
        onClick={onClickButton}
      >
        {"<"}뒤로가기
      </button>
      {/* // <BackHeader /> */}
      <Container className="min-vh-100">
        <Outlet />
      </Container>
    </div>
  );
}
