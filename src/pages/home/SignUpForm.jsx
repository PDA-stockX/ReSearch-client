import React, {useCallback, useState} from 'react'
import {signUp} from "~/api/users.js";
import {useNavigate} from "react-router-dom";

export default function SignUpForm() {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = useCallback(async () => {
        // todo: 잘못된 입력에 따른 에러 처리
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        const response = await signUp(email, password, name, nickname);
        // todo: 회원가입 실패에 대한 에러 처리
        if (response.message === "success") {
            alert('회원가입이 완료되었습니다.');
            navigate('/login');
        } else {
            alert('회원가입에 실패했습니다.');
        }
    }, [password, confirmPassword, email, name, nickname, navigate]);


    return (
        <div className="formContainer">
            <div className="logoContainer">
                <img src="/images/research-logo.png" alt="logo"/>
            </div>
            <div className="inputContainer">
                <div className="inputGroup">
                    <span>이름</span>
                    <input placeholder="이름을 입력해주세요"
                           onChange={(e) => {
                               setName(e.target.value)
                           }}/>
                </div>
                <div className="inputGroup">
                    <span>닉네임</span>
                    <input placeholder="닉네임을 입력해주세요"
                           onChange={(e) => {
                               setNickname(e.target.value)
                           }}/>
                </div>
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
                               setPassword(e.target.value)
                           }}/>
                </div>
                <div className="inputGroup">
                    <span>비밀번호 확인</span>
                    <input type="password" placeholder="비밀번호를 다시 입력해주세요"
                           onChange={(e) => {
                               setConfirmPassword(e.target.value);
                           }}/>
                </div>
                <button onClick={handleSignUp}>회원가입</button>
            </div>
        </div>
    )
}
