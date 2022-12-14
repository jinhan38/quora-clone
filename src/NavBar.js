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
import Modal from 'react-modal';
import firebase from "firebase/compat/app";
import db, {auth} from "./firebase";

function NavBar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const handleQuestion = (e) => {
        e.preventDefault();
        setOpenModal(false);
        db.collection("questions").add({
            question: input,
            imageUrl: inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user,
        }).then(() => {
            setInput("");
            setInputUrl("");
        });

    }

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
                <input type="text" placeholder="????????????"/>
                <Search/>
            </div>
            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    <Avatar src={user.photo} onClick={() => {
                        auth.signOut().then(() => {
                            console.log("???????????? ??????");
                        });
                    }}/>
                </div>
                <Language/>
                <Button onClick={() => setOpenModal(true)}>????????????</Button>
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
                        <h5>??????</h5>
                        <h5>????????????</h5>
                    </div>
                    <div className="modal_info">
                        <Avatar src={user.photo}/>
                        <p>?????????
                            : {user.displayName ? user.displayName : user.email}</p>
                        <div className="modal_scope">
                            <PeopleAltOutlined/>
                            <p>????????????</p>
                            <ExpandMore/>
                        </div>
                    </div>
                    <div className="modal_field">
                        <input type="text" placeholder="????????? ???????????????" required
                               value={input}
                               onChange={(e) => setInput(e.target.value)}/>
                        <div className="modal_fieldLink">
                            <Link/>
                            <input type="text" placeholder="URL ????????? ??????????????????"
                                   value={inputUrl}
                                   onChange={(e) => setInputUrl(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal_buttons">
                        <button className="add" type="text"
                                onClick={handleQuestion}>??????
                        </button>
                        <button className="can"
                                onClick={() => setOpenModal(false)}>??????
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default NavBar;