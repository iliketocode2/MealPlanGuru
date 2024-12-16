import React from 'react';
import '../styles/PostWriteUp.css';

interface PostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

const Post1: React.FC<PostProps> = ({ title, date, content, author, imageUrl }) => {
  return (
    <div className="post-page">
      <div className="main-content">
        <h1>{title}</h1>
        <h3>By {author}</h3>
        <h4>Published on {date}</h4>
        <p>
          {content}
        </p>
      </div>
    </div>
  );
}

export default Post1;
