import React from 'react';
import '../styles/BlogPost.css';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  author: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, author, imageUrl }) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h4>{date}</h4>
      <img src={imageUrl} alt={title} />
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;