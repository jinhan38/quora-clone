import React, {useState} from 'react';
import './NavBar.css'
import {
    AssignmentIndOutlined,
    BorderAllRounded, ExpandMore,
    Home, Language, Link, NotificationsOutlined, PeopleAltOutlined, Search
} from "@material-ui/icons";
import {Avatar, Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import Modal from 'react-modal';

function NavBar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="navbar">
            <div className="qHeader_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png"
                    alt=""/>
            </div>
            <div className="qHeader_icons">
                <div className="qHeader_icon">
                    <Home/>
                </div>
                <div className="qHeader_icon">
                    <BorderAllRounded/>
                </div>
                <div className="qHeader_icon">
                    <AssignmentIndOutlined/>
                </div>
                <div className="qHeader_icon">
                    <PeopleAltOutlined/>
                </div>
                <div className="qHeader_icon">
                    <NotificationsOutlined/>
                </div>
            </div>
            <div className="qHeader_input">
                <input type="text" placeholder="검색하기"/>
                <Search/>
            </div>
            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    <Avatar src={user.photo} onClick={() => {
                        auth.signOut().then(r => {
                            console.log("로그아웃 성공");
                        });
                    }}/>
                </div>
                <Language/>
                <Button onClick={() => setOpenModal(true)}>질문하기</Button>
                <Modal isOpen={openModal}
                       onRequestClose={() => setOpenModal(false)}
                       appElement={document.getElementById('root') || undefined}
                       shouldCloseOnOverlayClick={true}
                       style={{
                           overlay: {
                               width: 700,
                               height: 600,
                               backgroundColor: "rgba(0,0,0,0.8)",
                               zIndex: "1000",
                               top: "50%",
                               left: "50%",
                               marginTop: "-300px",
                               marginLeft: "-350px"
                           }
                       }}>
                    <div className="modal_title">
                        <h5>질문</h5>
                        <h5>공유하기</h5>
                    </div>
                    <div className="modal_info">
                        <Avatar src={user.photo}/>
                        <p>질문자
                            : {user.displayName ? user.displayName : user.email}</p>
                        <div className="modal_scope">
                            <PeopleAltOutlined/>
                            <p>전체공개</p>
                            <ExpandMore/>
                        </div>
                    </div>
                    <div className="modal_field">
                        <input type="text" placeholder="질문을 작성하세요"/>
                        <div className="modal_fieldLink">
                            <Link/>
                            <input type="text" placeholder="URL 링크만 작성해주세요"/>
                        </div>
                    </div>
                    <div className="modal_buttons">
                        <button className="add" type="text">등록</button>
                        <button className="can"
                                onClick={() => setOpenModal(false)}>닫기
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default NavBar;