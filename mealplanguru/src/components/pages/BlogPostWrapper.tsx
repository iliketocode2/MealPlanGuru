import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPost from '../BlogPost.tsx';
import '../../styles/BlogPostWrapper.css';
import posts from '../posts.ts';
import PostsNavBar from '../PostsNavBar.tsx';

export default function BlogPostWrapper() {
  const { postId } = useParams();
  const post = posts[postId];
  const [viewCount, setViewCount] = useState<number>(0);
  const [viewCounts, setViewCounts] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const incrementCalled = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (post) {
      setLoading(true); // Set loading to true when postId changes
      
      // Fetch the current view count from the backend
      fetch(`http://localhost:5000/api/tufts/posts/${postId}/viewCount`)
        .then(response => response.json())
        .then(data => {
          setViewCount(data.viewCount);
          setLoading(false); // Set loading to false after fetching data
        });

      // Increment the view count on the backend if not already called
      if (!incrementCalled.current[postId]) {
        fetch(`http://localhost:5000/api/tufts/posts/${postId}/incrementViewCount`, {
          method: 'POST',
        })
          .then(response => response.json())
          .then(data => {
            setViewCount(data.viewCount); // Update view count for the current post
          });
        incrementCalled.current[postId] = true;
      }
    }
  }, [postId, post]);

  useEffect(() => {
    const fetchViewCounts = async () => {
      const viewCounts: { [key: string]: number } = {};
      const postIds = Object.keys(posts);
      for (const postId of postIds) {
        const response = await fetch(`http://localhost:5000/api/tufts/posts/${postId}/viewCount`);
        const data = await response.json();
        viewCounts[postId] = data.viewCount; // Set view count for each post
      }
      setViewCounts(viewCounts); // Update view counts for all posts
    };

    fetchViewCounts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  const popularPosts = Object.entries(posts)
    .filter(([id]) => id !== postId) // Filter out the current post
    .sort(([, postA], [, postB]) => (viewCounts[postB.id] || 0) - (viewCounts[postA.id] || 0))
    .slice(0, 3);

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
        <p>Views: {viewCount}</p>
      </div>
      <div className="sidebar">
          <h3>Most Popular Posts</h3>
          {popularPosts.map(([postId, popularPost]) => (
            <Link key={postId} to={`/tufts/posts/${postId}`} className="popular-post">
              <img src={popularPost.imageUrl} alt={popularPost.title} />
              <div>
                <h4>{popularPost.title}</h4>
                <p>{popularPost.content.substring(0, 50)}...</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
    </>
  );
}