import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../BlogPost.tsx';
import '../../styles/BlogPostWrapper.css';
import posts from '../posts.ts';
import PostsNavBar from '../PostsNavBar.tsx';

export default function BlogPostWrapper() {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
    <PostsNavBar />
    <div className="post-page">
      <div className="main-content">
        <BlogPost
          title={post.title}
          date={post.date}
          content={post.content}
          author={post.author}
          imageUrl={post.imageUrl}
        />
      </div>
      <div className="sidebar">
        <h3>Most Popular Posts</h3>
        <div className="popular-post">
          <img src="https://via.placeholder.com/60" alt="Post 1" />
          <div>
            <h4>Opinion: something</h4>
            <p>A short description can go here.</p>
          </div>
        </div>
        <div className="popular-post">
          <img src="https://via.placeholder.com/60" alt="Post 2" />
          <div>
            <h4>Review: something else</h4>
            <p>A short description can go here</p>
          </div>
        </div>
        <div className="popular-post">
          <img src="https://via.placeholder.com/60" alt="Post 3" />
          <div>
            <h4>News: another thing</h4>
            <p>A short description can go here</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}