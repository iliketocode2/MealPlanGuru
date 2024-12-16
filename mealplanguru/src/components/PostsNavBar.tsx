import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/PostsNavBar.css';

const PostsNavBar: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="posts-nav-bar">
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={to}>
            {' / '}
            {isLast ? (
              <span>{value}</span>
            ) : (
              <Link to={to}>{value}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default PostsNavBar;