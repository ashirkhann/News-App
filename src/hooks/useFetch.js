import React, { useState, useEffect } from 'react';
import { fetchStoriesByType, fetchStory, fetchStoriesByQuery } from '../api/api';

const useFetch = (storyType, fetchCount, searchQuery) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let storyIds;
        if (searchQuery) {
          // Fetch stories based on search query
          storyIds = await fetchStoriesByQuery(searchQuery);
        } else {
          // Fetch stories based on story type
          storyIds = await fetchStoriesByType(storyType);
        }
        const storyPromises = storyIds.slice(0, fetchCount).map(id => fetchStory(id));
        const newStories = await Promise.all(storyPromises);
        setStories(newStories);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [storyType, fetchCount, searchQuery]);

  useEffect(() => {
    setStories([]);
  }, [storyType, searchQuery]);

  return { stories, loading };
};

export default useFetch;
