import React, { useState, useEffect } from 'react';
import './Home.css';
import { SearchBar, NewsListing, LoadingSkeleton } from '../../components';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const [storyType, setStoryType] = useState('topstories');
  const [fetchCount, setFetchCount] = useState(10); // Number of stories to fetch each time
  const [isLoadingMore, setIsLoadingMore] = useState(false); // State to handle "Load More" loader
  const [isFetching, setIsFetching] = useState(false); // State to prevent multiple fetches
  const [searchQuery, setSearchQuery] = useState('');
  const { stories, loading } = useFetch(storyType, fetchCount, searchQuery);

  const handleTypeChange = (event) => {
    setStoryType(event.target.value);
    setFetchCount(10); // Reset fetch count when story type changes
    setSearchQuery('')
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setFetchCount(10); // Reset fetch count when search query changes
  };
  const loadMoreStories = () => {
    setIsLoadingMore(true); // Show loader when loading more stories
    setFetchCount((prevFetchCount) => prevFetchCount + 10);
  };

  // Effect to hide the loader when new stories are fetched
  useEffect(() => {
    if (!loading) {
      setIsLoadingMore(false);
    }
  }, [loading]);

  // Effect to trigger loadMoreStories when scrolled to the end
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 && // Adjust this threshold as needed
        !loading &&
        !isFetching
      ) {
        setIsFetching(true);
        loadMoreStories();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, isFetching]);

  // Effect to reset isFetching when new stories are fetched
  useEffect(() => {
    if (!loading) {
      setIsFetching(false);
    }
  }, [loading]);

  return (
    <div className="container">
      <SearchBar selectedType={storyType} onChange={handleTypeChange} onSearchSubmit={handleSearchSubmit} />
      {loading && stories.length === 0 ? (
        Array.from({ length: 8 }).map((_, index) => <LoadingSkeleton key={index} />)
      ) : (
        <>
          <NewsListing stories={stories} />
          {isLoadingMore && <div className="loader"></div>}
        </>
      )}
    </div>
  );
};

export default Home;
