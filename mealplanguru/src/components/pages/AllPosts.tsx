import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/AllPosts.css';
import posts from '../posts.ts';
import PostsNavBar from '../PostsNavBar.tsx';

const AllPosts: React.FC = () => {
  return (
    <div className="all-posts-page">
      <PostsNavBar />
      <div className="all-posts">
        <h1>All Posts</h1>
        <div className="posts-list">
          {Object.entries(posts).map(([postId, post]) => (
            <div key={postId} className="post-summary">
              <Link to={`/tufts/posts/${postId}`}>
                <img src={post.imageUrl} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.author}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;