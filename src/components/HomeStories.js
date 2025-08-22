import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeStories.css';

const items = [
  {
    id: 1,
    src: '/Img/slide01.jpg',
    title: 'TIOLI TARANG / PORTRAITS',
    category: 'Portraits'
  },
  {
    id: 2,
    src: '/Img/slide02.jpg',
    title: 'JAMES & TARA / WEDDING',
    category: 'Wedding'
  },
  {
    id: 3,
    src: '/Img/slide03.jpg',
    title: 'TINA, YOGI / WEDDING',
    category: 'Wedding'
  }
];

const HomeStories = () => {
  const navigate = useNavigate();

  const handleStoryClick = (storyId) => {
    navigate(`/stories/${storyId}`);
  };

  return (
    <section className="home-stories" id="stories">
      <div className="stories-header">
        <h3>Real Love Stories</h3>
        <button 
          className="view-all-stories-btn"
          onClick={() => navigate('/stories')}
        >
          View All Stories
        </button>
      </div>
      <div className="stories-grid">
        {items.map((story) => (
          <figure 
            className="story" 
            key={story.id}
            onClick={() => handleStoryClick(story.id)}
          >
            <img src={story.src} alt={story.title} />
            <figcaption>{story.title}</figcaption>
            <div className="story-hover-overlay">
              <span className="view-story-text">View Story</span>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default HomeStories;


