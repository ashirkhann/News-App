import React, { useEffect } from 'react';
import './NewsListing.css';
import NewsCard from '../newsCard/NewsCard';

const NewsListing = ({stories}) => {

  return (
    <div className='news-listing'>
      {stories?.map((story) => (
        <div className="story" key={story.id}>
          <NewsCard story={story} />
        </div>
      ))}
    </div>
  );
};

export default NewsListing;
