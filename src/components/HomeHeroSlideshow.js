import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HomeHeroSlideshow.css';

const heroSlides = [
  process.env.PUBLIC_URL + '/Img/slide01.jpg',
  process.env.PUBLIC_URL + '/Img/slide02.jpg',
  process.env.PUBLIC_URL + '/Img/slide03.jpg'
];

const HomeHeroSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setIndex((i) => (i + 1) % heroSlides.length);

  return (
    <section className="hero-slideshow" id="galleries">
      <button className="nav prev" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="nav next" onClick={next} aria-label="Next slide">›</button>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="slide"
          style={{ backgroundImage: `url(${heroSlides[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </section>
  );
};

export default HomeHeroSlideshow;


