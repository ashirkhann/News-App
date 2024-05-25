import React from 'react';
import './LoadingSkeleton.css';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <div className="skeleton header"></div>
      <div className="skeleton text-line"></div>
      <div className="skeleton text-line"></div>
      <div className="skeleton text-line short"></div>
    </div>
  );
}

export default LoadingSkeleton;
