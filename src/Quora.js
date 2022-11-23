import React from 'react';
import "./Quora.css"
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function Quora(props) {
    return (
        <div className="quora">
            <NavBar/>
            <div className="quora_content">
                <Sidebar/>
                <Feed/>
                <Widget/>
            </div>
        </div>
    );
}

export default Quora;