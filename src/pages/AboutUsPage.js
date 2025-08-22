import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import InstagramFeed from '../components/InstagramFeed';
import './AboutUsPage.css';

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us-page">
      <Header />
      <main>
        <section className="about-hero">
          <div className="about-hero-content">
            <button 
              className="back-to-home-btn"
              onClick={() => navigate('/')}
            >
              ← Back to Home
            </button>
            <h1>About Us</h1>
            <p>Capturing life's most precious moments with passion and precision</p>
          </div>
        </section>

        <AboutUs />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
