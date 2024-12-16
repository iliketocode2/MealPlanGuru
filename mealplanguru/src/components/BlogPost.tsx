import React from 'react';
import '../styles/BlogPost.css';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  author: string;
  imageUrl: string;
  tags: string[];
  variant?: 'summary' | 'detailed';
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, author, imageUrl, tags, variant = 'detailed' }) => {
  return (
    <div className={`post-item ${variant}`}>
      <div className="post-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="right">
        <h3>{title}</h3>
        <p className="date">{date}</p>
        <p>{author}</p>
        <p>{content}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;