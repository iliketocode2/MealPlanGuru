import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/AllPosts.css';
import posts from '../posts.ts';
import PostsNavBar from '../PostsNavBar.tsx';

const AllPosts: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<'oldToNew' | 'newToOld' | 'mostViewed'>('newToOld');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tag = params.get('tag');
    if (tag) {
      setSelectedTag(tag);
    }
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (selectedTag) {
      params.set('tag', selectedTag);
    } else {
      params.delete('tag');
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [selectedTag, navigate, location.pathname]);

  useEffect(() => {
    Object.keys(posts).forEach(postId => {
      fetch(`http://localhost:5000/api/posts/${postId}/viewCount`)
        .then(response => response.json())
        .then(data => {
          posts[postId].viewCount = data.viewCount;
        });
    });
  }, []);

  const sortedPosts = Object.entries(posts).sort(([idA, postA], [idB, postB]) => {
    if (sortOrder === 'mostViewed') {
      return postB.viewCount - postA.viewCount;
    }
    const dateA = new Date(postA.date);
    const dateB = new Date(postB.date);
    return sortOrder === 'newToOld' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  const filteredPosts = selectedTag
    ? sortedPosts.filter(([id, post]) => post.tags.includes(selectedTag))
    : sortedPosts;

  const uniqueTags = Array.from(new Set(Object.values(posts).flatMap(post => post.tags)));

  return (
    <div className="all-posts-page">
      <PostsNavBar />
      <div className="filter-bar">
        <label>
          Sort by:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'oldToNew' | 'newToOld' | 'mostViewed')}>
            <option value="newToOld">New to Old</option>
            <option value="oldToNew">Old to New</option>
            <option value="mostViewed">Most Viewed</option>
          </select>
        </label>
        <label>
          Filter by tag:
          <select value={selectedTag || ''} onChange={(e) => setSelectedTag(e.target.value || null)}>
            <option value="">All</option>
            {uniqueTags.map((tag, index) => (
              <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="all-posts">
        <h1>All Posts</h1>
        <div className="posts-list">
          {filteredPosts.length === 0 ? (
            <p>Sorry, no available posts.</p>
          ) : (
            filteredPosts.map(([postId, post]) => (
              <div key={postId} className="post-summary">
                <Link to={`/tufts/posts/${postId}`}>
                  <img src={post.imageUrl} alt={post.title} />
                  <h2>{post.title}</h2>
                  <p>{post.date}</p>
                  <p>{post.author}</p>
                  <p>Views: {post.viewCount}</p>
                  <div className="tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;