import Offcanvas from "react-bootstrap/Offcanvas";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "~/styles/SideNavMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "~/api/users.js";
import { authenticate } from "~/reducers/auth.js";

export default function SideNavMenu({ name, ...props }) {
  const [show, setShow] = useState(false);
  const authContext = useSelector((state) => state.auth.authContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = useCallback(() => setShow(false), [setShow]);
  const handleShow = useCallback(() => setShow(true), [setShow]);

  const handleClickLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleClickLogout = useCallback(async () => {
    await logout();
    dispatch(authenticate({ token: null }));
    handleClose();
    navigate("/");
  }, [dispatch, handleClose, navigate]);

  return (
    <>
      <div className="sideNavButton" onClick={handleShow}></div>
      <Offcanvas show={show} onHide={handleClose} {...props} style={{ width: "80%" }}>
        <Offcanvas.Body className="offcanvasBody">
          <div className="userStatusContainer">
            <div className="userStatus">
              <div className="userBox">
                <div className="userStatusImg"></div>
                <div className="usernameContent">{authContext.isAuthenticated ? authContext.user.nickname : "로그인이 필요합니다."}</div>
              </div>
              {authContext.isAuthenticated ? <div onClick={handleClickLogout}>로그아웃</div> : <div onClick={handleClickLogin}>로그인</div>}
            </div>
          </div>
          <div className="navLinkContainer">
            <Link to={"/"}>홈</Link>
            <Link to={"/analyst/return-rate"}>애널리스트</Link>
            <Link to={"/firm/return-rate"}>증권사</Link>
            <Link to={"/bookmark/analyst"}>즐겨찾기</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
