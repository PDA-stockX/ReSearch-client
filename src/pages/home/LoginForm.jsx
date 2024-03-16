import React, {useCallback, useState} from 'react'
import {login} from "~/api/users";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authenticate} from "~/reducers/auth.js";

import "~/styles/LoginForm.css";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = useCallback(async () => {
        try {
            const response = await login(email, password);
            dispatch(authenticate(response.data));
            navigate('/');
        } catch (err) {
            setError(err);
        }

    }, [dispatch, email, navigate, password]);

    const handleEnter = useCallback(async (e) => {
        if (e.key === "Enter") {
            await handleLogin();
        }
    }, [handleLogin])

    return (
        <div className="formContainer">
            <div className="logoContainer">
                <img src="/images/research-logo.png" alt="logo"/>
            </div>
            <div className="inputContainer">
                <div className="inputGroup">
                    <span>이메일</span>
                    <input placeholder="이메일을 입력해주세요"
                                  onChange={(e) => {
                                      setEmail(e.target.value)
                                  }}/>
                </div>
                <div className="inputGroup">
                    <span>비밀번호</span>
                    <input type="password" placeholder="비밀번호를 입력해주세요"
                                  onChange={(e) => {
                                      setPassword(e.target.value);
                                  }}
                                  onKeyDown={handleEnter}/>
                </div>
                <button onClick={handleLogin}>로그인</button>
                {error?<label>로그인 정보가 일치하지 않습니다</label>:null}
            </div>
            <div className="linkContainer">
                <a href="../sign-up">계정이 없으신가요? <em>회원가입</em></a>
            </div>
        </div>
    )
}