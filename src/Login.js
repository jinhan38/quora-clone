import React from 'react';
import "./Login.css";
import {ArrowForwardIos} from "@material-ui/icons";

function Login() {
    return (<div className="login">
        <div className="login_container">
            <div className="login_logo">
                <img
                    src="https://qph.fs.quoracdn.net/main-qimg-d049946241e53481209a8938b70321e0"
                    alt=""/>
            </div>
            <div className="login_desc">
                <p>리액트 첫번째 클론 코딩</p>
                <h3>jinhan38</h3>
            </div>
            <div className="login_auth">
                <div className="login_authOptions">
                    <div className="login_authOption">
                        <img className="login_gooogleAuth"
                             src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                             alt=""/>
                        <p> 구글 아이디로 로그인 </p>
                    </div>
                    <div className="login_authOption">
                        <img className="login_gooogleAuth"
                             src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                             alt=""/>
                        <p> 페이스북 아이디로 로그인 </p>
                    </div>
                    <div className="login_authDesc">
                        <p>
                            <span style={{color: "blue", cursor: "pointer"}}>이메일로 회원가입</span>
                            시 본사의
                            <span style={{
                                color: "blue", cursor: "pointer"
                            }}>개인정보정책</span>과 {" "}
                            <span style={{color: "blue", cursor: "pointer"}}>서비스 제공 정책</span>
                            에 동의하는 것으로 간주합니다.
                        </p>
                    </div>
                </div>
                <div className="login_emailPass">
                    <div className="login_label">
                        <h4>로그인</h4>
                    </div>
                    <div className="login_inputFields">
                        <div className="login_inputField">
                            <input type="text" placeholder="이메일"/>
                        </div>
                        <div className="login_inputField">
                            <input type="password" placeholder="비밀번호"/>
                        </div>
                    </div>
                    <div className="login_forgButton">
                        <small>비밀번호 찾기</small>
                        <button type="submit"> 로그인</button>
                    </div>
                    <button>회원가입</button>
                </div>
            </div>
            <div className="login_lang">
                <p>언어 설정</p>
                <ArrowForwardIos fontSize="small"/>
            </div>
            <div className="login_footer">
                <p>About</p>
                <p>오시는길</p>
                <p>비지니스문의</p>
                <p>근성과끈기</p>
                <p>구독과좋아요!!</p>
                <p>&copy; jinhan38</p>
            </div>
        </div>
    </div>);
}

export default Login;