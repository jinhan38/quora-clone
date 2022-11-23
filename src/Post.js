import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined,
    RepeatOneOutlined, ShareOutlined
} from "@material-ui/icons";

function Post(props) {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar/>
                <h5>유저 아이디</h5>
                <small>작성시간</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>질문내용 입니다</p>
                    <button className="post_btnAnswer">답변하기</button>
                </div>
                <div className="post_answer">
                    <p>답변입니다.</p>
                </div>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/816efad9-a092-497f-824e-c3bd2bbbc739/ddemwri-6f48dd4a-af59-4e9c-86a5-8772974f4954.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxNmVmYWQ5LWEwOTItNDk3Zi04MjRlLWMzYmQyYmJiYzczOVwvZGRlbXdyaS02ZjQ4ZGQ0YS1hZjU5LTRlOWMtODZhNS04NzcyOTc0ZjQ5NTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jQUNSiNFpomXx5oDWuWUKVZl2BC3npzDNHNzurSXJ6g" alt=""/>

            </div>

            <div className="post_footer">
                <div className="post_footerAction">
                    <ArrowUpwardOutlined/>
                    <ArrowDownwardOutlined/>
                </div>
                <RepeatOneOutlined/>
                <ChatBubbleOutlineOutlined/>
                <div className="post_footerRight">
                    <ShareOutlined/>
                    <MoreHorizOutlined/>
                </div>
            </div>
        </div>
    );
}

export default Post;