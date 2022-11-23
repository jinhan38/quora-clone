import React from 'react';
import './Sidebar.css';
import SidebarOption from "./SidebarOption";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <SidebarOption/>
        </div>
    );
}

export default Sidebar;