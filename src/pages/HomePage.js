import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeHeroSlideshow from '../components/HomeHeroSlideshow';
import HomeStatement from '../components/HomeStatement';
import HomeCollageSlider from '../components/HomeCollageSlider';
import HomeStories from '../components/HomeStories';
import InstagramFeed from '../components/InstagramFeed';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HomeHeroSlideshow />
        <HomeStatement />
        <HomeCollageSlider />
        <InstagramFeed />
        <HomeStories />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
