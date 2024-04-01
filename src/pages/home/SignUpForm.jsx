import React, { useCallback, useState } from "react";
import { checkDuplicateNickname, signUp } from "~/api/users.js";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ field: "", type: "", message: "" });
  const navigate = useNavigate();

  const handleSignUp = useCallback(async () => {
    if (password !== confirmPassword) {
      setMessage({
        field: "confirmPassword",
        type: "fail",
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }

    try {
      const response = await signUp(email, password, name, nickname);
      if (response.message === "success") {
        navigate("/login");
      }
    } catch (error) {
      setMessage({
        field: "input",
        type: "fail",
        message: "입력 정보를 다시 확인해주세요.",
      });
      if (error.response.data.message === "email must be unique") {
        setMessage({
          field: "email",
          type: "fail",
          message: "이미 사용 중인 이메일입니다.",
        });
      }
    }
  }, [password, confirmPassword, email, name, nickname, navigate]);

  const handleCheckDuplication = useCallback(async () => {
    const duplicate = await checkDuplicateNickname(nickname);
    if (!duplicate) {
      setMessage({
        field: "nickname",
        type: "fail",
        message: "이미 사용 중인 닉네임입니다.",
      });
    } else {
      setMessage({
        field: "nickname",
        type: "success",
        message: "사용 가능한 닉네임입니다.",
      });
    }
  }, [nickname]);

  return (
    <div className="formContainer">
      <div className="logoContainer">
        <img src="/images/research-logo.png" alt="logo" />
      </div>
      <div className="inputContainer">
        <div className="inputGroup">
          <span>이름</span>
          <input
            placeholder="이름을 입력해주세요"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {message.field === "name" ? (
            <label className={message.type}>{message.message}</label>
          ) : null}
        </div>
        <div className="inputGroup">
          <span>닉네임</span>
          <input
            placeholder="닉네임을 입력해주세요"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <button className="checkButton" onClick={handleCheckDuplication}>
            중복확인
          </button>
          {message.field === "nickname" ? (
            <label className={message.type}>{message.message}</label>
          ) : null}
        </div>
        <div className="inputGroup">
          <span>이메일</span>
          <input
            placeholder="이메일을 입력해주세요"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {message.field === "email" ? (
            <label className={message.type}>{message.message}</label>
          ) : null}
        </div>
        <div className="inputGroup">
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {message.field === "password" ? (
            <label className={message.type}>{message.message}</label>
          ) : null}
        </div>
        <div className="inputGroup">
          <span>비밀번호 확인</span>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {message.field === "confirmPassword" ? (
            <label className={message.type}>{message.message}</label>
          ) : null}
        </div>
        <button onClick={handleSignUp}>회원가입</button>
        {message.field === "input" ? (
          <label className={message.type}>{message.message}</label>
        ) : null}
      </div>
    </div>
  );
}
