import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Information */}
          <div className="footer-contact">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📩</span>
                <a href="mailto:skyblessingflims@gmail.com" className="contact-link">
                  skyblessingflims@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">☎️</span>
                <a href="tel:+917777870725" className="contact-link">
                  7777870725
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a 
                  href="https://www.instagram.com/theskyblessing/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @theskyblessing
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} Skyblessing Films. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <button onClick={scrollToTop}>Back to Top</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 