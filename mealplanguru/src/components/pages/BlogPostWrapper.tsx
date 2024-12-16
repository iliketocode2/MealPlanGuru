import React from 'react';
import BlogPost from '../BlogPost.tsx';
import '../../styles/PostWriteUp.css';

export default function BlogPostWrapper() {
    return (
    <div className="main">
        <BlogPost
            title="Title"
            date="Date"
            content="Content"
            author="Author"
            imageUrl="Image URL"
        />
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
            <h4>Opinion: another thing</h4>
            <p>A short description can go here</p>
          </div>
        </div>
      </div>
    </div>
    );
}