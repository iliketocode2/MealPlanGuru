import React from 'react';
import '../styles/Post.css';

interface PostProps {
  title: string;
  content: string;
  date: string;
  imageUrl: string;
}

const Post: React.FC<PostProps> = ({ title, date, content, imageUrl }) => {
  return (
    <div className="post-item">
      <div className="post-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="right">
        <h3>{title}</h3>
        <p className="date">{date}</p>
        <p>{content}</p>
        </div>
    </div>
  );
}

export default Post;