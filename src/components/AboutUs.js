import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src="Img/02.jpg" alt="The Sky Blessings Photography" />
              <div className="image-overlay">
                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="story-section">
              <h3>Our Story</h3>
              <p>
                Founded with a vision to transform ordinary moments into extraordinary memories, 
                The Sky Blessings has been at the forefront of creative photography for over a decade. 
                We believe that every love story deserves to be told beautifully, every celebration 
                deserves to be immortalized, and every emotion deserves to be captured authentically.
              </p>
            </div>
            
            <div className="philosophy-section">
              <h3>Our Philosophy</h3>
              <div className="tagline-highlight">
                <span>"YOU FEEL. I FOCUS. WE FRAME"</span>
              </div>
              <p>
                This isn't just our tagline, it's our approach to every shoot. We understand that 
                photography is more than just taking pictures; it's about creating art that speaks 
                to the heart. We blend technical expertise with artistic vision to deliver images 
                that don't just show what happened, but how it felt.
              </p>
            </div>
            
            <div className="expertise-showcase">
              <div className="expertise-header">
                <h3>What Sets Us Apart</h3>
                <p className="expertise-subtitle">Excellence in every frame, passion in every pixel</p>
              </div>
              
              <div className="expertise-grid">
                <div className="expertise-card primary">
                  <div className="card-icon">📸</div>
                  <h4>Technical Mastery</h4>
                  <p>Cutting-edge equipment and advanced techniques</p>
                </div>
                
                <div className="expertise-card">
                  <div className="card-icon">🎨</div>
                  <h4>Artistic Vision</h4>
                  <p>Creative composition and storytelling</p>
                </div>
                
                <div className="expertise-card">
                  <div className="card-icon">💝</div>
                  <h4>Personal Connection</h4>
                  <p>Tailored experiences for every client</p>
                </div>
                
                <div className="expertise-card">
                  <div className="card-icon">✨</div>
                  <h4>Quality Craftsmanship</h4>
                  <p>Meticulous editing and premium deliverables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-extension">
          <div className="values-section">
            <div className="values-content">
              <div className="values-text">
                <h3>Our Core Values</h3>
                <p>
                  We believe in authenticity, creativity, and excellence. Every photograph we take 
                  reflects our commitment to capturing genuine emotions and creating timeless art.
                </p>
              </div>
              <div className="values-visual">
                <div className="value-pill">Authenticity</div>
                <div className="value-pill">Creativity</div>
                <div className="value-pill">Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="promise-section">
            <h3>Our Promise</h3>
            <p>
              When you choose The Sky Blessings, you're not just hiring photographers - you're 
              partnering with storytellers who will preserve your memories with the same care and 
              attention you put into creating them. We promise to deliver not just photographs, 
              but timeless pieces of art that will be cherished for generations to come.
            </p>
          </div>
          
          <div className="cta-section">
            <div className="cta-content">
              <p className="cta-text">Ready to create your perfect moments?</p>
              <p className="cta-subtitle">Let's turn your vision into reality</p>
              <a href="#contact" className="cta-button">Let's Connect</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
