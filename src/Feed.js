import React from 'react';
import "./Feed.css";
import QuoraBox from "./QuoraBox";
import Post from "./Post";

function Feed(props) {
    return (
        <div className="feed">
            <QuoraBox/>
            <Post/>

        </div>
    );
}

export default Feed;