"use client";

// import React, { useState } from "react";
// import "./Post.css";

const Post = () => {
    return (
        <div className="post">
            <div className="left">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </div>
            <div className="right">
                <h2>Post Title</h2>
                <p>Post Description. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.</p>
            </div>
        </div>
    );
};

export default Post;