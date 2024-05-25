import React from 'react';
import './NewsCard.css'

const NewsCard = ({ story }) => {
  const { title, by, score, url, time, text } = story;

  // Convert Unix timestamp to human-readable date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Placeholder text for the news summary
  const placeholderText = "No Description is avaiable for this news.";

  return (
    <div className="news-card" >
      <div className="news-details">
        <p className="news-author">By {by}</p>
        <span className="news-published">
          <i className="ri-time-line"></i> {/* Clock icon */}
          {formatDate(time)}
        </span>
      </div>
      <h2 className="news-title">{title}</h2>
      <p className="news-summary">{text || placeholderText}</p> 
      
      <a className="news-link" href={url} target="_blank" rel="noopener noreferrer">
        <button className='btn'>Read More</button>
      </a>
    </div>
  );
};

export default NewsCard;
