import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../BlogPost.tsx';
import '../../styles/BlogPostWrapper.css';
import posts from '../posts.ts';
import PostsNavBar from '../PostsNavBar.tsx';

export default function BlogPostWrapper() {
  const { postId } = useParams();
  const post = posts[postId];
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    if (post) {
      // Fetch the current view count from the backend
      fetch(`http://localhost:5000/api/posts/${postId}/viewCount`)
        .then(response => response.json())
        .then(data => {
          setViewCount(data.viewCount);
        });

      // Increment the view count on the backend
      fetch(`http://localhost:5000/api/posts/${postId}/incrementViewCount`, {
        method: 'POST',
      })
        .then(response => response.json())
        .then(data => {
          setViewCount(data.viewCount);
        });
    }
  }, [postId, post]);

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
          tags={post.tags}
          variant="detailed"
        />
        <p>Views: {post.viewCount}</p>
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