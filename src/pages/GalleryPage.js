import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeCollageSlider from '../components/HomeCollageSlider';
import InstagramFeed from '../components/InstagramFeed';
import './GalleryPage.css';

const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">
      <Header />
      <main>
        <section className="gallery-hero">
          <div className="gallery-hero-content">
            <button 
              className="back-to-home-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Home
            </button>
            <h1>Gallery</h1>
            <p>We are creating fiction out of reality.</p>
          </div>
        </section>

        <HomeCollageSlider />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
