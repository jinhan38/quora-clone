import React from 'react';
import "./QuoraBox.css"
import {Avatar} from "@material-ui/core";

function QuoraBox(props) {
    return (
        <div className="quoraBox">
            <div className="quoraBox_info">
                <Avatar/>
                <h5>리액트 연습</h5>
            </div>
            <div className="quoraBox_quora">
                <p>뭐가 궁금하지요?</p>
            </div>
        </div>
    );
}

export default QuoraBox;