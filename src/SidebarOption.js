import React from 'react';
import './SidebarOption.css'
import {Add} from "@material-ui/icons";

function SidebarOption(props) {
    return (
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img
                    src="https://wimg.mk.co.kr/meet/neds/2021/01/image_readtop_2021_90469_16117848624516236.jpg"
                    alt=""/>
                <p>겨울 산</p>
            </div>
            <div className="sidebarOption">
                <img
                    src="https://w.namu.la/s/73838202e006e2e57e51fb4b5bf6ea3226ff96d7fcb6db32ebf20b9b61100ad7262cb1a980d0e3108305ed6c3d488fd3cdf0840784acfb6a6ef4940a002dfd5f38d3820bd9d4644e8c1c766f0fbc049d2302f9234e9786e7222d6b2729700ce0e5c8d6ed0fbd7a4ca0c21d013c77b27c"
                    alt=""/>
                <p>바다</p>
            </div>
            <div className="sidebarOption">
                <img
                    src="http://www.ikpnews.net/news/photo/202207/48096_33566_264.jpg"
                    alt=""/>
                <p>계곡</p>
            </div>
            <div className="sidebarOption">
                <Add/>
                <p className="text">더보기</p>
            </div>
        </div>
    );
}

export default SidebarOption;