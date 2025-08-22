import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './StoriesPage.css';

const stories = [
  {
    id: 1,
    title: 'TIOLI TARANG / PORTRAITS',
    category: 'Portraits',
    description: 'A beautiful collection of portrait photography capturing the essence of human emotion and character.',
    images: [
      '/Img/slide01.jpg',
      '/Img/slide02.jpg',
      '/Img/slide03.jpg',
      '/Img/collagesnewcopy.jpg'
    ],
    date: '2024'
  },
  {
    id: 2,
    title: 'JAMES & TARA / WEDDING',
    category: 'Wedding',
    description: 'The magical wedding celebration of James and Tara, filled with love, joy, and unforgettable moments.',
    images: [
      '/Img/slide01.jpg',
      '/Img/slide02.jpg',
      '/Img/slide03.jpg',
      '/Img/collagesnewcopy.jpg'
    ],
    date: '2024'
  },
  {
    id: 3,
    title: 'TINA, YOGI / WEDDING',
    category: 'Wedding',
    description: 'Tina and Yogi\'s special day captured through the lens, showcasing their unique love story.',
    images: [
      '/Img/slide01.jpg',
      '/Img/slide02.jpg',
      '/Img/slide03.jpg',
      '/Img/collagesnewcopy.jpg'
    ],
    date: '2024'
  }
];

const StoriesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-open story if ID is provided
  useEffect(() => {
    if (id) {
      const story = stories.find(s => s.id === parseInt(id));
      if (story) {
        setSelectedStory(story);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
      } else {
        // If story not found, redirect to stories page
        navigate('/stories');
      }
    }
  }, [id, navigate]);

  const openStory = (story) => {
    setSelectedStory(story);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeStory = () => {
    setSelectedStory(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
    
    // If we're on a specific story page, navigate back to stories list
    if (id) {
      navigate('/stories');
    }
  };

  const nextImage = () => {
    if (selectedStory) {
      setCurrentImageIndex((prev) => 
        prev === selectedStory.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedStory) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedStory.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeStory();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  React.useEffect(() => {
    if (selectedStory) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedStory]);

  return (
    <div className="stories-page">
      <Header />
      <main>
        <section className="stories-hero">
          <div className="stories-hero-content">
            <button 
              className="back-to-home-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Home
            </button>
            <h1>Stories</h1>
            <p>Capturing moments that tell your unique story</p>
          </div>
        </section>

        <section className="stories-grid-section">
          <div className="stories-container">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="story-card"
                onClick={() => openStory(story)}
              >
                <div className="story-image">
                  <img src={story.images[0]} alt={story.title} />
                  <div className="story-overlay">
                    <div className="story-info">
                      <h3>{story.title}</h3>
                      <p className="story-category">{story.category}</p>
                      <p className="story-date">{story.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedStory && (
        <div className="story-modal" onClick={closeStory}>
          <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeStory}>×</button>
            
            <div className="story-header">
              <h2>{selectedStory.title}</h2>
              <p className="story-category">{selectedStory.category}</p>
              <p className="story-date">{selectedStory.date}</p>
            </div>

            <div className="story-description">
              <p>{selectedStory.description}</p>
            </div>

            <div className="story-gallery">
              <button className="nav-button prev" onClick={prevImage}>‹</button>
              <div className="main-image">
                <img 
                  src={selectedStory.images[currentImageIndex]} 
                  alt={`${selectedStory.title} - Image ${currentImageIndex + 1}`}
                />
              </div>
              <button className="nav-button next" onClick={nextImage}>›</button>
            </div>

            <div className="image-counter">
              {currentImageIndex + 1} / {selectedStory.images.length}
            </div>

            <div className="thumbnail-grid">
              {selectedStory.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default StoriesPage;
